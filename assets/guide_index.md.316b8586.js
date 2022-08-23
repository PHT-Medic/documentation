import{_ as e,o as t,c as a,f as i}from"./app.1f7152f6.js";const r="/documentation/assets/pht_services.cc5153b1.png",n="/documentation/assets/execution_short.43c575c1.png",s="/documentation/assets/security_protocol.52f51702.png",y=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Mission Statement","slug":"mission-statement"},{"level":2,"title":"Architecture","slug":"architecture"},{"level":3,"title":"Central Services","slug":"central-services"},{"level":3,"title":"Local/Station Services","slug":"local-station-services"},{"level":2,"title":"Security","slug":"security"},{"level":3,"title":"Security Protocol","slug":"security-protocol"},{"level":2,"title":"Languages","slug":"languages"},{"level":3,"title":"JavaScript","slug":"javascript"},{"level":3,"title":"TypeScript","slug":"typescript"},{"level":3,"title":"Python","slug":"python"}],"relativePath":"guide/index.md"}'),o={name:"guide/index.md"},l=i('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h1><p>Documentation and User Guide for the Personal Health Train (PHT), an open source, container-based secure distributed analysis platform. For more information about the PHT team, projects and collaborations, you can also visit our <a href="https://personalhealthtrain.de/" target="_blank" rel="noreferrer">website</a>.</p><p>If you want to deploy our platform productively in a clinical environment, please e-mail us at: pht(at)<a href="http://medizin.uni-tuebingen.de" target="_blank" rel="noreferrer">medizin.uni-tuebingen.de</a></p><p>We can share operational and technical documentation to get clearance from your local IT-Security and data protection officers.</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>The Personal Health Train (PHT) is a paradigm proposed within the <a href="https://www.go-fair.org/implementation-networks/overview/personal-health-train/" target="_blank" rel="noreferrer">GO:FAIR initiative</a> as one solution for distributed analysis of medical data, enhancing their FAIRness. Rather than transferring data to a central analysis site, the analysis algorithm (wrapped in a \u2018train\u2019), travels between multiple sites (e.g., hospitals \u2013 so-called \u2018train stations\u2019) securely hosting the data.</p><p>The following overview shows all interactions between service components to execute a train iteratively over three stations with our PHT-TBI architecture. <a href="../images/process_images/pht_services.png"><img src="'+r+'" alt="Overview"></a></p><h2 id="mission-statement" tabindex="-1">Mission Statement <a class="header-anchor" href="#mission-statement" aria-hidden="true">#</a></h2><p>From Machine Learning (ML) healthcare can profit by \u2018learning\u2019 models which support clinical practice in treatment decision support systems (TDSS). To increase the robustness of an obtained model and produce meaningful results, generally, the analysis outcome depends on the number of training samples and data quality.</p><p>But meaningful data to improve predictions in medical research and healthcare is often distributed across multiple sites and is not easily accessible. This data contains highly sensitive patient information, may consist at each site different data formats and cannot be shared without explicit consent of the patient. Our goal is to make this data available for trains with stations to support privacy-preserving distributed machine learning in healthcare with our open-source implementation of the PHT.</p><p>Implementing trains as light-weight containers enable even complex data analysis workflows to travel between sites, for example, genomics pipelines or deep-learning algorithms \u2013 analytics methods that are not easily amenable to established distributed queries or simple statistics.</p><h2 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-hidden="true">#</a></h2><p><a href="../images/process_images/execution_short.png"><img src="'+n+'" alt="Architecture"></a></p><h3 id="central-services" tabindex="-1">Central Services <a class="header-anchor" href="#central-services" aria-hidden="true">#</a></h3><ul><li><p><code>RabbitMQ</code> - Message broker for consuming and publishing commands &amp; events between different services</p></li><li><p><code>Harbor</code> - Docker registry to manage (train-) images</p></li><li><p><code>Vault</code> - Secret storage to securely store sensitive information</p></li><li><p><code>User Interface (UI)</code> - Frontend application for proposal and train management, downloading of results and much more</p></li><li><p><code>API</code> - Backend application to manage resources and trigger commands &amp; events through the message broker</p></li><li><p><code>Train Manager</code> - Microservice serving different components:</p><ul><li><code>Train Building</code> - Build and distribute train images to a registry</li><li><code>Train Routing</code> - Move trains between projects &amp; registries accordingly to the route of the train</li><li><code>Result Extracting</code> - Download, extract &amp; serve encrypted results from the registry</li></ul></li></ul><h3 id="local-station-services" tabindex="-1">Local/Station Services <a class="header-anchor" href="#local-station-services" aria-hidden="true">#</a></h3><ul><li><code>Airflow</code> - Open-Source-Tool to create and schedule workflows and enables persistent access to data, execution and monitoring of trains</li><li><code>Keycloak</code> - Identity and Access Management (IAM) to manage users and roles</li></ul><ul><li><code>Desktop App</code> - GUI to manage key pairs and decrypt results locally</li></ul><h2 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-hidden="true">#</a></h2><h3 id="security-protocol" tabindex="-1">Security Protocol <a class="header-anchor" href="#security-protocol" aria-hidden="true">#</a></h3><p>The following flow chart depicts the security protocol used for protecting participating stations against malicious code, as well as encrypting any stored results using envelope encryption.<br> This ensures that only approved algorithms are executed and that only previously registered participants in an analysis can access the results. <a href="../images/process_images/security_protocol.png"><img src="'+s+'" alt="Security Protocol"></a></p><h2 id="languages" tabindex="-1">Languages <a class="header-anchor" href="#languages" aria-hidden="true">#</a></h2><h3 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h3><p>Wikipedia: <em>JavaScript (<a href="https://developer.mozilla.org/en/docs/Web/JavaScript" target="_blank" rel="noreferrer">https://developer.mozilla.org/en/docs/Web/JavaScript</a>) often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</em></p><h3 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h3><p>Wikipedia: <em>TypeScript (<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">https://www.typescriptlang.org/</a>) is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.</em></p><h3 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-hidden="true">#</a></h3><p>Wikipedia: <em>Python (<a href="https://python.org/" target="_blank" rel="noreferrer">https://python.org</a>) is an interpreted high-level general-purpose programming language. Python&#39;s design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</em></p>',28),c=[l];function d(p,h,u,g,m,f){return t(),a("div",null,c)}const b=e(o,[["render",d]]);export{y as __pageData,b as default};
