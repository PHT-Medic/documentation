# PHT CORD Demo
This section will provide explanations and examples for writing and executing CORD demo code and queries by using PHT meDIC.
By using the demo account, we automatically accept and execute your analysis over three trains providing secure access to synthetic 
CORD demo data in FHIR.


## Running CORD demo trains

We suggest to you to follow these steps:
1. Download and install our offline tool [LINK_TODO](https://)
2. Download the following example key pairs
3. Define your FHIR query to be executed
4. Define your analysis
5. Submit your code 
6. Decrypt results

### Step 2 - Offline Tool
Download and install the offline tool. Get familiar with its functionalities and load the provided keys.

### Step 2 - Key loading
The demo user has predefined keys. You need to download and use those in order to decrypt the analysis results.

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
    "output_format": "json". # raw, json and XML are currently supported
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
TODO enter here demo R code

#### Python code
This code can be downloaded from this [repository](https://github.com/PHT-Medic/cord-pht-demo/blob/master/Python/minimal_demo.py).

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