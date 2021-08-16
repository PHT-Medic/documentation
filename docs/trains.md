# PHT Trains


## Writing a FHIR query
Data in the PHT is accessed (or at least indexed) via station-owned FHIR server. Users creating a train can specify the
FHIR query to be executed either as a valid FHIR-API query string or by specifying the requested Resource(s) and the
filter parameters in the `query.json` file created via the UI.  
For more information on available FHIR resources and the fields they contain, visit the
[FHIR Documentation](https://www.hl7.org/fhir/resourcelist.html). We assume connected FHIR servers fulfill the specifications
defined in FHIR Release #4 (v4.0.1).  
Additionally, the `query.json` file contains specifications on how the response from the FHIR server should be
stored and optionally parsed.

### Examples

#### Minimal example - CSV
This very minimal example shows how to define a query that simply gets all male patients and returns as output a csv file
containing id, birthdate and gender for each patient matching the criteria (gender == male).
```json
{
  "query": {
    "resource": "Patient",
    "parameters": [
      {
        "variable": "gender",
        "condition": "male"
      }
    ]
  },
  "data": {
    "output_format": "csv",
    "filename": "patients.csv",
    "variables": [
      "id",
      "birthDate",
      "gender"
    ]
  }
}
```

#### Minimal Example - URL + JSON
The following code block shows the definition of the same query as above but this time defined by a FHIR conform query 
string and returning the full resources returned by the server. 

```json
{
  "query": "Patient?gender=male",
  "data": {
    "output_format": "raw",
    "filename": "patients.json"
  }
}
```

## Example Trains