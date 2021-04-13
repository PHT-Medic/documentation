#PHT Public Documentation
*** 
*Author:* Felix Bötte  
*Created:* 15/04/2021  
*Version:* 1.0.1  
***
The following will be an outline to provide detailed explanations about the steps which need
to be done for the execution of each feature. These explanations should help the user understand how to use 
a feature and allow easy setup with no to little preknowledge. 
***
##Table of Contents
1. Station Setup
2. Usage of the UI
3. User Creation
4. Train Proposals
5. Train Submissions
6. Train Execution
7. Usability Offline-Tool
***

##1. Station Setup

###Station 
A station is the essential access point to patient data of the PHT.
It is based on apache airflow and allows persistent and monitored execution of trains.
The airflow web interface allows the manual execution of trains and access to log files.

###Deployment
In order to operate your own station, please follow the instructions within the readme
of the [station-repository](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/station/airflow-rest-api/-/tree/mg)

###Installation

Here is a short summary of some relevant steps for the station-setup. 

####Specify Public- / Private Key

Each station requires a public and private key pair. In order to deploy a station generate
your own pair with the Offline-Tool as outlined in step 7 or use your existing keypair. 
The path to the Private Key file has to be specified within the *docker-compose.yml* file.

```json
version: '3.7'
volumes:
    ...
services:
    db:
        ...
    adminer:
        ...
    redis:
        ...
    airflow:
        build: .
        restart: always
        volumes:
            - ...
            - ./private_key.pem:/opt/private_key.pem
        environment:
            - ...
            - STATION_PRIVATE_KEY_PATH=/opt/private_key.pem
            - STATION_ID=X
```

####Specify Sation ID

Each station requires a pseudo identifier also seen as *STATION_ID* above. This can be arbitrary,
but has to match with the corresponding *STATION_ID* in the UI. The ID has to be defined similiar to the Private- / Public Keys
in the *docker-compose.yml* file, e.g. above. 

####Environments

A station can have global envs to specify certain trains. 
Editing entries within the *docker-compose.yml* file requires a restart with:

```
$ docker-compose down
$ docker-compose build
$ docker compose up -d
```


####Run Trains

After you successfully installed the station, go the the aiflow interface, using http://localhost:8080/.

1. Turn on the "run_train" DAG
2. Press "Trigger DAG"
3. Specify the DAG configs (example below)
    * 

```json
{
  "repository": "<HARBOR-REPOSITORY>/<STATION_ID>/<TRAIN-IMAGE>",
  "tag": "latest",
  "env": {"FHIR_ADDRESS": "<FHIR-ADRESS>","FHIR_USER": "<ID>","FHIR_PW": "<PSW>"}
}
```

4. During execution you can refresh the station status
5. Log files can be accessed during execution of each process
6. After successful execution the rebased image is pushed back and labeled "pht_next" to be processed by the Train Router


***
##2. Usage of UI


***
##3. User Creation


***
##4. Train Proposals



***
##5. Train Submissions



***
##6. Train Execution



***
##7. Usability Offline-Tool


