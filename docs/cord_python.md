#### Python code
This code can be downloaded from this [repository](https://github.com/PHT-Medic/cord-pht-demo/tree/master/Python).
The following query filters at each station for female patients born greater than 1960.
```` json
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
````
The by the station loaded and  provided `query_results.json` file will be processed and counts the occurrences of values.

```` python
import os
import json
import pandas as pd
import pathlib
import pickle
from dotenv import load_dotenv, find_dotenv
from train_lib.fhir import PHTFhirClient


DATA_PATH = os.getenv("TRAIN_DATA_PATH")
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
An advantage to use Python is the use of our secure count possibilities, based paillier cryptosystem.

Examples for doing such are [here](https://github.com/PHT-Medic/cord-pht-demo/tree/master/Python).
