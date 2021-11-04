# PHT CORD Demo
!!! warning
Under construction. This documentation is not complete.

This section will provide explanations and examples for writing and executing CORD demo code and queries by using PHT meDIC.
By using the demo account, we automatically accept and execute your analysis over three trains providing secure access to synthetic 
CORD demo data in FHIR.

Demo credentials for [PHT demo](https://demo.personalhealthtrain.de) username ``demo_user`` and password ``cord_pht_demo``. With this user you can use all functionalities and
take a look at our admin area. Don't worry and play around, you cannot break something and the system resets itself.

## Running CORD demo trains
We suggest to you to follow these steps:
1. Download and install our offline tool [Offline Tool releases](https://github.com/PHT-Medic/offline-tool/releases).
2. Download the all demo [Keys](https://github.com/PHT-Medic/cord-pht-demo/tree/master/cord-demo-keys). You will need those to decrypt your results.
3. Define your FHIR query to be executed (see section below).
4. Define your analysis (see section below).
5. Submit your code (see section below).
6. Decrypt results.

### Step 2 - Offline Tool
Download and install the offline tool. Get familiar with its functionalities additional infos can be found here
[documentation]()

### Step 2 - Key loading
The demo user has predefined [keys](https://github.com/PHT-Medic/cord-pht-demo/tree/master/cord-demo-keys). You need to download and use those in order to decrypt the analysis results.
Go to the `Security` Section of the tool and load the previous downloaded `demo-start123_sk.pem` private key.
You need to enter the password of the private ``start123``. Now you can continue with train submission - you will need to sign
with your private key your submitted code and query.

### Step 3 - FHIR queries
Our self implemented train-library not only includes security but also standardised FHIR query execution and access and supports
currently the following servers: IBM, Hapi and Blaze. In this demo we use HAPI FHIR servers.
Please follow these in order to create a first FHIR query.

1. Login to the UI
2. Create a new train
3. Select the CORD Demo
4. Specify the stations to be executed at
5. Specify the query

#### FHIR queries

The train library requires the following minimal specifications:


```json
{
  "query": "Patient", # Recourses queried
  "data": {
    "output_format": "json", # raw json and XML are currently supported
    "filename": "patients.json" # file name and format to be loaded in the code
  }
}
```

This minimal query will load all CORD demo data from each station.
If you want to query specific gender, ages or specify data column names extend your query:
```json
{
  "query": {
    "resource": "Patient",
    "parameters": [
      {
        "variable": "birthdate",
        "condition": "gt1960" # greater than 196ß born patiens
      },
      {
        "variable": "gender",
        "condition": "female" # only female subjects
      }
    ]
  },
  "data": {
    "output_format": "raw",
    "filename": "query_results.json"
  }
}
```
To see what kind of queries are possible read the following [documentation](https://www.hl7.org/fhir/search.html).
Step 3 -
### Step 3 - write your analysis code
In any IDE you can write your analysis code. We suggest to use PyCharm for Python and RStudio for R code.
These following examples will be executed at each station. Please get familiar with the following Python or R code:


#### R code
This following example code uses the following query:
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

Example uses the FHIRCracker to load the provided FHIR bundles (`patients.xml`) and plots age distribution:
```` R
############################################################################################################################
##         Zur Alterspyramide zu rechnen
##############################################################################################################################
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

##Data folders#############################################################################################################
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


################## Um der Alterspyramid zu rechnen######################################################################
# Nehmen wir Geschlechht, Alter, Anzahl
############################################################################################################################
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
You can find more demo trains within our cord-demo [repository](https://github.com/PHT-Medic/cord-pht-demo/blob/master/R)
#### Python code
This code can be downloaded from this [repository](https://github.com/PHT-Medic/cord-pht-demo/blob/master/Python/minimal_demo.py).
An advantage to use Python is the use of our secure count possibilities, based paillier cryptosystem.
```` python
import os
import json
import pandas as pd
import pathlib
import pickle
from dotenv import load_dotenv, find_dotenv
from train_lib.fhir import PHTFhirClient


DATA_PATH = os.getenv("TRAIN_DATA_PATH")

# for trains submitted via UI or build with dockerfile - docker_ide = False
QUERY_FILE = "/opt/pht_train/cord_query.json"
FHIR_PATH = "/opt/train_data/cord_results.json"
MODEL_PATH = '/opt/pht_results/model.pkl'
RESULT_PATH = '/opt/pht_results/results.pkl'


def load_if_exists(model_path: str):
    """
    Load previous computed results, if available
    :param model_path: Path of models or results to load
    :return: model
    """
    p = pathlib.Path(model_path)
    if pathlib.Path.is_file(p):
        print("Loading previous results")
        with open(p, "rb") as model_file:
            model = pickle.load(model_file)
        return model
    else:
        return None


def save_results(results, result_path):
    """
    Create (if doesnt exist) a result directory and store the analysis results within
    :param results: Result content
    :param result_path:  Path of results file
    :return: store results as pickle file
    """
    dirPath = '/opt/pht_results'
    try:
        # Create target Directory
        os.mkdir(dirPath)
        print("Directory ", dirPath,  " Created (usually done by TB)")
    except FileExistsError:
        print("Directory ", dirPath,  " already exists (done by TB)")
    p = pathlib.Path(result_path)
    with open(p, 'wb') as results_file:
        return pickle.dump(results, results_file)


def parse_fhir_response() -> pd.DataFrame:
    """
    Load and parse provided FHIR resources to a pandas dataframe
    :return: 
    """
    with open(FHIR_PATH, "r") as f:
        results = json.load(f)
    parsed_resources = []
    for patient in results:
        resource = patient["resource"]
        parsed_resources.append(parse_resource(resource))

    df = pd.DataFrame(parsed_resources)
    return df


def parse_resource(resource):
    """
    Parse a FHIR resource returned from a FHIR server in a desired format

    :param resource:
    :return: dictionary of parsed resource
    """
    # TODO change here to specify required resources
    sequence_dict = {
        "givenName": resource['name'][0]['given'],
        "familyName": resource['name'][0]['family'],
        "birthDate": resource["birthDate"],
        "gender": resource["gender"]
    }
    return sequence_dict


def occurence_data(pat_df, column):
    """
    Return value counts of given dataframe columns
    :param pat_df: Dataframe
    :param column: Column included in Dataframe
    :return: Series of value occurences
    """

    return pat_df[column].value_counts()

# TODO extend with own custom functions here


if __name__ == '__main__':
    """
    Main analysis function of the train - the CORD minimal demo, requires only result files and no models
    :return:
    """
    load_dotenv(find_dotenv())
    # parse the FHIR response and load previous results (if available)
    pat_df = parse_fhir_response()
    # Try to load previous results, if no exist create dictionary and print results before execution of analysis
    try:
        results = load_if_exists(RESULT_PATH)
    except FileNotFoundError:
        print("No file available")
    if results is None:
        results = {'analysis': {}, 'discovery': {}}
    print("Previous results: {}".format(results))
    
    # Write analysis code here
    # demo function to count occurence of specified variables
    occ = occurence_data(pat_df, 'gender')
    
    results['analysis']['analysis_exec_' + str(len(results['analysis']) + 1)] = occ
    
    # print updated results
    print("Updated results: {}".format(results))
    save_results(results, RESULT_PATH)

````


### Step 4 - Code submission
Upload your analysis code within the UI and select the entrypoint (script to be executed at stations if multiple files are submitted).
The hash of the uploaded files and query needs to be signed by the offline tool with your private key.

TODO add images

### Step 5 - result download and decryption
After a few minutes your train results can be downloaded. The files are automatically encrypted and need to be decrypted with the offline tool.
Please follow these steps:

1. Download results
2. Open the offline tool
3. Go to "Model" section
4. Load your private key
5. Open the result directory
6. Select the files to decrypt
7. Decrypt the files
8. View or process the results locally
TODO add images