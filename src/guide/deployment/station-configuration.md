# Configuration File
The station is configured by a single YAML file. All services that are run by the station are configured using this file. The file can be named `{station_config | station}.{yml | yaml}` and should be placed in the current working directory.
when starting the station. The station installer will automatically detect the file and use it for configuration and installation of the station.

## Manual configuration
The `station_ctl` provides tooling to automatically validate and generate most values required for the configuration file.

While this works for most values some things need to be entered manually by the user. The following table shows the list of values that are required and cannot be generated automatically (dot notation shows the path to the value in the configuration file):

| Config Item            | Description                                                                    | Source                                 |
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------- |
| id                     | Unique identifier given to the station after setting it up in the UI           | Central UI Admin Panel                 |
| https.certificate.cert | Path to the certificate file (PEM) for the domain the station should run under | Your own source for valid certificates |
| https.certificate.key  | Path to private key associated with the above mentioned certificate            | Your own source for valid certificates |


## Checking your configuration

Use the `station_ctl` tool to check your configuration file for errors and missing values. The tool will also povide the option to generate configuration values that support auto generation.

```bash
station_ctl config -f /path/to/config/file
```

## Configuration file reference

```yaml
# configure station variables
id: "your_station_id"
version: "latest"

# station runtime environment set to development to allow for debugging and reduced security settings
# if no value is given or any value other than 'development' is given it defaults to a production environment
environment: "production"

# configure the admin password for the station (username: admin)
admin_password: "your-admin-password"

# set the station data directory where the station will store the data used for local analysis
data_dir: "/path/to/data/dir"

# Configure authentication for central services
central:
  url: "app.personalhealthtrain.de"
  robot_id: "your_robot_id"
  robot_secret: "your_robot_secret"
  private_key: "/path/to/private/key"
  private_key_password: "optional_password_for_private_key"

# Configure which port the proxy should use to listen for http requests
http:
  port: 80
# Configure which port the proxy should use to listen for https requests
https:
  port: 443
  # Set the domain name for tls certificate either based on the existing certificate or to be used for self-signed certs
  domain: "test-station.de"
  # list of paths to certificate files (cert/key)
  certificate:
    cert: "path/to/cert/file"
    key: "path/to/key/file"

# Optionally configure the port for the traefik dashboard, when dashboard is set to true
traefik:
  dashboard: "false"
  dashboard_port: 8081

# Configures the address and credentials for the central container registry
registry:
  address: "harbor.personalhealthtrain.de"
  user: "harbor_user"
  password: "harbor_password"
  project: "harbor_password"

# configure admin user for the postgres database
db:
  host: "db_host"
  port: "db_port"
  admin_user: "db_admin_user"
  admin_password: "db_admin_password"

api:
  # Fernet key for encryption of sensitive values stored in the database
  fernet_key: "api_fernet_key"
  port: 8000


# configure airflow connection
airflow:
  host: "airflow_host"
  port: "airflow_port"
  # set admin user and password for airflow
  admin_user: "airflow_admin_user"
  admin_password: "airflow_admin_password"
  # path to a custom airflow configuration file
  config_file: "optional/path/to/airflow/config/file"
  # if you want to load your own DAGs from a different location set the path here, only the libraries installed in the
  # airflow_dags folder will be available to code inside the DAGs
  extra_dags_dir: "optional/path/to/airflow/dags"

# Configure the connection to the authentication server as well as the admin accounts
auth:
  host: "auth_host}"
  port: "auth_port"
  admin_user: "auth_admin_user"
  robot_id: "auth_robot_id"
  robot_secret: "auth_robot_secret"

# Configure connection to redis cache
redis:
  host: "redis_host"
  port: 6379
  database: 0
  admin_password: "redis_admin_password"


# configure minio connection
minio:
  host: "minio_host"
  port: 9000
  admin_user: "minio_admin_user"
  admin_password: "minio_admin_password"

``` 
