## Personal Health Train
!!! warning
    Under construction. This documentation is not complete.


Open source container based secure distributed analysis platform.

## Repositories
Multiple repositories are part of the PHT. These can be roughly separated into 

### Central Components
- **Web UI** - [https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/web-ui/central]()
- **Train Builder** - [https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/train-builder]()
- **Train Router** - [https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/train-router-py]()


### Local Components
- **Station** - [https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/station/station]()
- **Offline Tool** - [https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/pht-offline-tool]()


## Third Party Services
The PHT relies heavily on other great open source projects. Not only as libraries but also as standalone components of
our architecture.

### Harbor
The container registry provided by the [Harbor project](https://goharbor.io/) is the central data/algorithm exchange 
platform of the PHT. Trains are defined as images which are distributed between the participants private harbor projects.

### Vault
For securely storing sensitive user or train data as key-value pairs. We utilize [Vault](https://www.vaultproject.io/)
by Hashicorp as secret storage for our central services.

### Apache Airflow
[Apache Airflow](https://airflow.apache.org/) is open source, community developed platform to programmatically author,
schedule and monitor workflows and the primary component of the [PHT Station](station.md). 




