# Installation

::: info
This section will provide installation instructions for installing a PHT Station.<br>**It assumes that the station has
been registered in the UI.**
:::

Visit the [station repository](https://github.com/PHT-Medic/station) to view the code
(the installation instructions can also be found here).

### Requirements

* [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) need to
  be installed.<br>
* For the default installation to work the ports `8080` and `5432` need to be available on localhost.

### Install with docker-compose

1. Clone the repository: ```git clone https://github.com/PHT-Medic/station.git```

2. Navigate into the cloned project `cd station` and edit the `.env` file with your local configuration. The `.env.tmpl`
   file is a template file that can be used to generate a `.env` file with the correct environment keys.

|             Attribute             | Explanation                                                                                                                                                                                  |
|:---------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
|           `STATION_ID`            | Chosen identifier of the station (match central UI configuration). You can find it as namespace                                                                                              |
|    `STATION_PRIVATE_KEY_PATH`     | Path to the private key on the local filesystem that should be mounted as a volume                                                                                                           |
|      `PRIVATE_KEY_PASSWORD`       | If the private key is encrypted with a password, this password can be set using this variable                                                                                                |
|          `AIRFLOW_USER`           | Admin user to be created for the airflow instance                                                                                                                                            |
|           `AIRFLOW_PW`            | Password for the airflow admin user                                                                                                                                                          |
|           `HARBOR_URL`            | Url of the central harbor instance                                                                                                                                                           |
|           `HARBOR_USER`           | Username to authenticate against harbor                                                                                                                                                      |
|            `HARBOR_PW`            | Password to authenticate against harbor                                                                                                                                                      |
|        `STATION_DATA_DIR`         | Absolute path of the directory where the station stores the input data for trains.<br>This path is also used by the FHIR client to store the query results before passing them to the trains |
|  `FHIR_ADDRESS`<br>(optional)     | Address of the default FHIR server connected to the station <br>(this can also be configured per train)                                                                                      |
|     `FHIR_USER`<br>(optional)     | Username to authenticate against the FHIR server using Basic Auth                                                                                                                            |
|      `FHIR_PW`<br>(optional)      | Password for FHIR server Basic Auth                                                                                                                                                          |
|    `FHIR_TOKEN`<br>(optional)     | Token to authenticate against the FHIR server using Bearer Token                                                                                                                             |
|     `CLIENT_ID`<br>(optional)     | Identifier of client with permission to acces the FHIR server                                                                                                                                |
|   `CLIENT_SECRET`<br>(optional)   | Secret of above client to authenticate against the provider                                                                                                                                  |
| `OIDC_PROVIDER_URL`<br>(optional) | Token url of Open ID connect provider <br>(e.g. keycloak, that is configured for the FHIR server)                                                                                            |
| `FHIR_SERVER_TYPE`<br>(optional)  | Type of FHIR server <br>(PHT FHIR client supports IBM, Hapi and Blaze FHIR servers)                                                                                                          |

4. Create a volume for the station: ```docker volume create pg_station```
5. Build the images by running: ```docker-compose build```

### First steps with running the station

1. Run ```docker-compose up -d```
2. Check that the logs do not contain any startup errors with ```docker-compose logs -f```
3. Go to ```http://localhost:8080``` nd check whether you can see the web interface of Apache Airflow
4. Login to the airflow web interface with the previously set user credentials

### Troubleshooting/F.A.Q.

#### I don't have a private key

Generate a new key using [open-ssl](https://www.openssl.org/):

```shell
openssl genrsa -out key.pem 2048
```

Generate the associated public key using:

```shell
openssl rsa -in key.pem -outform PEM -pubout -out public.pem
```

and then register this key in the UI.

#### Windows installation

If you are on a Windows Computer you need to change the line seperator to the **Unix/macOS**-style for the airflow
directory. In Pycharm you can follow these steps:

1. Select the airflow folder
2. Click on File in the top-left corner
3. Click on File Properties -> Line Separators -> LF - Unix and maxOS (\n)

#### Using pre-built images

If there are issues while building the airflow container you can use our prebuilt images to run the airflow
instance.<br>
Edit the airflow service in the docker-compose.yml file and replace the build command without prebuilt image:

```yaml
# ------------- ommitted ------------
services:
  airflow:
    # remove the build command
    build: './airflow'
    # replace with the image command
    image: ghcr.io/pht-medic/station-airflow:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
# ------------- ommitted ------------
```

### Changing Airflow admin password/user

Changing the Airflow admin password/user in the env file after the build is not directly possible. Either use Airflow UI to change the password or delete the airflow volume and rebuild after the change.
