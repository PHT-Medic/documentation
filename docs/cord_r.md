#### R code
You can find this example train within our R cord-demo [repository](https://github.com/PHT-Medic/cord-pht-demo/tree/master/R)
This following R example code uses the following FHIR query:
```` json
{
  "query": {
    "resource": "Patient"
  },
  "data": {
    "output_format": "xml",
    "filename": "patients.xml"
  }
}
````

This example uses the FHIRCracker to load the provided FHIR bundles (`patients.xml`) and plots age distribution:
````{r}
#######################################################################################################################
##         Zur Alterspyramide zu rechnen
#######################################################################################################################
library(tidyverse)
library(eeptools) # um Alter zu berechnen
library(ggplot2)# für muster age pyramid
library(fhircrackr)

# empty global enviroment
rm(list = ls())

options(warn=-1)# warnung ausblenden

#LOAD Data from importet FHIR
loaded_bundles <- fhir_load("/opt/train_data/")
design <- list(
  Patients = list(
    resource = "//Patient",
    cols = list(
      patient_id = "id",
      managing_orga = "managingOrganization/reference",
      name_family = "name/family",
      name_given = "name/given",
      gender = "gender",
      birthdate = "birthDate"
    )
  )
)

# crack fhir bundles
dfs <- fhir_crack(loaded_bundles, design)

# save raw patients dataframe
data <- dfs$Patients

##Data folders#########################################################################################################
result_folder <- "./opt/pht_results/"

# Berechne Alter auf der grund von Geburtsdatum
data$AngabeAlter <- floor(age_calc(as.Date(data$birthdate), unit="years"))

#WRITE Mean Data for PHT and add up if available ---------------------------
data_pht_man = data %>% subset(gender=="male")
data_pht_woman = data %>% subset(gender=="female")

output_pht_df <- data.frame(
  sex = c("male", "female"),
  number = c(length(data_pht_man$AngabeAlter), length(data_pht_woman$AngabeAlter)),
  age_mean = c(mean(data_pht_man$AngabeAlter), mean(data_pht_woman$AngabeAlter))
)

#if There is a count of 0 -> replace NaN with 0 for correct addition
output_pht_df[is.na(output_pht_df)]<-0

#Check if there are previous results -> if yes add up
if (file.exists(paste(result_folder,"result_mean.csv", sep = ""))) {
  
  previous_mean_df <- read.csv2(paste0(result_folder,"result_mean.csv"))
  
  output_both <- previous_mean_df %>% 
    # combine both datasets - add second dataframe in rows
    bind_rows(
      output_pht_df
    ) %>% 
    # rename column "number" to preserve for calculation
    dplyr::rename( 
      number_old = number
    ) %>% 
    # apply following operations on grouped variable sex
    group_by(sex) %>% 
    # summarize table: compute mean and number
    dplyr::summarize(
      # sum up all numbers of patients
      number = sum(number_old),
      # compute new mean
      age_mean = sum(age_mean * number_old)/number
    )
 
  # overwrite variable for storing
  output_pht_df <- output_both

  message("previous PHT result found -> Add up")
}

# print results for fun
print(output_pht_df)

# write results (combined or not) to csv
write.csv2(output_pht_df, "./opt/pht_results/result_mean.csv", row.names = FALSE)
#----------------------------------------------------------------------------


# Teile in Altersgruppen ein
data$AngabeAlter <- cut(data$AngabeAlter, breaks = c(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120))

# Gruppiere
result  <- as.data.frame(data %>%
                           group_by(  AngabeAlter, gender) %>%
                           summarise(Anzahl = n()))


################## Um der Alterspyramid zu rechnen#####################################################################
# Nehmen wir Geschlechht, Alter, Anzahl
#######################################################################################################################
stratified <- result[,c('gender','AngabeAlter','Anzahl')]
stratified_female <- (data = stratified %>% subset(gender=="female"))
stratified_male <- (data = stratified %>% subset(gender=="male")) %>% transform(Anzahl = (data = stratified %>% subset(gender=="male"))$Anzahl * -1 )
stratified_wide <- rbind(stratified_female,stratified_male)

#Labellen name als angabe
names(stratified_wide)[names(stratified_wide)== "AngabeAlter"] <- "ageG"
names(stratified_wide)[names(stratified_wide)== "Anzahl"] <- "Count"
names(stratified_wide)[names(stratified_wide)== "gender"] <- "gender"

#Alterspyramid kozipieren
g <- ggplot(stratified_wide,aes(x=Count,y=ageG,fill=gender))
g + geom_bar(stat="identity")
````

You can find more R demo trains within our cord-demo [repository](https://github.com/PHT-Medic/cord-pht-demo/tree/master/R)


### Credits
These example trains are based on the [Projektathon4 repository](https://github.com/medizininformatik-initiative/usecase-cord/tree/master/Projektathon4)