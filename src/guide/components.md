# Components
Multiple git repositories contain the components of the PHT. These can be roughly separated into the following categories:

* global
* central
* local/station

All *public* repositories can be found on [GitHub](https://github.com/PHT-Medic).

### Global
Global components/services are neither used exclusive on central nor local/station side.

|           Service            |                                     Repository                                      | Programing Language | Lead                                |
|:----------------------------:|:-----------------------------------------------------------------------------------:|:-------------------:|:------------------------------------|
| **Train Container Library**  | [Train-Container-Library](https://github.com/PHT-Medic/train-container-library.git) |       Python        | [migraf](https://github.com/migraf) |

### Central
Central components/services (Central UI, Train building, Train Routing, Result Extraction, API, etc.) are individual packages within one monorepo.

|            Service            |                   Repository                    |  Programing Language  | Lead                                  |
|:-----------------------------:|:-----------------------------------------------:|:---------------------:|:--------------------------------------|
|          **Central**          | [Central](https://github.com/PHT-Medic/central) | JavaScript/TypeScript | [tada5hi](https://github.com/tada5hi) |

### Local/Station

|           Service           |                                     Repository                                     | Programing Language   | Lead                                  |
|:---------------------------:|:----------------------------------------------------------------------------------:|:----------------------|:--------------------------------------|
|         **Station**         |                  [Station](https://github.com/PHT-Medic/station)                   | Python                | [migraf](https://github.com/migraf)   |
|       **Desktop App**       |              [Desktop-App](https://github.com/PHT-Medic/desktop-app)               | JavaScript/TypeScript | [tada5hi](https://github.com/tada5hi) |

## Third Party Services
The PHT relies heavily on other great open-source projects. Not only as libraries but also as standalone components of
our architecture.

### Central
#### Harbor
The container registry provided by the [Harbor project](https://goharbor.io/) is the central data/algorithm exchange 
platform of the PHT. Trains are defined as images which are distributed between the participants private harbor projects.

#### Vault
For securely storing sensitive user or train data as key-value pairs we utilize [Vault](https://www.vaultproject.io/)
by Hashicorp as secret storage for our central services.

### Local/Station
#### Apache Airflow
[Apache Airflow](https://airflow.apache.org/) is an open source, community developed platform to programmatically author,
schedule and monitor workflows and the primary component of the station.

#### FHIR
To overcome local setup differences between stations, the PHT provides controlled and reliable access to different FHIR Servers.
We support the  [IBM FHIR Server](https://hub.docker.com/r/ibmcom/ibm-fhir-server), [Blaze](https://github.com/samply/blaze)
and [HAPI](https://hapifhir.io) server. University hospital Tübingen is using the IBM FHIR server.

#### Keycloak
A user within the central user interface has always to be associated to a station. Each station can independently use different IAMs.
We in Tübingen use [Keycloak](https://hub.docker.com/r/jboss/keycloak/) for our user management.


## Credits
Icons used from [flaticon](https://www.flaticon.com/) and [freepik](https://www.freepik.com)


