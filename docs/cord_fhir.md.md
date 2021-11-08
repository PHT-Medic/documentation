# CORD Demo FHIR
You need to specify for our self developed FHIR client in our train-library two minimal things:
1. The Resource to access (e.g. `Patient`or `Condition`).
2. The format and name the file should be provided to train (accessed in the algorithm).

To see what kind of queries are possible read the following general [documentation](https://www.hl7.org/fhir/search.html) of FHIR search queries.

## Minimal FHIR queries

The train library requires the following minimal specifications:


```json
{
  "query": "Patient",
  "data": {
    "output_format": "json",
    "filename": "patients.json" 
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
    "output_format": "raw",
    "filename": "query_results.json"
  }
}
```
This query will now only return female subjects, born greater than 1960.


## FHIR queries of different resources and conditions