# Introduction
The Personal Health Train (PHT) is, an open source, container-based secure distributed analysis platform, proposed within the [GO:FAIR initiative](https://www.go-fair.org/implementation-networks/overview/personal-health-train/) as one solution for distributed
analysis of medical data, enhancing their FAIRness. Rather than transferring data to a central analysis site, the
analysis algorithm (wrapped in a ‘train’), travels between multiple sites (e.g., hospitals – so-called ‘train stations’)
securely hosting the data.

The following overview shows all interactions between service components to execute a train iteratively over three stations
with our PHT-TBI architecture.
[![Overview](/images/process_images/pht_services.png)](/images/process_images/pht_services.png)

## Mission Statement
From Machine Learning (ML) healthcare can profit by ‘learning’ models which support clinical practice in treatment decision
support systems (TDSS). To increase the robustness of an obtained model and produce meaningful results, generally, the
analysis outcome depends on the number of training samples and data quality.

But meaningful data to improve predictions in medical research and healthcare is often distributed across multiple sites
and is not easily accessible. This data contains highly sensitive patient information, may consist at each site different
data formats and cannot be shared without explicit consent of the patient. Our goal is to make this data available for trains
with stations to support privacy-preserving distributed machine learning in healthcare with our open-source implementation of the PHT.

Implementing trains as light-weight containers enable even complex data analysis workflows to travel between sites, for
example, genomics pipelines or deep-learning algorithms – analytics methods that are not easily amenable to established
distributed queries or simple statistics.


## Security

### Security Protocol
The following flow chart depicts the security protocol used for protecting participating stations against malicious code,
as well as encrypting any stored results using envelope encryption.   
This ensures that only approved algorithms 
are executed and that only previously registered participants in an analysis can access the results. 
[![Security Protocol](/images/process_images/security_protocol.png)](/images/process_images/security_protocol.png)
