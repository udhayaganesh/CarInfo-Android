



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jquery-mobile-map/head.js at master · mobabel/jquery-mobile-map · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mobabel/jquery-mobile-map" name="twitter:title" /><meta content="jquery-mobile-map - google map in jquery mobile" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1913486?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1913486?v=3&amp;s=400" property="og:image" /><meta content="mobabel/jquery-mobile-map" property="og:title" /><meta content="https://github.com/mobabel/jquery-mobile-map" property="og:url" /><meta content="jquery-mobile-map - google map in jquery mobile" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="180BEE37:10E9:39E0393:569C8A3D" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="be68edaad2507a4e1d2d40296bc069e5ed66b4c9" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-1b53a0bcb9add868a6c5ae469ecabb8b236ffa8f2b05360fde027f75eb714f1b.css" integrity="sha256-G1OgvLmt2Gimxa5Gnsq7iyNv+o8rBTYP3gJ/detxTxs=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-70af51f1bed4904749e6ef486ad11871c8ce4361ac82bb5f96a090b7f5346580.css" integrity="sha256-cK9R8b7UkEdJ5u9IatEYccjOQ2GsgrtflqCQt/U0ZYA=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="4222bfcb881548243f94e18e8a3bcfd0">

      
  <meta name="description" content="jquery-mobile-map - google map in jquery mobile">
  <meta name="go-import" content="github.com/mobabel/jquery-mobile-map git https://github.com/mobabel/jquery-mobile-map.git">

  <meta content="1913486" name="octolytics-dimension-user_id" /><meta content="mobabel" name="octolytics-dimension-user_login" /><meta content="6844455" name="octolytics-dimension-repository_id" /><meta content="mobabel/jquery-mobile-map" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6844455" name="octolytics-dimension-repository_network_root_id" /><meta content="mobabel/jquery-mobile-map" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mobabel/jquery-mobile-map/commits/master.atom" rel="alternate" title="Recent Commits to jquery-mobile-map:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span aria-hidden="true" class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fmobabel%2Fjquery-mobile-map%2Fblob%2Fmaster%2Fhead.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/mobabel/jquery-mobile-map/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/mobabel/jquery-mobile-map/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmobabel%2Fjquery-mobile-map"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/mobabel/jquery-mobile-map/watchers">
    1
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmobabel%2Fjquery-mobile-map"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/mobabel/jquery-mobile-map/stargazers">
      0
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmobabel%2Fjquery-mobile-map"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/mobabel/jquery-mobile-map/network" class="social-count">
      0
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/mobabel" class="url fn" itemprop="url" rel="author"><span itemprop="title">mobabel</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/mobabel/jquery-mobile-map" data-pjax="#js-repo-pjax-container">jquery-mobile-map</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/mobabel/jquery-mobile-map" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mobabel/jquery-mobile-map">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>

  <a href="/mobabel/jquery-mobile-map/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /mobabel/jquery-mobile-map/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">0</span>
</a>

  <a href="/mobabel/jquery-mobile-map/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /mobabel/jquery-mobile-map/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/mobabel/jquery-mobile-map/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /mobabel/jquery-mobile-map/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/mobabel/jquery-mobile-map/blob/c0dc59e79a5ff513c668f49a8707696b9c5e3f99/head.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5e6ced9e40b4e03029ae17021b73f2a6 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mobabel/jquery-mobile-map/blob/master/head.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/mobabel/jquery-mobile-map/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mobabel/jquery-mobile-map" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jquery-mobile-map</span></a></span></span><span class="separator">/</span><strong class="final-path">head.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/mobabel/jquery-mobile-map/commit/7e9078491474a90b24ecd7bb7b0d6250319a3a67" data-pjax>
          7e90784
        </a>
        <time datetime="2011-01-13T03:36:44Z" is="relative-time">Jan 13, 2011</time>
      </span>
      <div>
        <img alt="@volca" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/196212?v=3&amp;s=40" width="20" />
        <a href="/volca" class="user-mention" rel="contributor">volca</a>
          <a href="/mobabel/jquery-mobile-map/commit/7e9078491474a90b24ecd7bb7b0d6250319a3a67" class="message" data-pjax="true" title="initial add">initial add</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@volca" height="24" src="https://avatars1.githubusercontent.com/u/196212?v=3&amp;s=48" width="24" />
            <a href="/volca">volca</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/mobabel/jquery-mobile-map/raw/master/head.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/mobabel/jquery-mobile-map/blame/master/head.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/mobabel/jquery-mobile-map/commits/master/head.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      8 lines (7 sloc)
      <span class="file-info-divider"></span>
    5.43 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	Head JS		The only script in your &lt;HEAD&gt;</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	Copyright	Tero Piirainen (tipiirai)</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	License		MIT / http://bit.ly/mit-license</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	Version		0.8</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	http://headjs.com</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/(function(a){var b=a.documentElement,c={screens:[320,480,640,768,1024,1280,1440,1680,1920],section:&quot;-section&quot;,page:&quot;-page&quot;,head:&quot;head&quot;},d=[];if(window.head_conf)for(var e in head_conf)head_conf[e]&amp;&amp;(c[e]=head_conf[e]);function f(a){d.push(a)}function g(a){var c=new RegExp(&quot;\\b&quot;+a+&quot;\\b&quot;);b.className=b.className.replace(c,&quot;&quot;)}function h(a,b){for(var c=0;c&lt;a.length;c++)b.call(a,a[c],c)}var i=window[c.head]=function(){i.ready.apply(null,arguments)};i.feature=function(a,c,e){{if(a){Object.prototype.toString.call(c)==&quot;[object Function]&quot;&amp;&amp;(c=c.call()),f((c?&quot;&quot;:&quot;no-&quot;)+a),i[a]=!!c,e||(g(&quot;no-&quot;+a),g(a),i.feature());return i}b.className+=&quot; &quot;+d.join(&quot; &quot;),d=[]}};var j=navigator.userAgent.toLowerCase();j=/(webkit)[ \/]([\w.]+)/.exec(j)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(j)||/(msie) ([\w.]+)/.exec(j)||!/compatible/.test(j)&amp;&amp;/(mozilla)(?:.*? rv:([\w.]+))?/.exec(j)||[],j[1]==&quot;msie&quot;&amp;&amp;(j[1]=&quot;ie&quot;),f(j[1]),i.browser={version:j[2]},i.browser[j[1]]=true;if(i.browser.ie)for(var k=3;k&lt;11;k++)parseFloat(j[2])&lt;k&amp;&amp;f(&quot;lt-ie&quot;+k);h(&quot;abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video&quot;.split(&quot;|&quot;),function(b){a.createElement(b)}),h(location.pathname.split(&quot;/&quot;),function(a,d){if(this.length&gt;2&amp;&amp;this[d+1]!==undefined)d&amp;&amp;f(this.slice(1,d+1).join(&quot;-&quot;)+c.section);else{var e=a||&quot;index&quot;,g=e.indexOf(&quot;.&quot;);g&gt;0&amp;&amp;(e=e.substring(0,g)),b.id=e+c.page,d||f(&quot;root&quot;+c.section)}});function l(){var a=window.outerWidth||b.clientWidth;b.className=b.className.replace(/ (w|lt)-\d+/g,&quot;&quot;),f(&quot;w-&quot;+Math.round(a/100)*100),h(c.screens,function(b){a&lt;=b&amp;&amp;f(&quot;lt-&quot;+b)}),i.feature()}l(),window.onresize=l,i.feature(&quot;js&quot;,true).feature()})(document),function(){var a=document.createElement(&quot;i&quot;),b=a.style,c=&quot; -o- -moz- -ms- -webkit- -khtml- &quot;.split(&quot; &quot;),d=&quot;Webkit Moz O ms Khtml&quot;.split(&quot; &quot;),e=window.head_conf&amp;&amp;head_conf.head||&quot;head&quot;,f=window[e];function g(a){for(var c in a)if(b[a[c]]!==undefined)return true}function h(a){var b=a.charAt(0).toUpperCase()+a.substr(1),c=(a+&quot; &quot;+d.join(b+&quot; &quot;)+b).split(&quot; &quot;);return!!g(c)}var i={gradient:function(){var a=&quot;background-image:&quot;,d=&quot;gradient(linear,left top,right bottom,from(#9f9),to(#fff));&quot;,e=&quot;linear-gradient(left top,#eee,#fff);&quot;;b.cssText=(a+c.join(d+a)+c.join(e+a)).slice(0,-a.length);return!!b.backgroundImage},rgba:function(){b.cssText=&quot;background-color:rgba(0,0,0,0.5)&quot;;return!!b.backgroundColor},opacity:function(){return a.style.opacity===&quot;&quot;},textshadow:function(){return b.textShadow===&quot;&quot;},multiplebgs:function(){b.cssText=&quot;background:url(//:),url(//:),red url(//:)&quot;;return(new RegExp(&quot;(url\\s*\\(.*?){3}&quot;)).test(b.background)},boxshadow:function(){return h(&quot;boxShadow&quot;)},borderimage:function(){return h(&quot;borderImage&quot;)},borderradius:function(){return h(&quot;borderRadius&quot;)},reflections:function(){return h(&quot;boxReflect&quot;)},transforms:function(){return h(&quot;transform&quot;)},transitions:function(){return h(&quot;transition&quot;)}};for(var j in i)i[j]&amp;&amp;f.feature(j,i[j].call(),true);f.feature()}(),function(a){var b=a.documentElement,c=navigator.userAgent.toLowerCase().indexOf(&quot;msie&quot;)!=-1,d=false,e=[],f={},g={},h=a.createElement(&quot;script&quot;).async===true||&quot;MozAppearance&quot;in a.documentElement.style||window.opera;var i=window.head_conf&amp;&amp;head_conf.head||&quot;head&quot;,j=window[i]=window[i]||function(){j.ready.apply(null,arguments)};var k=0,l=1,m=2,n=3;h?j.js=function(){var a=arguments,b=a[a.length-1],c=[];r(b)||(b=null),q(a,function(d,e){d!=b&amp;&amp;(d=p(d),c.push(d),u(d,b&amp;&amp;e==a.length-2?function(){var a=true;q(c,function(b){b.state!=n&amp;&amp;(a=false)}),a&amp;&amp;b()}:null))});return j}:j.js=function(){var a=arguments,b=[].slice.call(a,1),c=b[0];if(!d){e.push(function(){j.js.apply(null,a)});return j}c?(q(b,function(a){r(a)||t(p(a))}),u(p(a[0]),r(c)?c:function(){j.js.apply(null,b)})):u(p(a[0]));return j},j.ready=function(a,b){var c=g[a];if(c&amp;&amp;c.state==n){b.call();return j}r(a)&amp;&amp;(b=a,a=&quot;ALL&quot;);var d=f[a];d?d.push(b):d=f[a]=[b];return j};function o(a){var b=a.split(&quot;/&quot;),c=b[b.length-1],d=c.indexOf(&quot;?&quot;);return d!=-1?c.substring(0,d):c}function p(a){var b;if(typeof a==&quot;object&quot;)for(var c in a)a[c]&amp;&amp;(b={name:c,url:a[c]});else b={name:o(a),url:a};var d=g[b.name];if(d)return d;for(var e in g)if(g[e].url==b.url)return g[e];g[b.name]=b;return b}function q(a,b){if(a){typeof a==&quot;object&quot;&amp;&amp;(a=[].slice.call(a));for(var c=0;c&lt;a.length;c++)b.call(a,a[c],c)}}function r(a){return Object.prototype.toString.call(a)==&quot;[object Function]&quot;}function s(a){a.state=k,q(a.onpreload,function(a){a.call()})}function t(a,b){a.state||(a.state=l,a.onpreload=[],v({src:a.url,type:&quot;cache&quot;},function(){s(a)}))}function u(a,b){if(a.state==n&amp;&amp;b)return b();if(a.state==m)return j.ready(a.name,b);if(a.state==l)return a.onpreload.push(function(){u(a,b)});a.state=m,v(a.url,function(){a.state=n,b&amp;&amp;b(),q(f[a.name],function(a){a.call()});var c=true;for(var d in g)g[d].state!=n&amp;&amp;(c=false);c&amp;&amp;q(f.ALL,function(a){a.done||a.call(),a.done=true})})}function v(c,d){var e=a.createElement(&quot;script&quot;);e.type=&quot;text/&quot;+(c.type||&quot;javascript&quot;),e.src=c.src||c,e.async=false,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&amp;&amp;(!a||/loaded|complete/.test(a))&amp;&amp;(d(),d.done=true)},b.appendChild(e)}setTimeout(function(){d=true,q(e,function(a){a.call()})},200),!a.readyState&amp;&amp;a.addEventListener&amp;&amp;(a.readyState=&quot;loading&quot;,a.addEventListener(&quot;DOMContentLoaded&quot;,handler=function(){a.removeEventListener(&quot;DOMContentLoaded&quot;,handler,false),a.readyState=&quot;complete&quot;},false))}(document)</span></td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.03218s from github-fe144-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span aria-hidden="true" class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-KJVHXHFPE3kLY+Y2tTiaaRiiYCWcWyKhWs9e8mvW7wk=" src="https://assets-cdn.github.com/assets/frameworks-2895475c714f13790b63e636b5389a6918a260259c5b22a15acf5ef26bd6ef09.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-wEBGCKO80TEHdt8Ksm4Qe/1w/wOCQI9D7eGoHnMOOc0=" src="https://assets-cdn.github.com/assets/github-c0404608a3bcd1310776df0ab26e107bfd70ff0382408f43ede1a81e730e39cd.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <span aria-hidden="true" class="octicon octicon-x"></span>
    </button>
  </div>
</div>

  </body>
</html>

