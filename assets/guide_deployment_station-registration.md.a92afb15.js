import{_ as a}from"./chunks/pk_station.e6755827.js";import{_ as e,o as t,c as s,U as n}from"./chunks/framework.7eb5ee76.js";const o="/images/ui_images/add_station_central.png",_=JSON.parse('{"title":"Registration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment/station-registration.md"}'),l={name:"guide/deployment/station-registration.md"},r=n('<h1 id="registration" tabindex="-1">Registration <a class="header-anchor" href="#registration" aria-label="Permalink to &quot;Registration&quot;">​</a></h1><p>Stations must be registered in the central User-Interface in order to be the destination of a proposal or train.</p><div class="warning custom-block"><p class="custom-block-title">IMPORTANT</p><p>When changing the settings of your station in the central UI you need to restart your local station.</p></div><h2 id="central" tabindex="-1">Central <a class="header-anchor" href="#central" aria-label="Permalink to &quot;Central&quot;">​</a></h2><p>Click on Admin(1) -&gt; General(2) -&gt; Stations(3) -&gt; +Add(4) to create a new station. <a href="/images/ui_images/add_station_central.png"><img src="'+o+`" alt="image"></a></p><h2 id="key-pair-generation" tabindex="-1">Key pair generation <a class="header-anchor" href="#key-pair-generation" aria-label="Permalink to &quot;Key pair generation&quot;">​</a></h2><p>Generate a new key using <a href="https://www.openssl.org/" target="_blank" rel="noreferrer">open-ssl</a> locally on the machine you want to run your station on:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">genrsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-out</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key.pem</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2048</span></span>
<span class="line"></span></code></pre></div><p>Generate the associated public key using:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">openssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key.pem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-outform</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PEM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-pubout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-out</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public.pem</span></span>
<span class="line"></span></code></pre></div><p>and then register this key in the UI.</p><h3 id="public-key-registration" tabindex="-1">Public Key registration <a class="header-anchor" href="#public-key-registration" aria-label="Permalink to &quot;Public Key registration&quot;">​</a></h3><p>Here, you also need to set the name of your station, select the ecosystem (if your station is a PHT-Medic station use default) and set the public key of the station. <a href="/images/ui_images/pk_station.png"><img src="`+a+'" alt="image"></a><br> Once you have filled in all the fields, you can click &quot;Create&quot;. The <strong>registry credentials</strong> for your station will appear below. These are important for the <a href="/guide/deployment/station-installation.html">following installation</a>.</p>',13),i=[r];function p(c,d,h,y,g,u){return t(),s("div",null,i)}const f=e(l,[["render",p]]);export{_ as __pageData,f as default};
