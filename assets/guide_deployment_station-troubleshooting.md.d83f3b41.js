import{_ as o,o as a,c as e,U as s}from"./chunks/framework.7eb5ee76.js";const m=JSON.parse('{"title":"Troubleshooting","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/station-troubleshooting.md"}'),n={name:"guide/deployment/station-troubleshooting.md"},t=s(`<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h1><h2 id="station-setup-on-windows" tabindex="-1">Station Setup on windows <a class="header-anchor" href="#station-setup-on-windows" aria-label="Permalink to &quot;Station Setup on windows&quot;">​</a></h2><p>If you are on a Windows Computer you need to change the line seperator to the <strong>Unix/macOS</strong>-style for the airflow directory. In Pycharm you can follow these steps:</p><ol><li>Select the airflow folder</li><li>Click on File in the top-left corner</li><li>Click on File Properties -&gt; Line Separators -&gt; LF - Unix and maxOS (\\n)</li></ol><h3 id="custom-dags" tabindex="-1">Custom dags <a class="header-anchor" href="#custom-dags" aria-label="Permalink to &quot;Custom dags&quot;">​</a></h3><p>If you want to use custom dags in airflow, you will have to change the docker-compose.yml; instated of pulling the latest pre-build airflow image; you have to build airflow locally. This is done by commenting out the &quot;build: &#39;./airflow&#39; &quot; line and uncommenting the &quot; image: ghcr.io/pht-medic/station-airflow:latest&quot; line</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># ------------- ommitted ------------</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">airflow</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># replace with the build command</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./airflow</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># remove the image command</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ghcr.io/pht-medic/airflow:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ------------- ommitted ------------</span></span>
<span class="line"></span></code></pre></div><h2 id="edit-airflow-admin-user-password" tabindex="-1">Edit airflow admin user/password <a class="header-anchor" href="#edit-airflow-admin-user-password" aria-label="Permalink to &quot;Edit airflow admin user/password&quot;">​</a></h2><p>Changing the Airflow admin password/user in the env file after the build is not directly possible. Either use Airflow UI to change the password or delete the airflow volume and rebuild after the change.</p><h2 id="airflow-behind-a-reverse-proxy" tabindex="-1">Airflow behind a reverse proxy <a class="header-anchor" href="#airflow-behind-a-reverse-proxy" aria-label="Permalink to &quot;Airflow behind a reverse proxy&quot;">​</a></h2><p>Edit the airflow configuration in <code>airflow/airflow.cfg</code> according to the instructions found <a href="https://airflow.apache.org/docs/apache-airflow/stable/howto/run-behind-proxy.html" target="_blank" rel="noreferrer">here</a> Set forwarding in your reverse proxy (nginx for example) to access the airflow instance running on <code>http://127.0.0.1:8080</code> After updating the configuration stop the instance if it is running (<code>docker-compose down</code>) and restart it after rebuilding the image (<code>docker-compose up --build -d</code>).</p>`,11),l=[t];function r(i,p,c,d,h,u){return a(),e("div",null,l)}const y=o(n,[["render",r]]);export{m as __pageData,y as default};
