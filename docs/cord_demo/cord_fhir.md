# CORD Demo FHIR
You need to specify for our self developed FHIR client in our train-library two minimal things:
1. The Resource to access (e.g. `Patient`or `Condition`).
2. The format and name the file should be provided to the 5train (accessed in the algorithm).

To see what kind of queries are possible read the following general [documentation](https://www.hl7.org/fhir/search.html) of FHIR search queries.

## Minimal FHIR queries

The train library requires the following minimal specifications:


```json
{
  "query": "Patient",
  "data": {
    "output_format": "xml",
    "filename": "patients.xml" 
  }
}
```

This minimal query will load **all CORD demo data** from each station.

## FHIR queries with conditions

If you want to query specific gender, ages or specify data column names extend your query:
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
This query will now only return female subjects, born greater than 1960 for the Python train example.


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
        "condition": "sa1980-08-12"
      }
    ],
    "has": [
      {
        "resource": "Condition",
        "variable": "code",
        "params": ["E70.0,E70.1,E84.0,E84.1,E84.8,E84.80,E84.87,E84.88,E84.9"]
      }
    ]
  },
  "data": {
    "output_format": "xml",
    "filename": "patients.xml",
    "variables": [
      "id",
      "birthDate",
      "gender"
    ]
  }
}
````
Now only male subjects born age starting after 1980 including a condition related to [PKU](https://en.wikipedia.org/wiki/Phenylketonuria) and [Mukoviszidose](https://www.muko.info/informieren/ueber-die-erkrankung#) 