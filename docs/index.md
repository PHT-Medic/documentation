## Overview
Documentation and [User Guide](user_guide/user_interface.md) for the Personal Health Train (PHT) an open source, container based secure distributed analysis platform.
For more information about the PHT team, projects and collaborations you can also visit our [website](https://personalhealthtrain.de/).

## Introduction
The Personal Health Train (PHT) is a paradigm proposed within the [GO:FAIR initiative](https://www.go-fair.org/implementation-networks/overview/personal-health-train/) as one solution for distributed
analysis of medical data, enhancing their FAIRness. Rather than transferring data to a central analysis site, the
analysis algorithm (wrapped in a ‘train’), travels between multiple sites (e.g., hospitals – so-called ‘train stations’)
hosting the data in a secure fashion.

The following overview shows all interactions between service components to execute a train iteratively over three stations
with our PHT-TBI architecture.
[![Overview](../images/process_images/pht_overview.png)](../images/process_images/pht_overview.png)

## Mission Statement
From machine learning (ML) healthcare can profit by ‘learning’ models which support clinical practice in treatment decision
support systems (TDSS). To increase the robustness of an obtained model and produce meaningful results, generally the
analysis outcome depends on the number of training samples and data quality.

But meaningful data to improve predictions in medical research and healthcare is often distributed across multiple sites
and is not easily accessible. This data contains highly sensitive patient information, may consist at each site different
data formats and cannot be shared without explicit consent of the patient. Our goal is to make this data available for trains
with stations to support privacy preserving distributed machine learning in healthcare with our open-source implementation of the PHT.

Implementing trains as light-weight containers enables even complex data analysis workflows to travel between sites, for
example, genomics pipelines or deep-learning algorithms – analytics methods that are not easily amenable to established
distributed queries or simple statistics.

## Architecture
[![Architecture](../images/process_images/pht_services.png)](../images/process_images/pht_services.png)

### Central Services
* User Interface - Self developed service in [Vue.js](https://vuejs.org/guide/introduction.html) for proposal and train submission, downloading of results
* Message Broker - RabbitMQ, for consuming and publishing events between services 
* Train Builder - Self developed service in Python to build valid trains
* Container Registry - Harbor, an open-source container registry providing trains to stations
* Train Router - Self developed Python service to move trains between projects accordingly to the route
* Result Service - Vue.js self developed service, to extract encrypted results
* Secret Storage - Based on Hashicorps Vault a service to securely store public keys of users/stations and routes of trains
* Train Images - Trains are docker images, including the algorithm, train logic and software dependencies of user submitted code

### Local Services
* Station UI - Self developed service, only from local network accessible to trigger train execution and resource monitoring.
* Airflow - [Apache Airflow](https://airflow.apache.org/) is an open-source tool to create and schedule workflows. Are used for persistent access to data and execution and monitoring of trains.
* Station IAM - Identity and Access management system (based on Keycloak) to manage users of one hospital
* Offline Tool - Self developed GUI to create key pairs and decrypt results locally.
## Security


### Security Protocol
The following flow chart depicts the security protocol used for protecting participating stations against malicious code,
as well as encrypting any stored results using envelope encryption.   
This ensures that only approved algorithms 
are executed and that only previously registered participants in an analysis can access the results. 
[![Security Protocol](../images/process_images/security_protocol.png)](../images/process_images/security_protocol.png)

## Technologies
### Apache Airflow
Wikipedia: *Apache Airflow ([https://airflow.apache.org](https://airflow.apache.org/)) is an open-source workflow management
platform. It started at Airbnb in October 2014 as a solution to manage the company's increasingly complex workflows.
Creating Airflow allowed Airbnb to programmatically author and
schedule their workflows and monitor them via the built-in Airflow user interface.From the beginning, the project was made
open source, becoming an Apache Incubator project in March 2016 and a Top-Level Apache Software Foundation project in January 2019.*

Airflow is written in Python, and workflows are created via Python scripts. Airflow is designed under the principle of
"configuration as code". While other "configuration as code" workflow platforms exist using markup languages like XML,
using Python allows developers to import libraries and classes to help them create their workflows.

### Vue JS
Wikipedia: *Vue.js ([https://vuejs.org](https://Vuejs.org/) - commonly referred to as Vue) is an open-source model–view–viewmodel
front end JavaScript framework for building user interfaces and single-page applications.*

### Python
Wikipedia: *Python ([https://python.org](https://python.org/)) is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes
code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented
approach aim to help programmers write clear, logical code for small and large-scale projects.*
