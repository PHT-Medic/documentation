# Personal Health Train
!!! warning
    Under construction. This documentation is not complete.


Documentation and [User Guide](user_interface.md) for the Personal Health Train (PHT) an open source, container based secure distributed analysis platform.
For more information about the PHT you can also visit our [website](https://personalhealthtrain.de/).

## Repositories
Multiple repositories are part of the PHT. These can be roughly separated into central components managed by the PHT Team
and hosted by the UKT and local components which are executed either by a user or by participating stations.  
All public repositories related to the PHT can be found on our [gitlab](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture),
with the major repositories being briefly introduced and categorized in the following sections.


### Central Components
| Service        | Repository link |
|:-------------:|:-------------:|
| **Web UI**      | [PersonalHealthTrain/implementations/germanmii/difuture/web-ui/central](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/web-ui/central) |
| **Train Builder**      | [PersonalHealthTrain/implementations/germanmii/difuture/train-builder](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/train-builder)      |
| **Train Router** | [PersonalHealthTrain/implementations/germanmii/difuture/train-router-py](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/train-router-py)      |
| **Train Container Library**|  [PersonalHealthTrain/implementations/germanmii/difuture/train-container-library](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/train-container-library)|


### Local Components
| Service        | Repository link |
|:-------------:|:-------------:|
|**Station** | [PersonalHealthTrain/implementations/germanmii/difuture/station/station](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/station/station)|
|**Offline Tool** | [PersonalHealthTrain/implementations/germanmii/difuture/pht-offline-tool](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/pht-offline-tool)|


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

### Local
#### Apache Airflow
[Apache Airflow](https://airflow.apache.org/) is open source, community developed platform to programmatically author,
schedule and monitor workflows and the primary component of the [PHT Station](station.md).

#### FHIR
To overcome local setup differences between stations, the PHT provides controlled and reliable access to different FHIR Servers.
We support the  [IBM FHIR Server](https://hub.docker.com/r/ibmcom/ibm-fhir-server), [Blaze](https://github.com/samply/blaze)
and [HAPI](https://hapifhir.io) server. University hospital Tübingen is using the IBM FHIR server.

#### Keycloak
A user within the central user interface has always to be associated to a station. Each station can independently use different IAMs.
We in Tübingen use [Keycloak](https://hub.docker.com/r/jboss/keycloak/) for our user management.


