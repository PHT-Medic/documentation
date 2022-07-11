import{_ as s,o as a,c as n,a as l}from"./app.5d12df5a.js";const C=JSON.parse('{"title":"Trains","description":"","frontmatter":{},"headers":[{"level":2,"title":"Defining Trains","slug":"defining-trains"},{"level":3,"title":"Example Train","slug":"example-train"}],"relativePath":"user-guide/trains.md"}'),p={name:"user-guide/trains.md"},o=l(`<h1 id="trains" tabindex="-1">Trains <a class="header-anchor" href="#trains" aria-hidden="true">#</a></h1><p>This section will provide explanations and example for writing code and queries for PHT trains, it does not cover the organizational aspects (such as what stations participate etc.) but focuses on how to write the code that will be executed as a train and how to define queries. Information on how to build trains and actually send them on their way can be found in the user guide for the <a href="./central/user_interface.html">UI</a>.</p><p>This example can be used as <code>entrypoint.py</code>, which is namely reference in this documentation.</p><h2 id="defining-trains" tabindex="-1">Defining Trains <a class="header-anchor" href="#defining-trains" aria-hidden="true">#</a></h2><h3 id="example-train" tabindex="-1">Example Train <a class="header-anchor" href="#example-train" aria-hidden="true">#</a></h3><h4 id="calculate-average-age-based-on-a-fhir-query" tabindex="-1">Calculate average age based on a fhir query <a class="header-anchor" href="#calculate-average-age-based-on-a-fhir-query" aria-hidden="true">#</a></h4><p>The query to be used in this train is the JSON version of the minimal example found in the next section. What this train will do ist calculate the average age of patients matching the query across multiple stations.<br> The stations will pass the query results to the train as volumes and also set the environment variable <code>TRAIN_DATA_PATH</code> inside the train container, which is used by the train to load the passed json file.</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pandas </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> pd</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> json</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> datetime</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">RESULTS_PATH </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/opt/pht_results/average_age.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">load_previous_data</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exists</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            average_age_dict </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> average_age_dict</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">age_from_dob</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dob</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    today </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> datetime</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">today</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> today</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> dob</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">today</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">month</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> today</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">day</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dob</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">month</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dob</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">day</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse_fhir_response</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data_path</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> pd</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">DataFrame</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Load and parse provided FHIR resources to a pandas dataframe</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    :return:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data_path</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        results </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    parsed_resources </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> patient </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> results</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">entry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">        resource </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> patient</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        parsed_resources</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">parse_resource</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">resource</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    df </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DataFrame</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">parsed_resources</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> df</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse_resource</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resource</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    Parse a FHIR resource returned from a FHIR server in a desired format</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    :param resource:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    :return: dictionary of parsed resource</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    </span><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sequence_dict </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">givenName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> resource</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">given</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">familyName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> resource</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">family</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">birthDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> resource</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">birthDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> resource</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> sequence_dict</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calculate_new_average</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">average_age_dict</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data_path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> results_path</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># load the data and ensure that birthdate is a datetime column</span></span>
<span class="line"><span style="color:#A6ACCD;">    data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse_fhir_response</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data_path</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    data</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">birthDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to_datetime</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">birthDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    ages </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">birthDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">].</span><span style="color:#82AAFF;">apply</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">lambda</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> age_from_dob</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    local_average </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ages</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mean</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># previous results exist load them otherwise create a new dictionary containing the results</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> average_age_dict</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        prev_average </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> average_age_dict</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">average_age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        new_average </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prev_average </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> local_average</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> prev_average </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> local_average</span></span>
<span class="line"><span style="color:#A6ACCD;">        average_age_dict</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">average_age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> new_average</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        new_average </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> local_average</span></span>
<span class="line"><span style="color:#A6ACCD;">        average_age_dict </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">average_age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> new_average</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">average_age_dict</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># store the updated results</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">results_path</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">average_age_dict</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">fp</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">indent</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    data_path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getenv</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">TRAIN_DATA_PATH</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/opt/train_data/patients.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;Loading data at </span><span style="color:#82AAFF;">{data_path}</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    prev_results </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">load_previous_data</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">RESULTS_PATH</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">calculate_new_average</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prev_results</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> data_path</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> RESULTS_PATH</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(r,c,D,F,y,A){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};
