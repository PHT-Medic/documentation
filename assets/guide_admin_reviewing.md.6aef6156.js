import{_ as e,o as t,c as a,U as o}from"./chunks/framework.7eb5ee76.js";const m=JSON.parse('{"title":"Why is there a review?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/admin/reviewing.md"}'),r={name:"guide/admin/reviewing.md"},i=o('<h1 id="why-is-there-a-review" tabindex="-1">Why is there a review? <a class="header-anchor" href="#why-is-there-a-review" aria-label="Permalink to &quot;Why is there a review?&quot;">​</a></h1><p>Each site must independently approve or reject projects and individual analyses to fulfill the requirements of German hospitals. You can automatically approve proposals or analyses if you have contracts or other trust delegations.</p><h1 id="what-is-there-to-review" tabindex="-1">What is there to review? <a class="header-anchor" href="#what-is-there-to-review" aria-label="Permalink to &quot;What is there to review?&quot;">​</a></h1><p>Before accepting a proposal or a train, the requested data and the code contained in a train need to be reviewed. While removing network access and the built-in security features should be sufficient to prevent the transfer of input data, the code still needs to be examined to prevent any undesirable behavior.</p><h2 id="proposals" tabindex="-1">Proposals <a class="header-anchor" href="#proposals" aria-label="Permalink to &quot;Proposals&quot;">​</a></h2><p>Proposals are the top level organizational unit of the PHT system and reflect a study or project. Proposals describe the goal of an analysis, the requested data and an estimation of the potential risk of participation. When the description of the proposal meets the local requirements of your station, a user with the role of <strong>Station Authority</strong> can accept the proposal, otherwise the proposal is rejected (optionally with comments for improvement).</p><p>Joining a proposal means that users of other stations also joined the proposal can select your station as a participant in the trains they create for this proposal.</p><h2 id="trains" tabindex="-1">Trains <a class="header-anchor" href="#trains" aria-label="Permalink to &quot;Trains&quot;">​</a></h2><p>Trains contain analysis code that should be executed on the data requested in the proposal. The code is user submitted, so while the security protocol prevents unencrypted data transfer via docker images and restricts network access, the analysis code still needs to be reviewed to avoid malicious behavior.</p>',9),s=[i];function n(h,l,d,p,c,u){return t(),a("div",null,s)}const v=e(r,[["render",n]]);export{m as __pageData,v as default};
