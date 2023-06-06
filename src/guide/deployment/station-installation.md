# Installation

::: info
This section will provide installation instructions for installing a PHT Station.<br>**It assumes that the station has
been registered in the UI and locally configured using the `station_config.yml` file.**\
For instructions on how to register the station see the instructions [here](../deployment/station-registration) and for configuring
your local station you can find instructions [here](../deployment/station-configuration).
:::

## Requirements

* [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) need to
  be installed.<br>
* A valid configuration file for the station needs to be present. See [here](../deployment/station-configuration) for
  instructions on how to create one.

* For the default installation to work the ports `8080` and `5432` need to be available on localhost.


## Setup

::: danger Warning
If the station is set up on windows, the changes described [here](./station-troubleshooting.md#station-setup-on-windows) must be made,
before executing the following steps.


:::

1. Clone the repository: ```git clone https://github.com/PHT-Medic/station.git```

2. Navigate into the cloned project `cd station` and edit the `.env` file with your local configuration and 
**the credentials** you received after the 
[Public key registration](./station-registration#public-key-registration).\
**Note:** The `.env.tmpl` file is a template file that can be used to generate a `.env` file with the correct environment
keys.

| Attribute                         | Explanation                                                                                                                                                                                  |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `STATION_ID`                      | Chosen identifier of the station (match central UI configuration). You can find it as namespace                                                                                              |
| `STATION_PRIVATE_KEY_PATH`        | Path to the private key on the local filesystem that should be mounted as a volume                                                                                                           |
| `PRIVATE_KEY_PASSWORD`            | If the private key is encrypted with a password, this password can be set using this variable                                                                                                |
| `AIRFLOW_USER`                    | Admin user to be created for the airflow instance                                                                                                                                            |
| `AIRFLOW_PW`                      | Password for the airflow admin user                                                                                                                                                          |
| `HARBOR_URL`                      | Url of the central harbor instance                                                                                                                                                           |
| `HARBOR_USER`                     | Username to authenticate against harbor                                                                                                                                                      |
| `HARBOR_PW`                       | Password to authenticate against harbor                                                                                                                                                      |
| `STATION_DATA_DIR`                | Absolute path of the directory where the station stores the input data for trains.<br>This path is also used by the FHIR client to store the query results before passing them to the trains |
| `FHIR_ADDRESS`<br>(optional)      | Address of the default FHIR server connected to the station <br>(this can also be configured per train)                                                                                      |
| `FHIR_USER`<br>(optional)         | Username to authenticate against the FHIR server using Basic Auth                                                                                                                            |
| `FHIR_PW`<br>(optional)           | Password for FHIR server Basic Auth                                                                                                                                                          |
| `FHIR_TOKEN`<br>(optional)        | Token to authenticate against the FHIR server using Bearer Token                                                                                                                             |
| `CLIENT_ID`<br>(optional)         | Identifier of client with permission to acces the FHIR server                                                                                                                                |
| `CLIENT_SECRET`<br>(optional)     | Secret of above client to authenticate against the provider                                                                                                                                  |
| `OIDC_PROVIDER_URL`<br>(optional) | Token url of Open ID connect provider <br>(e.g. keycloak, that is configured for the FHIR server)                                                                                            |
| `FHIR_SERVER_TYPE`<br>(optional)  | Type of FHIR server <br>(PHT FHIR client supports IBM, Hapi and Blaze FHIR servers)                                                                                                          |

3. Create a volume for the station: ```docker volume create pg_station```
4. Build the images by running: ```docker-compose build``` 

## Execution
1. Run ```docker-compose up -d```
2. Check that the logs do not contain any startup errors with ```docker-compose logs -f```
3. Go to ```http://localhost:8080``` nd check whether you can see the web interface of Apache Airflow
4. Login to the airflow web interface with the previously set user credentials

