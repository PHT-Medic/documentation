import{_ as e,o as r,c as a,f as o}from"./app.a2f06a94.js";const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]},{"level":2,"title":"Placeholders","slug":"placeholders","link":"#placeholders","children":[]}],"relativePath":"guide/deployment/central-introduction.md"}'),i={name:"guide/deployment/central-introduction.md"},t=o('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><p>The following guide is based on some shared assumptions:</p><ul><li>OS <code>debian</code> or <code>ubuntu</code></li><li>Nginx <code>v1.18.x</code> is installed</li><li>Docker <code>v20.x</code> is installed</li><li>Min. <code>4</code> cores</li><li>Min. <code>20G</code> hard disk</li><li>Domain for <code>harbor</code> (e.g. <a href="http://harbor.example.com" target="_blank" rel="noreferrer">harbor.example.com</a>) &amp; <code>app</code> (e.g. <a href="http://app.example.com" target="_blank" rel="noreferrer">app.example.com</a>) with certificates</li></ul><h2 id="placeholders" tabindex="-1">Placeholders <a class="header-anchor" href="#placeholders" aria-hidden="true">#</a></h2><p>The following placeholders are used in the following sections:</p><ul><li><code>[HARBOR_DOMAIN]</code> Domain name (e.g. <a href="http://harbor.example.com" target="_blank" rel="noreferrer">harbor.example.com</a>)</li><li><code>[HARBOR_SSL_CRT]</code>: Certificate file (.crt)</li><li><code>[HARBOR_SSL_KEY]</code>: Certificate key file (.key)</li><li><code>[APP_DOMAIN]</code> Domain name (e.g. <a href="http://app.example.com" target="_blank" rel="noreferrer">app.example.com</a>)</li><li><code>[APP_URL]</code>: Web address (e.g. <a href="https://app.example.com/" target="_blank" rel="noreferrer">https://app.example.com/</a>)</li><li><code>[APP_API_URL]</code>: Web address (e.g. <a href="https://app.example.com/api/" target="_blank" rel="noreferrer">https://app.example.com/api/</a>)</li><li><code>[APP_SSL_CRT]</code>: Certificate file (.crt)</li><li><code>[APP_SSL_KEY]</code>: Certificate key file (.key)</li></ul>',7),l=[t];function c(d,n,s,p,h,m){return r(),a("div",null,l)}const u=e(i,[["render",c]]);export{f as __pageData,u as default};
