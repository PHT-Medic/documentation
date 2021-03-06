# CORD Demo FHIR
You need to specify two minimal things for our self developed FHIR client in our train-library:

1. The Resource to access (e.g. `Patient` or `Condition`).
2. The format and name the file should be provided to the train (accessed in the algorithm).

To see what kind of queries are possible read the following general [documentation](https://www.hl7.org/fhir/search.html) of FHIR search queries.

## Minimal FHIR queries
The train library requires the following minimal specifications:

```json
{
  "query": "/Patient?",
  "data": {
    "output_format": "xml",
    "filename": "patients.xml" 
  }
}
```

This minimal query will load **all CORD demo data** from each station.

## FHIR queries with conditions

If you want to query specific gender or ages extend your query:
```json
{
  "query": {
    "resource": "Patient",
    "parameters": [
      {
        "variable": "birthdate",
        "condition": "gt1960"
      },
      {
        "variable": "gender",
        "condition": "female"
      }
    ]
  },
  "data": {
    "output_format": "json",
    "filename": "query_results.json"
  }
}
```
This query will now only return female subjects, born in a year greater than 1960 for the Python train example. The R demo trains require as input data:
```json
{
  "data": {
    "output_format": "xml",
    "filename": "patients.xml"
  }
}
```


## FHIR queries using different resources and conditions
More advanced queries including searching multiple resources are demonstrated:
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
Now only male subjects born in a year greater than 1980 that have a condition related to [PKU](https://en.wikipedia.org/wiki/Phenylketonuria) and 
[unstable angina pectoris](https://www.msdmanuals.com/de-de/profi/herz-kreislauf-krankheiten/koronare-herzkrankheit/instabile-angina-pectoris)
will be returned.


Our PHT FHIR Client is part of our [train-container-library](https://github.com/PHT-Medic/train-container-library.git).