# Installation

## Prerequisites

- Debian based VM
- Hardware requirements
    - Min: 4 cores, 8 GB RAM, 30 GB disk
    - Recommended: 8+ cores, 16 GB RAM, 200 GB disk, GPU
- Docker + docker compose installed
- Certificates and key for the desired domain name of the station
- Station has been created in the central UI


## Installation

1. Clone the repository and navigate into the directory
    ```shell
    git clone https:/github.com/PHT-Medic/station
    ```
   ```
   cd station
   ```
   
2. Copy the template for the `station_config.yml` file and edit the values with the credentials
    obtained when setting up the station and the API address of the central user interface.
    ```shell
    cp station_config.yml.tmpl station_config.yml
    ```
   ```
   nano station_config.yml
   ```
   
3. After editing the file, run the installer script to start the command line installer that will guide
    you through the installation process. You might need to add `sudo` in front of the command and add execution 
    permissions to the script (`chmod +x install.sh`).
    ```shell
    ./install.sh
    ```


## Station config reference
The following shows an example configuration file for a station
::: warning Station variables
Replace the following placeholders with the actual values obtained in the previous steps.
These values will also be validated by the installer and you can edit them dynamically during the installation process.

- `[STATION_ID]`: ID given to the station by the central user interface
- `[STATION_ADMIN_PASSWORD]`: Master password for the station admin user
- `[STATION_DATA_DIR]`: Path to the directory where the station data will be stored
- `[STATION_CERT_PATH]`: Certificate file (.crt) for the domain name of the station
- `[STATION_KEY_PATH]`: Key file (.key) for the domain name of the station
- `[CENTRAL_API_URL]`: Web address of the central API (e.g. https://app.example.com/api/)
- `[CENTRAL_ROBOT_ID]`: Robot id of station robot created when setting up the station
- `[CENTRAL_ROBOT_SECRET]`: Robot secret of station robot created when setting up the station
:::


```yaml
# Set the station id obtained in the central user interface
station_id: "[STATION_ID]"
version: "latest"

# station runtime environment set to development to allow for debugging and reduced security settings
# if no value is given or any value other than 'development' is given it defaults to a production environment
environment: "production"

# configure the admin password for the station (username: admin)
admin_password: "[STATION_ADMIN_PASSWORD]"

station_data_dir: "[STATION_DATA_DIR]"

# Configure authentication for central services
central:
  api_url: "[CENTRAL_API_URL]"
  # Robot credentials for accessing central services, these can be obtained in the central UI
  robot_id: "central-robot-id"
  robot_secret: "central-robot-secret"
  # Optionally enter the absolute path to an existing key if not provided a new key will be generated
  private_key: ""
  # optional password for private key
  private_key_passphrase: ""

http:
  port: 80

https:
  port: 443
  domain: ""
  # list of path to certificate files (cert/key)
  certs:
    - cert: "[STATION_CERT_PATH]"
      key: "[STATION_KEY_PATH]"


traefik:
  dashboard:
    port: 8081


# Configures the address and credentials for the central container registry, will be automatically configured with
# values obtained from the central API
registry:
  address:
  password:
  user:
  project:
# configure admin user for the postgres database
db:
  admin_user: "admin"
  admin_password: "admin"

api:
  # Fernet key for encryption of sensitive values stored in the database
  fernet_key: ""

# configure airflow connection
airflow:
  admin_user: "admin"
  admin_password: "admin"
  config_file: null
  extra_dags_dir: "./dags"


# Configure the connection to the authentication server
auth:
  host: ""
  port: ""
  robot_id: ""
  robot_secret: ""

# configure minio connection
minio:
  admin_user: "admin"
  admin_password: ""

```

