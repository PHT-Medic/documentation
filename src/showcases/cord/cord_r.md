#### R code
You can find this example train within our R cord-demo [repository](https://github.com/PHT-Medic/cord-pht-demo/tree/master/R)

### Demo Train 1
This train uses the provided csv input file. You don't need to specify a FHIR query.

### Demo Train 2
The following two demo trains use the [FHIRCracker](https://github.com/firecracker-microvm/firecracker) to load the FHIR xml-bundles.
This train creates an age distribution plot based on FHIR input data.

The corresponding query is:

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
You can extend or modify the query however you like. 

### Demo Train 3
This train creates a histogram based on a complex FHIR query and creates a barplot of the counts.
````json
{
  "query": {
    "resource": "Patient",
    "parameters": [
      {
        "variable": "gender",
        "condition": "male"
      },
      {
        "variable": "birthdate",
        "condition": "gt1980-08-12"
      }
    ],
    "has": [
      {
        "resource": "Condition",
        "property": "code",
        "params": ["E70.0", "I20.0"]
      }
    ]
  },
  "data": {
    "output_format": "xml",
    "filename": "patients.xml"
  }
}
````
You can find more R demo trains within our cord-demo [repository](https://github.com/PHT-Medic/cord-pht-demo/tree/master/R)


### Credits
These example trains are based on the [Projektathon4 repository](https://github.com/medizininformatik-initiative/usecase-cord/tree/master/Projektathon4)