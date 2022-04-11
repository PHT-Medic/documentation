# PHT Trains
This section will provide explanations and example for writing code and queries for PHT trains, it does not
cover the organizational aspects (such as what stations participate etc.) but focuses on how to write the code that
will be executed as a train and how to define queries.
Information on how to build trains and actually send them on their way can be found in the user guide for the
[UI](user_interface.md).

This example can be used as `entrypoint.py`, which is namely reference in this documentation.

## Defining Trains

### Example Train

#### Calculate average age based on a fhir query
The query to be used in this train is the CSV version of the minimal example found in the next section.
What this train will do ist calculate the average age of patients matching the query across multiple stations.  
The stations will pass the query results to the train as volumes and also set the environment variable `TRAIN_DATA_PATH`
inside the train container, which is used by the train to load the passed csv file.

!!! warning
    Not sure if Code is correct. You do not exactly calculate the true average over all stations, instead only an approximation.

    /2 -> /num_stations_visited and do not' = new_avergae -> += new_average

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






