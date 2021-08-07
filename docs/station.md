# PHT Station

This section will provide installation instructions for installing a PHT Station. It assumes that the station has been
registered in the UI.

## Installation Instructions
Visit
the [station repository](https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/station/station)
to view the code (the installation instructions can also be found here).

### Requirements

[Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) need to be
installed. For the default installation to work the ports `8080` and `5432` need to be available on localhost. 


### Installation

1. Clone the repository   
   `git clone https://gitlab.com/PersonalHealthTrain/implementations/germanmii/difuture/station/station.git`

2. Navigate into the cloned project `cd station` and edit the `.env` file with your local configuration.

