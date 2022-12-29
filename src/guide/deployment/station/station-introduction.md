# PHT Station Deployment
This guide is intended for local system administrators, who want to deploy the PHT Station on their own (clinical) infrastructure.
A collection of the components as well as the installer scripts can be found in the main station [repository](https://github.com/PHT-Medic/station).

## System Overview
The station consists of three primary components along with a number of open source third party services.

The following diagram shows the system overview of the PHT Station:

[![Station Architecture](/images/station_images/station_architecture.png)](/images/station_images/station_architecture.png)

### PHT Station Components

- The [web interface](https://github.com/PHT-Medic/station-ui) is the main entrypoint for users of the platform.
- The [REST API](https://github.com/PHT-Medic/station-backend) is the main interface for the web interface and other components.
- A command line interface (CLI) for administering the station

### Third Party Services

- [Traefik](https://traefik.io/) - HTTP reverse proxy and load balancer, used to route requests to the correct service
- [Airflow](https://airflow.apache.org/) - Workflow management system, used to schedule and run trains and other tasks
- [Authup](https://github.com/tada5hi/authup) - Authentication service, used for user management and authentication
- [PostgreSQL](https://www.postgresql.org/) - Database used by the REST API, Auth server and Airflow
- [Redis](https://redis.io/) - In-memory data structure store, used as a cache
- [Minio](https://min.io/) - S3-compatible object storage server, used to store dataset and train files


