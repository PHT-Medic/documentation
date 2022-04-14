Data in the PHT is accessed (or at least indexed) via a station-owned FHIR server. Users creating a train can specify the
FHIR query to be executed either as a valid FHIR-API query string or by specifying the requested Resource(s) and the
filter parameters in the `query.json` file created via the UI.  
For more information on available FHIR resources and the fields they contain, visit the
[FHIR Documentation](https://www.hl7.org/fhir/resourcelist.html). We assume connected FHIR servers fulfill the
specifications defined in FHIR Release #4 (v4.0.1).  
Additionally, the `query.json` file contains specifications on how the response from the FHIR server should be stored
and optionally parsed. The following example shows a JSON object defining a query for the Patient resource, the keys
will be explained in the following sections.  

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
    "output_format": "json",
    "filename": "patients.json"
  }
}
````

## Writing a JSON Query

To work properly the json object defined in the `query.json` file must contain the following fields:

- `query` defines the resource to query for and additional parameters to filter the results.
- `data` defines how the results of the query should be stored.

The following sections will detail how to specify a valid FHIR query and define how the output will be stored.

### Defining the query

The `query` key in the `query.json` file can either be a nested JSON object or a string. If it is a string this string
is assumed to be a valid FHIR-API query string.  
In case of a nested JSON object, the object needs to contain the `resource`
key which is the string identifier of the resource to query for. The other keys in the object are optional and can be
used to define the filter parameters.

#### Filter parameters
Inside the query object the `parameters` key is used to define the filter parameters. The value of this key is a
list of objects. Each object in the list defines a single filter parameter. The object defines the keys `variable` and
`condition`.   
The `variable` key defines the name of the parameter, `.` notation can be used to access nested resources i.e.
`observation.code`.  
The `condition` key defines the condition to be evaluated. The `condition` key can either a string or a list strings.
Comparison operators such <= can be defined as prefixes are parsed according to the definitions of the 
[FHIR API standards](https://www.hl7.org/fhir/search.html#prefix).

#### Reverse Chaining
[Reverse chaining](https://www.hl7.org/fhir/search.html#has) in FHIR is the process of selecting resources based on other
resources that refer to them. For example, if a patient has a condition, the patient can then be selected based on the
condition.  
The optional `has` key in the query defines the resource that refer to the resource defined in the `resource` key. 
It is defined as an object with the keys `resource` and `property` and `params`. Where the `property` is equivalent to
the `variable` key in the filter parameters and the `params` is a list of strings that define the filter parameters.



### Specifying output
The second required key in the `query.json` file is `data`. This key defines how the results of the query should be 
formatted and where the results should be stored. The value of this key is an object with the following keys:

- `output_format`: defines the format of the output. The value of this key is a string which can be either `json` or `xml`.
- `filename`: defines the name of the file where the results should be stored.


### Examples

#### Minimal example - JSON

This very minimal example shows how to define a query that simply gets all male patients and returns as output a csv
file containing id, birthdate and gender for each patient matching the criteria (gender == male).

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
    "output_format": "json",
    "filename": "patients.json"
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
    "output_format": "json",
    "filename": "patients.json"
  }
}
```
#### Advanced Example - JSON

To define more complex queries, including resource chaining and additional variable `has` inside the query object of
the `query.json` can be used to find resources based on other resources referring to them.  
The query defined in the example below extracts the same data as the minimal examples above but limits the returned
patients based on Observations and Conditions that the patient is required to have.

```json
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
        "resource": "Observation",
        "property": "code",
        "params": [
          "I63.0",
          "I63.1",
          "I63.2",
          "I63.3",
          "I63.4",
          "I63.5",
          "I63.6",
          "I63.7",
          "I63.8",
          "I63.9"
        ]
      },
      {
        "resource": "Condition",
        "property": "code",
        "params": [
          "D70.0",
          "D70.10",
          "D70.11",
          "D70.11",
          "D70.12",
          "D70.13",
          "D70.14",
          "D70.18",
          "D70.19",
          "D70.3",
          "D70.5",
          "D70.6",
          "D70.7"
        ]
      }
    ]
  },
  "data": {
    "output_format": "json",
    "filename": "patients.json"
  }
}
```

#### Advanced Example - URL + JSON

The following code block shows the definition of the same query as above but this time defined by a FHIR conform query
string and returning the full resources returned by the server.

```json
{
  "query": "Patient?gender=male&birthdate=sa1980-08-12&_has:Observation:patient:code=I63.0,I63.1,I63.2,I63.3,I63.4,I63.5,I63.6,I63.7,I63.8,I63.9&_has:Condition:patient:code=D70.0,D70.10,D70.11,D70.11,D70.12,D70.13,D70.14,D70.18,D70.19,D70.3,D70.5,D70.6,D70.7",
  "data": {
    "output_format": "json",
    "filename": "patients.json"
  }
}
```