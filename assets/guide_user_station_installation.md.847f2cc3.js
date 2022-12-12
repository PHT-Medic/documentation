import{_ as e,o as t,c as a,f as n}from"./app.a2f06a94.js";const f=JSON.parse(`{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]},{"level":2,"title":"Install with docker-compose","slug":"install-with-docker-compose","link":"#install-with-docker-compose","children":[]},{"level":2,"title":"First steps with running the station","slug":"first-steps-with-running-the-station","link":"#first-steps-with-running-the-station","children":[]},{"level":2,"title":"Troubleshooting/F.A.Q.","slug":"troubleshooting-f-a-q","link":"#troubleshooting-f-a-q","children":[{"level":3,"title":"I don't have a private key","slug":"i-don-t-have-a-private-key","link":"#i-don-t-have-a-private-key","children":[]},{"level":3,"title":"Windows installation","slug":"windows-installation","link":"#windows-installation","children":[]},{"level":3,"title":"Using pre-built images","slug":"using-pre-built-images","link":"#using-pre-built-images","children":[]},{"level":3,"title":"Changing Airflow admin password/user","slug":"changing-airflow-admin-password-user","link":"#changing-airflow-admin-password-user","children":[]}]},{"level":2,"title":"Running airflow behind a reverse proxy","slug":"running-airflow-behind-a-reverse-proxy","link":"#running-airflow-behind-a-reverse-proxy","children":[]}],"relativePath":"guide/user/station/installation.md"}`),o={name:"guide/user/station/installation.md"},s=n(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This section will provide installation instructions for installing a PHT Station.<br><strong>It assumes that the station has been registered in the UI.</strong></p></div><p>Visit the <a href="https://github.com/PHT-Medic/station" target="_blank" rel="noreferrer">station repository</a> to view the code (the installation instructions can also be found here).</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Docker</a> and <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noreferrer">docker-compose</a> need to be installed.<br></li><li>For the default installation to work the ports <code>8080</code> and <code>5432</code> need to be available on localhost.</li></ul><h2 id="install-with-docker-compose" tabindex="-1">Install with docker-compose <a class="header-anchor" href="#install-with-docker-compose" aria-hidden="true">#</a></h2><ol><li><p>Clone the repository: <code>git clone https://github.com/PHT-Medic/station.git</code></p></li><li><p>Navigate into the cloned project <code>cd station</code> and edit the <code>.env</code> file with your local configuration. The <code>.env.tmpl</code> file is a template file that can be used to generate a <code>.env</code> file with the correct environment keys.</p></li></ol><table><thead><tr><th style="text-align:center;">Attribute</th><th>Explanation</th></tr></thead><tbody><tr><td style="text-align:center;"><code>STATION_ID</code></td><td>Chosen identifier of the station (match central UI configuration). You can find it as namespace</td></tr><tr><td style="text-align:center;"><code>STATION_PRIVATE_KEY_PATH</code></td><td>Path to the private key on the local filesystem that should be mounted as a volume</td></tr><tr><td style="text-align:center;"><code>PRIVATE_KEY_PASSWORD</code></td><td>If the private key is encrypted with a password, this password can be set using this variable</td></tr><tr><td style="text-align:center;"><code>AIRFLOW_USER</code></td><td>Admin user to be created for the airflow instance</td></tr><tr><td style="text-align:center;"><code>AIRFLOW_PW</code></td><td>Password for the airflow admin user</td></tr><tr><td style="text-align:center;"><code>HARBOR_URL</code></td><td>Url of the central harbor instance</td></tr><tr><td style="text-align:center;"><code>HARBOR_USER</code></td><td>Username to authenticate against harbor</td></tr><tr><td style="text-align:center;"><code>HARBOR_PW</code></td><td>Password to authenticate against harbor</td></tr><tr><td style="text-align:center;"><code>STATION_DATA_DIR</code></td><td>Absolute path of the directory where the station stores the input data for trains.<br>This path is also used by the FHIR client to store the query results before passing them to the trains</td></tr><tr><td style="text-align:center;"><code>FHIR_ADDRESS</code><br>(optional)</td><td>Address of the default FHIR server connected to the station <br>(this can also be configured per train)</td></tr><tr><td style="text-align:center;"><code>FHIR_USER</code><br>(optional)</td><td>Username to authenticate against the FHIR server using Basic Auth</td></tr><tr><td style="text-align:center;"><code>FHIR_PW</code><br>(optional)</td><td>Password for FHIR server Basic Auth</td></tr><tr><td style="text-align:center;"><code>FHIR_TOKEN</code><br>(optional)</td><td>Token to authenticate against the FHIR server using Bearer Token</td></tr><tr><td style="text-align:center;"><code>CLIENT_ID</code><br>(optional)</td><td>Identifier of client with permission to acces the FHIR server</td></tr><tr><td style="text-align:center;"><code>CLIENT_SECRET</code><br>(optional)</td><td>Secret of above client to authenticate against the provider</td></tr><tr><td style="text-align:center;"><code>OIDC_PROVIDER_URL</code><br>(optional)</td><td>Token url of Open ID connect provider <br>(e.g. keycloak, that is configured for the FHIR server)</td></tr><tr><td style="text-align:center;"><code>FHIR_SERVER_TYPE</code><br>(optional)</td><td>Type of FHIR server <br>(PHT FHIR client supports IBM, Hapi and Blaze FHIR servers)</td></tr></tbody></table><ol start="4"><li>Create a volume for the station: <code>docker volume create pg_station</code></li><li>Build the images by running: <code>docker-compose build</code></li></ol><h2 id="first-steps-with-running-the-station" tabindex="-1">First steps with running the station <a class="header-anchor" href="#first-steps-with-running-the-station" aria-hidden="true">#</a></h2><ol><li>Run <code>docker-compose up -d</code></li><li>Check that the logs do not contain any startup errors with <code>docker-compose logs -f</code></li><li>Go to <code>http://localhost:8080</code> nd check whether you can see the web interface of Apache Airflow</li><li>Login to the airflow web interface with the previously set user credentials</li></ol><h2 id="troubleshooting-f-a-q" tabindex="-1">Troubleshooting/F.A.Q. <a class="header-anchor" href="#troubleshooting-f-a-q" aria-hidden="true">#</a></h2><h3 id="i-don-t-have-a-private-key" tabindex="-1">I don&#39;t have a private key <a class="header-anchor" href="#i-don-t-have-a-private-key" aria-hidden="true">#</a></h3><p>Generate a new key using <a href="https://www.openssl.org/" target="_blank" rel="noreferrer">open-ssl</a>:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">openssl genrsa -out key.pem 2048</span></span>
<span class="line"></span></code></pre></div><p>Generate the associated public key using:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">openssl rsa -in key.pem -outform PEM -pubout -out public.pem</span></span>
<span class="line"></span></code></pre></div><p>and then register this key in the UI.</p><h3 id="windows-installation" tabindex="-1">Windows installation <a class="header-anchor" href="#windows-installation" aria-hidden="true">#</a></h3><p>If you are on a Windows Computer you need to change the line seperator to the <strong>Unix/macOS</strong>-style for the airflow directory. In Pycharm you can follow these steps:</p><ol><li>Select the airflow folder</li><li>Click on File in the top-left corner</li><li>Click on File Properties -&gt; Line Separators -&gt; LF - Unix and maxOS (\\n)</li></ol><h3 id="using-pre-built-images" tabindex="-1">Using pre-built images <a class="header-anchor" href="#using-pre-built-images" aria-hidden="true">#</a></h3><p>If you want to use custom dags in airflow, you will have to change the docker-compose.yml; instated of pulling the latest pre-build airflow image; you have to build airflow locally. This is done by commenting out the &quot;build: &#39;./airflow&#39; &quot; line and uncommenting the &quot; image: <a href="http://ghcr.io/pht-medic/station-airflow:latest" target="_blank" rel="noreferrer">ghcr.io/pht-medic/station-airflow:latest</a>&quot; line</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># ------------- ommitted ------------</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">airflow</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># replace with the build command</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./airflow</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># remove the image command</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ghcr.io/pht-medic/airflow:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"><span style="color:#676E95;"># ------------- ommitted ------------</span></span>
<span class="line"></span></code></pre></div><h3 id="changing-airflow-admin-password-user" tabindex="-1">Changing Airflow admin password/user <a class="header-anchor" href="#changing-airflow-admin-password-user" aria-hidden="true">#</a></h3><p>Changing the Airflow admin password/user in the env file after the build is not directly possible. Either use Airflow UI to change the password or delete the airflow volume and rebuild after the change.</p><h2 id="running-airflow-behind-a-reverse-proxy" tabindex="-1">Running airflow behind a reverse proxy <a class="header-anchor" href="#running-airflow-behind-a-reverse-proxy" aria-hidden="true">#</a></h2><p>Edit the airflow configuration in <code>airflow/airflow.cfg</code> according to the instructions found <a href="https://airflow.apache.org/docs/apache-airflow/stable/howto/run-behind-proxy.html" target="_blank" rel="noreferrer">here</a> Set forwarding in your reverse proxy (nginx for example) to access the airflow instance running on <code>http://127.0.0.1:8080</code> After updating the configuration stop the instance if it is running (<code>docker-compose down</code>) and restart it after rebuilding the image (<code>docker-compose up --build -d</code>).</p>`,28),i=[s];function r(l,d,c,h,p,u){return t(),a("div",null,i)}const y=e(o,[["render",r]]);export{f as __pageData,y as default};
