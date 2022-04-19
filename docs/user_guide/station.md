## Getting started with Airflow

Trains and other station tasks are executed via airflow DAGs. The DAGs can be triggered via the airflow web interface,
which is available under port ```:8080``` on the station machine. The execution of the DAGs can also be monitored in the
webinterface.

### Login

The first time you access the webinterface you will be prompted to log in. Enter the credentials set in the `.env` file
to login as admin. Or use the credentials that you have obtained from the station administrator.

[![image](../images/station_images/airflow_login.png)](../images/station_images/airflow_login.png)

### Triggering the test DAG

To test the configuration of the station as defined in the `.env` file, trigger the DAG
named `test_station_configuration`
in the user interface.  
A DAG is triggered in the UI by clicking on the **play** button, where it can be started either with or without a json
file containing additional configuration for the DAG run.

[![image](../images/station_images/airflow_ui.png)](../images/station_images/airflow_ui.png)

Trigger the DAG without any additional configuration to check if the station is properly configured. A notification
should appear in the UI that the DAG has been triggered.

To monitor the execution click on the name of the DAG. You should see the individual tasks contained in the DAG as well
as their status in the UI. If all tasks are marked as success, the station is properly configured and can connect to
harbor as well as a FHIR server.

!!! warning If you did not provide any FHIR_Server configurations in the .env-file, then this Trigger will fail, because
this test will try to connect to the FHIR_server. All the nodes will be marked as red or orange except the "
get_dag_config"

[![image](../images/station_images/test_config_dag.png)](../images/station_images/test_config_dag.png)

### Accessing logs

The logs stored during the execution of a DAG can be accessed for each individual task by clicking the
colored,squared/circled - indicator next to the name of the task. In the new pop-up window you can see in the top a list
of options. There you can pick **Log** to view the Log of this task.

[![image](../images/station_images/task_logs.png)](../images/station_images/task_logs.png)

If there are any errors stacktraces can be found in these logs, as well as any other output of the tasks (stdout,
stderr)

[![image](../images/station_images/task_log_details.png)](../images/station_images/task_log_details.png)

### Running a train

To execute a train that is available for your station, trigger the `run_train` DAG, with configuration options
specifying the train image to be pulled from harbor and executed as well as additional environment variables or volumes.
A template train configuration is displayed below.

```json
{
  "repository": "<HARBOR-REGISTRY>/<STATION_NAMESPACE>/<TRAIN-IMAGE>",
  "tag": "latest",
  "env": {
    "FHIR_ADDRESS": "<FHIR-ADDRESS>",
    "FHIR_USER": "<ID>",
    "FHIR_PW": "<PSW>"
  }
}
```

Replace the placeholders with the values of the train image to execute, and other variables with the values
corresponding to the stations configuration and paste it into the configuration form shown in the following image.

[![image](../images/station_images/trigger_run_train.png)](../images/station_images/trigger_run_train.png)

### Running a train with volume data

Volume data (any data other than the data stored in the FHIR server) is made available to the train as read only volume
mounts. This mount needs to specified in the configuration of the DAG when it is started.
The path to which the volume must be mounted is specified in the train.

```json
{
  "repository": "<HARBOR-REGISTRY>/<STATION_NAMESPACE>/<TRAIN-IMAGE>",
  "tag": "latest",
  "<Absolute path on station vm>": {
    "bind": "<Mount target in train container>",
    "mode": "ro"
  }
}
```














