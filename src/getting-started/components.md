# Components
Several Git repositories contain the components of the PHT. 
Third party components can be found on the respective manufacturer's site.
These components can be roughly separated into the following categories:

* central
* local

All **public** repositories can be found on [GitHub](https://github.com/PHT-Medic).

## Central
Central components/services are individual packages within one monorepo. They include the implementation of the Central 
UI, Train Building, Train Routing, Result Extraction, API, etc., which supply the core functions of the PHT.

| Service                  |                        Repository                         | Programing Language | Lead                                  |
|:-------------------------|:---------------------------------------------------------:|:-------------------:|:--------------------------------------|
| **User Interface**       | [PHT-Medic/central](https://github.com/PHT-Medic/central) |     TypeScript      | [tada5hi](https://github.com/tada5hi) |
| **API**                  | [PHT-Medic/central](https://github.com/PHT-Medic/central) |     TypeScript      | [tada5hi](https://github.com/tada5hi) |
| **Realtime**             | [PHT-Medic/central](https://github.com/PHT-Medic/central) |     TypeScript      | [tada5hi](https://github.com/tada5hi) |
| **Train-Manager**        | [PHT-Medic/central](https://github.com/PHT-Medic/central) |     TypeScript      | [tada5hi](https://github.com/tada5hi) |

* `User Interface` - Frontend application for proposal and train management, downloading of results and much more
* `API` - Backend application to manage resources and trigger commands & events through the message broker
* `Realtime` - Distribute resource events to authorized clients
* `Train Manager` - Microservice serving different components:
    * `Train Building` - Build and distribute train images to a registry
    * `Train Routing` - Move trains between projects & registries accordingly to the route of the train
    * `Result Extracting` - Download, extract & serve encrypted results from the registry


| Third-Party Service | Repository                                                              | Programing Language |
|:--------------------|:------------------------------------------------------------------------|:-------------------:|
| **Harbor**          | [goharbor/harbor](https://github.com/goharbor/harbor)                   |    Go/TypeScript    |
| **RabbitMQ**        | [rabbitmq/rabbitmq-server](https://github.com/rabbitmq/rabbitmq-server) |      Starlark       |
| **Vault**           | [hashicorp/vault](https://github.com/hashicorp/vault)                   |    Go/JavaScript    |

* `Harbor` - Harbor is a docker registry to distribute images. In the context of the PHT it is used for train distribution across multiple locations.
* `RabbitMQ` - RabbitMQ is a message broker. It is used for the communication between microservices.
* `Vault` - Vault is a secret storage service for managing and storing sensitive information.

### Local
Local/Station components/services are packages utilized in local setups by analysts and administrators. The Station 
repository is used to set up local stations by administrators. The Desktop App implements a released version of
the local PHT tool, necessary for the encryption of stations and signing/decryption of trains.

| Service                     |                                          Repository                                           | Programing Language | Lead                                  |
|:----------------------------|:---------------------------------------------------------------------------------------------:|:-------------------:|:--------------------------------------|
| **Station**                 |                   [PHT-Medic/station](https://github.com/PHT-Medic/station)                   |       Python        | [migraf](https://github.com/migraf)   |
| **Desktop App**             |              [PHT-Medic/desktop-app](https://github.com/PHT-Medic/desktop-app)                |     TypeScript      | [tada5hi](https://github.com/tada5hi) |
| **Train Container Library** | [PHT-Medic/train-container-library](https://github.com/PHT-Medic/train-container-library.git) |       Python        | [migraf](https://github.com/migraf)   |

* `Station` - Local airflow instance for processing train images
* `Desktop App` - GUI to manage key pairs and decrypt results locally
* `Train Container Library` - Python library for validating and interacting with pht-train images/containers

| Third-Party Service | Repository                                          | Programing Language |
|:--------------------|:----------------------------------------------------|:-------------------:|
| **Airflow**         | [apache/airflow](https://github.com/apache/airflow) |  Python/TypeScript  |
| **Authup**          | [tada5hi/authup](https://github.com/tada5hi/authup) |     TypeScript      |

* `Airflow` - An open source, community developed platform to programmatically author,
  schedule and monitor workflows and the primary component of the station.
* `Authup` - Identity and Access Management (IAM) to manage users and roles.

