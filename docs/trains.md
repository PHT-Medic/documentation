# PHT Trains
This section will provide explanations and example for writing code and queries for PHT trains, it does not
cover the organizational aspects (such as what stations participate etc.) but focuses on how to write the code that
will be executed as a train and how to define queries.
Information on how to build trains and actually send them on their way can be found in the user guide for the
[UI](user_interface.md).


## Defining trains

### Example Trains

#### Calculate average age based on a fhir query
The query to be used in this train is the CSV version of the minimal example found in the next section.
What this train will do ist calculate the average age of patients matching the query across multiple stations.  
The stations will pass the query results to the train as volumes and also set the environment variable `TRAIN_DATA_PATH`
inside the train container, which is used by the train to load the passed csv file.


```python
import pandas as pd
import os
import json
import datetime


RESULTS_PATH = "/opt/pht_results/average_age.json"


def load_previous_data(path):
    if os.path.exists(path):
        with open(path, "r") as f:
            average_age_dict = json.load(f)

        return average_age_dict

    else:
        return None


def age_from_dob(dob):
    today = datetime.date.today()
    return today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))


def calculate_new_average(average_age_dict, data_path, results_path):
    # load the data and ensure that birthdate is a datetime column
    data = pd.read_csv(data_path)
    data["birthDate"] = pd.to_datetime(data["birthDate"])

    ages = data["birthDate"].apply(lambda x: age_from_dob(x))

    local_average = ages.mean()

    # previous results exist load them otherwise create a new dictionary containing the results
    if average_age_dict:
        prev_average = average_age_dict["average_age"]
        new_average = (prev_average + local_average) / 2 if prev_average else local_average
        average_age_dict["average_age"] = new_average
    else:
        new_average = local_average
        average_age_dict = {"average_age": new_average}

    print(average_age_dict)

    # store the updated results
    with open(results_path, "w") as f:
        json.dump(average_age_dict, fp=f, indent=2)


def main():
    data_path = os.getenv("TRAIN_DATA_PATH", "/opt/train_data/patients.csv")
    print(f"Loading data at {data_path}")
    prev_results = load_previous_data(RESULTS_PATH)
    calculate_new_average(prev_results, data_path, RESULTS_PATH)


if __name__ == '__main__':
    main()

```


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


#### Advanced Example
To define more complex queries, including resource chaining and additional variable `has` inside the query object
of the `query.json` can be used to find resources based on other resources referring to them.  
The query defined in the 
example below extracts the same data as the minimal examples above but limits the returned patients based on 
Observations and Conditions that the patient is required to have.

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
        "params": ["I63.0","I63.1","I63.2","I63.3","I63.4","I63.5","I63.6","I63.7","I63.8","I63.9"]
      },
      {
        "resource": "Condition",
        "property": "code",
        "params": ["D70.0","D70.10","D70.11","D70.11","D70.12","D70.13","D70.14","D70.18","D70.19","D70.3","D70.5","D70.6","D70.7"]
      }
    ]
  },
  "data": {
    "output_format": "csv",
    "variables": [
      "id",
      "birthDate",
      "gender"
    ]
  }
}
```





