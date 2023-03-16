# F.A.Q.

## How to get a private key?

Generate a new key using [open-ssl](https://www.openssl.org/):

```shell
openssl genrsa -out key.pem 2048
```

Generate the associated public key using:

```shell
openssl rsa -in key.pem -outform PEM -pubout -out public.pem
```

and then register this key in the UI.

## How do I run the station on windows?

If you are on a Windows Computer you need to change the line seperator to the **Unix/macOS**-style for the airflow
directory. In Pycharm you can follow these steps:

1. Select the airflow folder
2. Click on File in the top-left corner
3. Click on File Properties -> Line Separators -> LF - Unix and maxOS (\n)

### How to use custom dags?

If you want to use custom dags in airflow, you will have to change the  docker-compose.yml; instated of pulling the latest pre-build airflow image; you have to build airflow locally. 
This is done by commenting out the  "build: './airflow' "  line and uncommenting the "  image: ghcr.io/pht-medic/station-airflow:latest"  line

```yaml
# ------------- ommitted ------------
services:
  airflow:
    # replace with the build command
    build: './airflow'
    # remove the image command
    image: ghcr.io/pht-medic/airflow:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
# ------------- ommitted ------------
```

## How to change the airflow admin user/password?

Changing the Airflow admin password/user in the env file after the build is not directly possible. Either use Airflow UI to change the password or delete the airflow volume and rebuild after the change.

## How to run airflow behind a reverse proxy?
Edit the airflow configuration in `airflow/airflow.cfg` according to the instructions found [here](https://airflow.apache.org/docs/apache-airflow/stable/howto/run-behind-proxy.html)
Set forwarding in your reverse proxy (nginx for example) to access the airflow instance running on ```http://127.0.0.1:8080```
After updating the configuration stop the instance if it is running (```docker-compose down```) and restart it after rebuilding the image
(```docker-compose up --build -d```).
