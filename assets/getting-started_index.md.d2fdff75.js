import{V as a}from"./chunks/VPImage.29a8fb15.js";import{o as i,c as s,D as o,U as n,x as e,a as r}from"./chunks/framework.7eb5ee76.js";const l="/images/process_images/pht_services.png",c=n('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>The Personal Health Train (PHT) is, an open source, container-based secure distributed analysis platform, proposed within the <a href="https://www.go-fair.org/implementation-networks/overview/personal-health-train/" target="_blank" rel="noreferrer">GO:FAIR initiative</a> as one solution for distributed analysis of medical data, enhancing their FAIRness. Rather than transferring data to a central analysis site, the analysis algorithm (wrapped in a ‘train’), travels between multiple sites (e.g., hospitals – so-called ‘train stations’) securely hosting the data.</p><p>The following overview shows all interactions between service components to execute a train iteratively over three stations with our PHT-meDIC architecture. <a href="/images/process_images/pht_services.png"><img src="'+l+'" alt="Overview"></a></p><h2 id="mission-statement" tabindex="-1">Mission Statement <a class="header-anchor" href="#mission-statement" aria-label="Permalink to &quot;Mission Statement&quot;">​</a></h2><p>From Machine Learning (ML) healthcare can profit by ‘learning’ models which support clinical practice in treatment decision support systems (TDSS). To increase the robustness of an obtained model and produce meaningful results, generally, the analysis outcome depends on the number of training samples and data quality.</p><p>But meaningful data to improve predictions in medical research and healthcare is often distributed across multiple sites and is not easily accessible. This data contains highly sensitive patient information, may consist at each site different data formats and cannot be shared without explicit consent of the patient. Our goal is to make this data available for trains with stations to support privacy-preserving distributed machine learning in healthcare with our open-source implementation of the PHT.</p><p>Implementing trains as light-weight containers enable even complex data analysis workflows to travel between sites, for example, genomics pipelines or deep-learning algorithms – analytics methods that are not easily amenable to established distributed queries or simple statistics.</p><h2 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h2><h3 id="security-protocol" tabindex="-1">Security Protocol <a class="header-anchor" href="#security-protocol" aria-label="Permalink to &quot;Security Protocol&quot;">​</a></h3><p>The following flow chart depicts the security protocol used for protecting participating stations against malicious code, as well as encrypting any stored results using envelope encryption.<br> This ensures that only approved algorithms are executed and that only previously registered participants in an analysis can access the results.</p>',10),h=e("h2",{id:"terms-of-use",tabindex:"-1"},[r("Terms of Use "),e("a",{class:"header-anchor",href:"#terms-of-use","aria-label":'Permalink to "Terms of Use"'},"​")],-1),d=e("p",null,"The following PHT concept is publicly accessible under the open-source MIT license model:",-1),p=e("p",null,"Copyright © 2018-2023 PHT-meDIC Team",-1),u=e("p",null,'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',-1),m=e("p",null,"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",-1),g=e("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',-1),O=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/index.md"}'),T={name:"getting-started/index.md"},R=Object.assign(T,{setup(f){const t={light:"/images/process_images/security_light.png",dark:"/images/process_images/security_dark.png"};return(_,I)=>(i(),s("div",null,[c,o(a,{image:t}),h,d,p,u,m,g]))}});export{O as __pageData,R as default};
