<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAcQaWRcTlND-CYCf14jLyns9WWBsQ:1453066209518";
 
 
 var CS_env = {"profileUrl": "/a/eclipselabs.org/u/104567085526109766759/", "token": "ABZ6GAcQaWRcTlND-CYCf14jLyns9WWBsQ:1453066209518", "projectHomeUrl": "/a/eclipselabs.org/p/mobile-web-development-with-phonegap", "loggedInUserEmail": "udhayaganesh@gmail.com", "projectName": "mobile-web-development-with-phonegap", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": "eclipselabs.org", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/15399544380024573679", "relativeBaseUrl": "/a/eclipselabs.org"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-20478043-1'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>main.js - 
 mobile-web-development-with-phonegap -
 
 
 AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/15399544380024573679/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/15399544380024573679/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/15399544380024573679/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/15399544380024573679/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>udhayaganesh@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/a/eclipselabs.org/u/104567085526109766759/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/a/eclipselabs.org/u/104567085526109766759/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftags%2Fr1.2%2Fcom.mds.apg%2Fresources%2Fsencha%2FphonegapExample%2Fmain.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/">
 
 
 <img src="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/logo?cct=1341553427"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="name">mobile-web-development-with-phonegap</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="description">AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/a/eclipselabs.org/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <a href="https://code.google.com/export-to-github/export?project=eclipselabs.org:mobile-web-development-with-phonegap">
 <button>Export to GitHub</button>
 
 </a>
 
 
 <div class=gtbc></div>
</div>

 
 <div style="font-weight: bold; color: #c00; margin-top: 5px; margin-left: 13px;">
 READ-ONLY: This project has been <a href='https://code.google.com/archive/a/eclipselabs.org/p/mobile-web-development-with-phonegap'>archived</a>. For more information see <a href='https://code.google.com/p/support/wiki/ReadOnlyTransition'>this post</a>.
 </div>
 

<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list">Changes</a></span> &nbsp;
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/">tags</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/">r1.2</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/">com.mds.apg</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/">resources</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/">sencha</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/">phonegapExample</a><span class="sp">/&nbsp;</span>main.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js?r=132" title="Previous">&lsaquo;r132</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r174</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn174_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn174_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn174_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn174_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn174_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn174_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn174_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn174_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn174_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn174_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn174_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn174_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn174_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn174_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn174_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn174_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn174_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn174_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn174_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn174_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn174_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn174_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn174_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn174_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn174_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn174_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn174_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn174_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn174_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn174_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn174_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn174_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn174_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn174_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn174_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn174_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn174_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn174_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn174_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn174_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn174_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn174_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn174_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn174_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn174_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn174_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn174_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn174_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn174_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn174_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn174_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn174_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn174_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn174_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn174_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn174_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn174_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn174_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn174_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn174_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn174_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn174_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn174_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn174_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn174_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn174_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn174_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn174_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn174_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn174_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn174_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn174_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn174_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn174_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn174_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn174_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn174_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn174_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn174_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn174_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn174_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn174_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn174_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn174_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn174_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn174_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn174_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn174_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn174_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn174_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn174_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn174_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn174_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn174_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn174_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn174_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn174_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn174_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn174_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn174_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn174_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn174_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn174_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn174_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn174_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn174_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn174_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn174_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn174_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn174_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn174_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn174_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn174_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn174_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn174_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn174_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn174_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn174_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn174_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn174_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn174_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn174_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn174_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn174_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn174_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn174_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn174_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn174_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn174_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn174_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn174_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn174_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn174_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn174_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn174_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn174_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn174_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn174_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn174_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn174_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn174_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn174_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn174_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn174_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn174_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn174_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn174_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn174_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn174_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn174_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn174_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn174_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn174_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn174_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn174_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn174_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn174_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn174_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn174_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn174_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn174_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn174_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn174_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn174_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn174_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn174_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn174_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn174_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn174_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn174_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn174_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn174_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn174_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn174_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn174_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn174_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn174_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn174_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn174_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn174_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn174_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn174_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn174_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn174_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn174_185"

><td id="185"><a href="#185">185</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn174_1

><td class="source">var getLocation = function() {<br></td></tr
><tr
id=sl_svn174_2

><td class="source">    var suc = function(p) {<br></td></tr
><tr
id=sl_svn174_3

><td class="source">        <br></td></tr
><tr
id=sl_svn174_4

><td class="source">        document.getElementById(&quot;loclat&quot;).innerHTML = &#39;Latitude: &#39;<br></td></tr
><tr
id=sl_svn174_5

><td class="source">                + p.coords.latitude;<br></td></tr
><tr
id=sl_svn174_6

><td class="source">        document.getElementById(&quot;loclong&quot;).innerHTML = &#39;Longitude: &#39;<br></td></tr
><tr
id=sl_svn174_7

><td class="source">                + p.coords.longitude;<br></td></tr
><tr
id=sl_svn174_8

><td class="source">        document.getElementById(&quot;locaccur&quot;).innerHTML = &#39;Accuracy: &#39;<br></td></tr
><tr
id=sl_svn174_9

><td class="source">                + p.coords.accuracy + &#39;m&#39;;<br></td></tr
><tr
id=sl_svn174_10

><td class="source"><br></td></tr
><tr
id=sl_svn174_11

><td class="source">        var mapview = document.getElementById(&#39;mapview&#39;);<br></td></tr
><tr
id=sl_svn174_12

><td class="source"><br></td></tr
><tr
id=sl_svn174_13

><td class="source">        var image_url = &quot;http://maps.google.com/maps/api/staticmap?sensor=false&amp;center=&quot;<br></td></tr
><tr
id=sl_svn174_14

><td class="source">                + p.coords.latitude<br></td></tr
><tr
id=sl_svn174_15

><td class="source">                + &quot;,&quot;<br></td></tr
><tr
id=sl_svn174_16

><td class="source">                + p.coords.longitude<br></td></tr
><tr
id=sl_svn174_17

><td class="source">                + &quot;&amp;zoom=13&amp;size=220x180&amp;markers=color:blue|&quot;<br></td></tr
><tr
id=sl_svn174_18

><td class="source">                + p.coords.latitude + &#39;,&#39; + p.coords.longitude;<br></td></tr
><tr
id=sl_svn174_19

><td class="source"><br></td></tr
><tr
id=sl_svn174_20

><td class="source">        mapview.style.display = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_21

><td class="source">        mapview.style.position = &quot;absolute&quot;;<br></td></tr
><tr
id=sl_svn174_22

><td class="source">        mapview.style.bottom = &quot;7px&quot;;<br></td></tr
><tr
id=sl_svn174_23

><td class="source">        mapview.style.left = &quot;14px&quot;;<br></td></tr
><tr
id=sl_svn174_24

><td class="source">        document.getElementById(&quot;mapcanvas&quot;).src = image_url;<br></td></tr
><tr
id=sl_svn174_25

><td class="source">    };<br></td></tr
><tr
id=sl_svn174_26

><td class="source">    var fail = function(error) {<br></td></tr
><tr
id=sl_svn174_27

><td class="source">        document.getElementById(&quot;loclong&quot;).innerHTML = &#39;&lt;span style=&quot;color:red;&quot;&gt;Failed to get location&lt;/span&gt;&#39;;<br></td></tr
><tr
id=sl_svn174_28

><td class="source">        switch (error.code) {<br></td></tr
><tr
id=sl_svn174_29

><td class="source">        case error.PERMISSION_DENIED:<br></td></tr
><tr
id=sl_svn174_30

><td class="source">            alert(&quot;User did not share geolocation data.&quot;);<br></td></tr
><tr
id=sl_svn174_31

><td class="source">            break;<br></td></tr
><tr
id=sl_svn174_32

><td class="source"><br></td></tr
><tr
id=sl_svn174_33

><td class="source">        case error.POSITION_UNAVAILABLE:<br></td></tr
><tr
id=sl_svn174_34

><td class="source">            alert(&quot;Could not detect current position.&quot;);<br></td></tr
><tr
id=sl_svn174_35

><td class="source">            break;<br></td></tr
><tr
id=sl_svn174_36

><td class="source"><br></td></tr
><tr
id=sl_svn174_37

><td class="source">        case error.TIMEOUT:<br></td></tr
><tr
id=sl_svn174_38

><td class="source">            alert(&quot;Retrieving position timed out.&quot;);<br></td></tr
><tr
id=sl_svn174_39

><td class="source">            break;<br></td></tr
><tr
id=sl_svn174_40

><td class="source"><br></td></tr
><tr
id=sl_svn174_41

><td class="source">        default:<br></td></tr
><tr
id=sl_svn174_42

><td class="source">            alert(&quot;Unknown error.&quot;);<br></td></tr
><tr
id=sl_svn174_43

><td class="source">            break;<br></td></tr
><tr
id=sl_svn174_44

><td class="source">        }<br></td></tr
><tr
id=sl_svn174_45

><td class="source">    };<br></td></tr
><tr
id=sl_svn174_46

><td class="source"><br></td></tr
><tr
id=sl_svn174_47

><td class="source">    if (navigator.geolocation) {<br></td></tr
><tr
id=sl_svn174_48

><td class="source">        document.getElementById(&quot;loclong&quot;).innerHTML = &quot;Getting geolocation . . .&quot;;<br></td></tr
><tr
id=sl_svn174_49

><td class="source">        navigator.geolocation.getCurrentPosition(suc, fail);<br></td></tr
><tr
id=sl_svn174_50

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn174_51

><td class="source">        document.getElementById(&quot;loclong&quot;).innerHTML = &#39;&lt;span style=&quot;color:red;&quot;&gt;Device or browser can not get location&lt;/span&gt;&#39;;<br></td></tr
><tr
id=sl_svn174_52

><td class="source">    }<br></td></tr
><tr
id=sl_svn174_53

><td class="source">};<br></td></tr
><tr
id=sl_svn174_54

><td class="source"><br></td></tr
><tr
id=sl_svn174_55

><td class="source">var closeLocation = function() {<br></td></tr
><tr
id=sl_svn174_56

><td class="source">    document.getElementById(&quot;loclat&quot;).innerHTML = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_57

><td class="source">    document.getElementById(&quot;loclong&quot;).innerHTML = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_58

><td class="source">    document.getElementById(&quot;locaccur&quot;).innerHTML = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_59

><td class="source">    document.getElementById(&quot;mapcanvas&quot;).src = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_60

><td class="source">    document.getElementById(&quot;mapview&quot;).style.display = &quot;none&quot;;<br></td></tr
><tr
id=sl_svn174_61

><td class="source">};<br></td></tr
><tr
id=sl_svn174_62

><td class="source"><br></td></tr
><tr
id=sl_svn174_63

><td class="source">var beep = function() {<br></td></tr
><tr
id=sl_svn174_64

><td class="source">    navigator.notification.beep(2);<br></td></tr
><tr
id=sl_svn174_65

><td class="source">};<br></td></tr
><tr
id=sl_svn174_66

><td class="source"><br></td></tr
><tr
id=sl_svn174_67

><td class="source">var vibrate = function() {<br></td></tr
><tr
id=sl_svn174_68

><td class="source">    navigator.notification.vibrate(0);<br></td></tr
><tr
id=sl_svn174_69

><td class="source">};<br></td></tr
><tr
id=sl_svn174_70

><td class="source"><br></td></tr
><tr
id=sl_svn174_71

><td class="source">function roundNumber(num) {<br></td></tr
><tr
id=sl_svn174_72

><td class="source">    var dec = 3;<br></td></tr
><tr
id=sl_svn174_73

><td class="source">    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);<br></td></tr
><tr
id=sl_svn174_74

><td class="source">    return result;<br></td></tr
><tr
id=sl_svn174_75

><td class="source">}<br></td></tr
><tr
id=sl_svn174_76

><td class="source"><br></td></tr
><tr
id=sl_svn174_77

><td class="source">var accelerationWatch = null;<br></td></tr
><tr
id=sl_svn174_78

><td class="source"><br></td></tr
><tr
id=sl_svn174_79

><td class="source">function updateAcceleration(a) {<br></td></tr
><tr
id=sl_svn174_80

><td class="source">    document.getElementById(&#39;x&#39;).innerHTML = roundNumber(a.x);<br></td></tr
><tr
id=sl_svn174_81

><td class="source">    document.getElementById(&#39;y&#39;).innerHTML = roundNumber(a.y);<br></td></tr
><tr
id=sl_svn174_82

><td class="source">    document.getElementById(&#39;z&#39;).innerHTML = roundNumber(a.z);<br></td></tr
><tr
id=sl_svn174_83

><td class="source">}<br></td></tr
><tr
id=sl_svn174_84

><td class="source"><br></td></tr
><tr
id=sl_svn174_85

><td class="source">function toggleAccel() {<br></td></tr
><tr
id=sl_svn174_86

><td class="source">    if (accelerationWatch !== null) {<br></td></tr
><tr
id=sl_svn174_87

><td class="source">        navigator.accelerometer.clearWatch(accelerationWatch);<br></td></tr
><tr
id=sl_svn174_88

><td class="source">        updateAcceleration({<br></td></tr
><tr
id=sl_svn174_89

><td class="source">            x : &quot;&quot;,<br></td></tr
><tr
id=sl_svn174_90

><td class="source">            y : &quot;&quot;,<br></td></tr
><tr
id=sl_svn174_91

><td class="source">            z : &quot;&quot;<br></td></tr
><tr
id=sl_svn174_92

><td class="source">        });<br></td></tr
><tr
id=sl_svn174_93

><td class="source">        accelerationWatch = null;<br></td></tr
><tr
id=sl_svn174_94

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn174_95

><td class="source">        var options = {};<br></td></tr
><tr
id=sl_svn174_96

><td class="source">        options.frequency = 1000;<br></td></tr
><tr
id=sl_svn174_97

><td class="source">        accelerationWatch = navigator.accelerometer.watchAcceleration(<br></td></tr
><tr
id=sl_svn174_98

><td class="source">                updateAcceleration, function(ex) {<br></td></tr
><tr
id=sl_svn174_99

><td class="source">                    alert(&quot;accel fail (&quot; + ex.name + &quot;: &quot; + ex.message + &quot;)&quot;);<br></td></tr
><tr
id=sl_svn174_100

><td class="source">                }, options);<br></td></tr
><tr
id=sl_svn174_101

><td class="source">    }<br></td></tr
><tr
id=sl_svn174_102

><td class="source">}<br></td></tr
><tr
id=sl_svn174_103

><td class="source"><br></td></tr
><tr
id=sl_svn174_104

><td class="source">var preventBehavior = function(e) {<br></td></tr
><tr
id=sl_svn174_105

><td class="source">    e.preventDefault();<br></td></tr
><tr
id=sl_svn174_106

><td class="source">};<br></td></tr
><tr
id=sl_svn174_107

><td class="source"><br></td></tr
><tr
id=sl_svn174_108

><td class="source">function dump_pic(data) {<br></td></tr
><tr
id=sl_svn174_109

><td class="source">    var viewport = document.getElementById(&#39;viewport&#39;);<br></td></tr
><tr
id=sl_svn174_110

><td class="source">    //console.log(data);<br></td></tr
><tr
id=sl_svn174_111

><td class="source">    viewport.style.display = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_112

><td class="source">    viewport.style.position = &quot;relative&quot;;<br></td></tr
><tr
id=sl_svn174_113

><td class="source">    viewport.style.top = &quot;10px&quot;;<br></td></tr
><tr
id=sl_svn174_114

><td class="source">    viewport.style.left = &quot;20px&quot;;<br></td></tr
><tr
id=sl_svn174_115

><td class="source">    document.getElementById(&quot;test_img&quot;).src = &quot;data:image/jpeg;base64,&quot; + data;<br></td></tr
><tr
id=sl_svn174_116

><td class="source">}<br></td></tr
><tr
id=sl_svn174_117

><td class="source"><br></td></tr
><tr
id=sl_svn174_118

><td class="source">function fail(msg) {<br></td></tr
><tr
id=sl_svn174_119

><td class="source">    alert(msg);<br></td></tr
><tr
id=sl_svn174_120

><td class="source">}<br></td></tr
><tr
id=sl_svn174_121

><td class="source"><br></td></tr
><tr
id=sl_svn174_122

><td class="source">function show_pic() {<br></td></tr
><tr
id=sl_svn174_123

><td class="source">    navigator.camera.getPicture(dump_pic, fail, {<br></td></tr
><tr
id=sl_svn174_124

><td class="source">        quality : 30,<br></td></tr
><tr
id=sl_svn174_125

><td class="source">        destinationType: Camera.DestinationType.DATA_URL <br></td></tr
><tr
id=sl_svn174_126

><td class="source">    });<br></td></tr
><tr
id=sl_svn174_127

><td class="source">}<br></td></tr
><tr
id=sl_svn174_128

><td class="source"><br></td></tr
><tr
id=sl_svn174_129

><td class="source">function closeviewport() {<br></td></tr
><tr
id=sl_svn174_130

><td class="source">    var viewport = document.getElementById(&#39;viewport&#39;);<br></td></tr
><tr
id=sl_svn174_131

><td class="source">    viewport.style.display = &quot;none&quot;;<br></td></tr
><tr
id=sl_svn174_132

><td class="source">    document.getElementById(&quot;test_img&quot;).src = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_133

><td class="source">}<br></td></tr
><tr
id=sl_svn174_134

><td class="source"><br></td></tr
><tr
id=sl_svn174_135

><td class="source">function contacts_success(contacts) {<br></td></tr
><tr
id=sl_svn174_136

><td class="source">    alert(contacts.length<br></td></tr
><tr
id=sl_svn174_137

><td class="source">            + &#39; contacts returned.&#39;<br></td></tr
><tr
id=sl_svn174_138

><td class="source">            + (contacts[2] &amp;&amp; contacts[2].name &amp;&amp;<br></td></tr
><tr
id=sl_svn174_139

><td class="source">               contacts[2].name.formatted ? (&#39; Third contact is &#39; + contacts[2].name.formatted)<br></td></tr
><tr
id=sl_svn174_140

><td class="source">                    : &#39;&#39;));<br></td></tr
><tr
id=sl_svn174_141

><td class="source">}<br></td></tr
><tr
id=sl_svn174_142

><td class="source"><br></td></tr
><tr
id=sl_svn174_143

><td class="source">function get_contacts() {<br></td></tr
><tr
id=sl_svn174_144

><td class="source">    var obj = new ContactFindOptions();<br></td></tr
><tr
id=sl_svn174_145

><td class="source">    obj.filter = &quot;&quot;;<br></td></tr
><tr
id=sl_svn174_146

><td class="source">    obj.multiple = true;<br></td></tr
><tr
id=sl_svn174_147

><td class="source">    navigator.contacts.find(<br></td></tr
><tr
id=sl_svn174_148

><td class="source">            [ &quot;displayName&quot;, &quot;name&quot; ], contacts_success,<br></td></tr
><tr
id=sl_svn174_149

><td class="source">            fail, obj);<br></td></tr
><tr
id=sl_svn174_150

><td class="source">}<br></td></tr
><tr
id=sl_svn174_151

><td class="source"><br></td></tr
><tr
id=sl_svn174_152

><td class="source">var check_network = function() {<br></td></tr
><tr
id=sl_svn174_153

><td class="source">    var networkState = navigator.network.connection.type;<br></td></tr
><tr
id=sl_svn174_154

><td class="source"><br></td></tr
><tr
id=sl_svn174_155

><td class="source">    var states = {};<br></td></tr
><tr
id=sl_svn174_156

><td class="source">    states[Connection.UNKNOWN]  = &#39;Unknown connection&#39;;<br></td></tr
><tr
id=sl_svn174_157

><td class="source">    states[Connection.ETHERNET] = &#39;Ethernet connection&#39;;<br></td></tr
><tr
id=sl_svn174_158

><td class="source">    states[Connection.WIFI]     = &#39;WiFi connection&#39;;<br></td></tr
><tr
id=sl_svn174_159

><td class="source">    states[Connection.CELL_2G]  = &#39;Cell 2G connection&#39;;<br></td></tr
><tr
id=sl_svn174_160

><td class="source">    states[Connection.CELL_3G]  = &#39;Cell 3G connection&#39;;<br></td></tr
><tr
id=sl_svn174_161

><td class="source">    states[Connection.CELL_4G]  = &#39;Cell 4G connection&#39;;<br></td></tr
><tr
id=sl_svn174_162

><td class="source">    states[Connection.NONE]     = &#39;No network connection&#39;;<br></td></tr
><tr
id=sl_svn174_163

><td class="source">    <br></td></tr
><tr
id=sl_svn174_164

><td class="source">    document.getElementById(&quot;networktext&quot;).innerHTML = &quot;&lt;span&gt;Connection type:&lt;br/&gt;&quot;<br></td></tr
><tr
id=sl_svn174_165

><td class="source">        + states[networkState] + &quot;&lt;/span&gt;&quot;;<br></td></tr
><tr
id=sl_svn174_166

><td class="source">};<br></td></tr
><tr
id=sl_svn174_167

><td class="source"><br></td></tr
><tr
id=sl_svn174_168

><td class="source">var compassWatch = null;<br></td></tr
><tr
id=sl_svn174_169

><td class="source"><br></td></tr
><tr
id=sl_svn174_170

><td class="source">function updateHeading(h) {<br></td></tr
><tr
id=sl_svn174_171

><td class="source">    document.getElementById(&#39;h&#39;).innerHTML = h.magneticHeading;<br></td></tr
><tr
id=sl_svn174_172

><td class="source">}<br></td></tr
><tr
id=sl_svn174_173

><td class="source"><br></td></tr
><tr
id=sl_svn174_174

><td class="source">function toggleCompass() {<br></td></tr
><tr
id=sl_svn174_175

><td class="source">    if (compassWatch !== null) {<br></td></tr
><tr
id=sl_svn174_176

><td class="source">        navigator.compass.clearWatch(compassWatch);<br></td></tr
><tr
id=sl_svn174_177

><td class="source">        compassWatch = null;<br></td></tr
><tr
id=sl_svn174_178

><td class="source">        updateHeading({ magneticHeading : &quot;Off&quot;});<br></td></tr
><tr
id=sl_svn174_179

><td class="source">    } else {        <br></td></tr
><tr
id=sl_svn174_180

><td class="source">        var options = { frequency: 1000 };<br></td></tr
><tr
id=sl_svn174_181

><td class="source">        compassWatch = navigator.compass.watchHeading(updateHeading, function(e) {<br></td></tr
><tr
id=sl_svn174_182

><td class="source">            alert(&#39;Compass Error: &#39; + e.code);<br></td></tr
><tr
id=sl_svn174_183

><td class="source">        }, options);<br></td></tr
><tr
id=sl_svn174_184

><td class="source">    }<br></td></tr
><tr
id=sl_svn174_185

><td class="source">}<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn174_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn174_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&amp;r=151">r151</a>
 by paul.beusterien
 on Feb 7, 2012
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=151&amp;format=side&amp;path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old_path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old=132">Diff</a>
 </div>
 <pre>Moving 1.2.7 to main 1.2 branch -<a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=132">r132</a>:150</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=151&spec=svn174';
 var publish_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=151&spec=svn174#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/tags/r1.2');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.googlecode.jslint4java.eclipse.feature/feature.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse.feature/feature.xml?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.googlecode.jslint4java.eclipse/META-INF/MANIFEST.MF');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/META-INF/MANIFEST.MF?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/builder/JSLintBuilder.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/builder/JSLintBuilder.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/builder/JSLintProvider.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/builder/JSLintProvider.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/preferences/PreferencesInitializer.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/preferences/PreferencesInitializer.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/META-INF/MANIFEST.MF');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/META-INF/MANIFEST.MF?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/icons/mds.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/icons/mds.png?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/icons/mdspgicon26x26.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/icons/mdspgicon26x26.png?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/demo2/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/demo2/index.html?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-black.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-black.png?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-black.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-black.png?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.min.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.min.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.min.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.min.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/accelerometer.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/accelerometer.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/camera.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/camera.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/capture.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/capture.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/compass.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/compass.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/connection.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/connection.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/contacts.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/contacts.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/device.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/device.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/events.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/events.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/file.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/file.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/geolocation.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/geolocation.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/media.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/media.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/notification.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/notification.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/storage.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/storage.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.html?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/main.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/main.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/pgandjqm-style-override.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/pgandjqm-style-override.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/accelerometer.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/accelerometer.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/camera.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/camera.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/capture.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/capture.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/compass.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/compass.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/connection.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/connection.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/contacts.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/contacts.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/events.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/events.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/file.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/file.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/geolocation.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/geolocation.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/media.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/media.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/notification.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/notification.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/storage.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/storage.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.html?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/main.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/main.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/master.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/master.css?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/icons/mdspgicon.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/icons/mdspgicon.png?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/jar/phonegap.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/jar/phonegap.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/js/phonegap-1.3.0.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/js/phonegap-1.3.0.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/js/phonegap-1.4.1.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/js/phonegap-1.4.1.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/res/xml/phonegap.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/res/xml/phonegap.xml?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js?r\x3d151\x26spec\x3dsvn174');
 
 var selected_path = '/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js';
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/phonegapdemo-w-sencha.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/phonegapdemo-w-sencha.js?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectCreationPage.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectCreationPage.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectNewWizard.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectNewWizard.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/FileCopy.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/FileCopy.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/Messages.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/Messages.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageInfo.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageInfo.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageInitContents.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageInitContents.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageJqm.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageJqm.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PagePhonegapPathSet.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PagePhonegapPathSet.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageSencha.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageSencha.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/messages.properties');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/messages.properties?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/messages_ja.properties');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/messages_ja.properties?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.jqm.license/feature.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.jqm.license/feature.xml?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.phonegap.license/feature.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.phonegap.license/feature.xml?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.phonegapForAndroid/feature.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.phonegapForAndroid/feature.xml?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/artifacts.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/artifacts.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/content.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/content.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.googlecode.jslint4java.eclipse_1.0.0.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.googlecode.jslint4java.eclipse_1.0.0.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.googlecode.jslint4java.eclipse_1.0.1.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.googlecode.jslint4java.eclipse_1.0.1.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.mds.jqm.license_1.2.6.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.jqm.license_1.2.6.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.mds.jqm.license_1.2.7.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.jqm.license_1.2.7.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.mds.phonegap.license_1.2.6.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegap.license_1.2.6.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.mds.phonegap.license_1.2.7.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegap.license_1.2.7.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.mds.phonegapForAndroid_1.2.6.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegapForAndroid_1.2.6.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/com.mds.phonegapForAndroid_1.2.7.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegapForAndroid_1.2.7.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/org.eclipse.wst.jsdt.feature_1.2.4.v201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/org.eclipse.wst.jsdt.feature_1.2.4.v201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/features/org.eclipse.wst.jsdt.feature_1.2.4.v201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/org.eclipse.wst.jsdt.feature_1.2.4.v201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse.ui_1.0.0.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse.ui_1.0.0.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse.ui_1.0.0.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse.ui_1.0.0.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse_1.0.0.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse_1.0.0.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse_1.0.1.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse_1.0.1.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.googlecode.jslint4java_1.0.0.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java_1.0.0.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.googlecode.jslint4java_1.0.0.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java_1.0.0.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.mds.apg_1.2.6.201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.mds.apg_1.2.6.201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/com.mds.apg_1.2.7.201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.mds.apg_1.2.7.201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.core_1.1.5.v201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.core_1.1.5.v201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.core_1.1.5.v201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.core_1.1.5.v201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.ui_1.1.5.v201112201653.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.ui_1.1.5.v201112201653.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.ui_1.1.5.v201202061658.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.ui_1.1.5.v201202061658.jar?r\x3d151\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/download/site.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/site.xml?r\x3d151\x26spec\x3dsvn174');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2?r=151&amp;spec=svn174"
 
 >/tags/r1.2</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse.feature/feature.xml?r=151&amp;spec=svn174"
 
 >...java.eclipse.feature/feature.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/META-INF/MANIFEST.MF?r=151&amp;spec=svn174"
 
 >...ava.eclipse/META-INF/MANIFEST.MF</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/builder/JSLintBuilder.java?r=151&amp;spec=svn174"
 
 >...lipse/builder/JSLintBuilder.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/builder/JSLintProvider.java?r=151&amp;spec=svn174"
 
 >...ipse/builder/JSLintProvider.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.googlecode.jslint4java.eclipse/src/com/googlecode/jslint4java/eclipse/preferences/PreferencesInitializer.java?r=151&amp;spec=svn174"
 
 >...nces/PreferencesInitializer.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/META-INF/MANIFEST.MF?r=151&amp;spec=svn174"
 
 >...com.mds.apg/META-INF/MANIFEST.MF</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/icons/mds.png?r=151&amp;spec=svn174"
 
 >...s/r1.2/com.mds.apg/icons/mds.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/icons/mdspgicon26x26.png?r=151&amp;spec=svn174"
 
 >...mds.apg/icons/mdspgicon26x26.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/demo2/index.html?r=151&amp;spec=svn174"
 
 >...g/resources/jqm/demo2/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-black.png?r=151&amp;spec=svn174"
 
 >...mobile/images/icons-18-black.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-black.png?r=151&amp;spec=svn174"
 
 >...mobile/images/icons-36-black.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.css?r=151&amp;spec=svn174"
 
 >...y.mobile/jquery.mobile-1.0.1.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.js?r=151&amp;spec=svn174"
 
 >...ry.mobile/jquery.mobile-1.0.1.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.css?r=151&amp;spec=svn174"
 
 >...bile/jquery.mobile-1.0.1.min.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.js?r=151&amp;spec=svn174"
 
 >...obile/jquery.mobile-1.0.1.min.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.css?r=151&amp;spec=svn174"
 
 >...ery.mobile/jquery.mobile-1.0.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.js?r=151&amp;spec=svn174"
 
 >...uery.mobile/jquery.mobile-1.0.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.min.css?r=151&amp;spec=svn174"
 
 >...mobile/jquery.mobile-1.0.min.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.min.js?r=151&amp;spec=svn174"
 
 >....mobile/jquery.mobile-1.0.min.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis?r=151&amp;spec=svn174"
 
 >...sources/jqm/phonegapExample/apis</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/accelerometer.js?r=151&amp;spec=svn174"
 
 >...gapExample/apis/accelerometer.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/camera.js?r=151&amp;spec=svn174"
 
 >...m/phonegapExample/apis/camera.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/capture.js?r=151&amp;spec=svn174"
 
 >.../phonegapExample/apis/capture.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/compass.js?r=151&amp;spec=svn174"
 
 >.../phonegapExample/apis/compass.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/connection.js?r=151&amp;spec=svn174"
 
 >...onegapExample/apis/connection.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/contacts.js?r=151&amp;spec=svn174"
 
 >...phonegapExample/apis/contacts.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/device.js?r=151&amp;spec=svn174"
 
 >...m/phonegapExample/apis/device.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/events.js?r=151&amp;spec=svn174"
 
 >...m/phonegapExample/apis/events.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/file.js?r=151&amp;spec=svn174"
 
 >...jqm/phonegapExample/apis/file.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/geolocation.js?r=151&amp;spec=svn174"
 
 >...negapExample/apis/geolocation.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/media.js?r=151&amp;spec=svn174"
 
 >...qm/phonegapExample/apis/media.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/notification.js?r=151&amp;spec=svn174"
 
 >...egapExample/apis/notification.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/storage.js?r=151&amp;spec=svn174"
 
 >.../phonegapExample/apis/storage.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.css?r=151&amp;spec=svn174"
 
 >...es/jqm/phonegapExample/index.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.html?r=151&amp;spec=svn174"
 
 >...s/jqm/phonegapExample/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.js?r=151&amp;spec=svn174"
 
 >...ces/jqm/phonegapExample/index.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/main.js?r=151&amp;spec=svn174"
 
 >...rces/jqm/phonegapExample/main.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/pgandjqm-style-override.css?r=151&amp;spec=svn174"
 
 >...mple/pgandjqm-style-override.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis?r=151&amp;spec=svn174"
 
 >...g/resources/phonegap/Sample/apis</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/accelerometer.js?r=151&amp;spec=svn174"
 
 >...gap/Sample/apis/accelerometer.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/camera.js?r=151&amp;spec=svn174"
 
 >...s/phonegap/Sample/apis/camera.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/capture.js?r=151&amp;spec=svn174"
 
 >.../phonegap/Sample/apis/capture.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/compass.js?r=151&amp;spec=svn174"
 
 >.../phonegap/Sample/apis/compass.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/connection.js?r=151&amp;spec=svn174"
 
 >...onegap/Sample/apis/connection.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/contacts.js?r=151&amp;spec=svn174"
 
 >...phonegap/Sample/apis/contacts.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js?r=151&amp;spec=svn174"
 
 >...s/phonegap/Sample/apis/device.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/events.js?r=151&amp;spec=svn174"
 
 >...s/phonegap/Sample/apis/events.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/file.js?r=151&amp;spec=svn174"
 
 >...ces/phonegap/Sample/apis/file.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/geolocation.js?r=151&amp;spec=svn174"
 
 >...negap/Sample/apis/geolocation.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/media.js?r=151&amp;spec=svn174"
 
 >...es/phonegap/Sample/apis/media.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/notification.js?r=151&amp;spec=svn174"
 
 >...egap/Sample/apis/notification.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/storage.js?r=151&amp;spec=svn174"
 
 >.../phonegap/Sample/apis/storage.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.css?r=151&amp;spec=svn174"
 
 >...ources/phonegap/Sample/index.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.html?r=151&amp;spec=svn174"
 
 >...urces/phonegap/Sample/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/main.js?r=151&amp;spec=svn174"
 
 >...esources/phonegap/Sample/main.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/master.css?r=151&amp;spec=svn174"
 
 >...urces/phonegap/Sample/master.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/icons/mdspgicon.png?r=151&amp;spec=svn174"
 
 >...ces/phonegap/icons/mdspgicon.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/jar/phonegap.jar?r=151&amp;spec=svn174"
 
 >...ources/phonegap/jar/phonegap.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/js/phonegap-1.3.0.js?r=151&amp;spec=svn174"
 
 >...es/phonegap/js/phonegap-1.3.0.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/js/phonegap-1.4.1.js?r=151&amp;spec=svn174"
 
 >...es/phonegap/js/phonegap-1.4.1.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/res/xml/phonegap.xml?r=151&amp;spec=svn174"
 
 >...es/phonegap/res/xml/phonegap.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js?r=151&amp;spec=svn174"
 selected="selected"
 >...s/sencha/phonegapExample/main.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/phonegapdemo-w-sencha.js?r=151&amp;spec=svn174"
 
 >...Example/phonegapdemo-w-sencha.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectCreationPage.java?r=151&amp;spec=svn174"
 
 >...ndroidPgProjectCreationPage.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectNewWizard.java?r=151&amp;spec=svn174"
 
 >...s/AndroidPgProjectNewWizard.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/FileCopy.java?r=151&amp;spec=svn174"
 
 >...om/mds/apg/wizards/FileCopy.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/Messages.java?r=151&amp;spec=svn174"
 
 >...om/mds/apg/wizards/Messages.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageInfo.java?r=151&amp;spec=svn174"
 
 >...om/mds/apg/wizards/PageInfo.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageInitContents.java?r=151&amp;spec=svn174"
 
 >...pg/wizards/PageInitContents.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageJqm.java?r=151&amp;spec=svn174"
 
 >...com/mds/apg/wizards/PageJqm.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PagePhonegapPathSet.java?r=151&amp;spec=svn174"
 
 >...wizards/PagePhonegapPathSet.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PageSencha.java?r=151&amp;spec=svn174"
 
 >.../mds/apg/wizards/PageSencha.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java?r=151&amp;spec=svn174"
 
 >...rds/PhonegapProjectPopulate.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/messages.properties?r=151&amp;spec=svn174"
 
 >.../apg/wizards/messages.properties</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/messages_ja.properties?r=151&amp;spec=svn174"
 
 >...g/wizards/messages_ja.properties</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.jqm.license/feature.xml?r=151&amp;spec=svn174"
 
 >.../com.mds.jqm.license/feature.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.phonegap.license/feature.xml?r=151&amp;spec=svn174"
 
 >...mds.phonegap.license/feature.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.phonegapForAndroid/feature.xml?r=151&amp;spec=svn174"
 
 >...s.phonegapForAndroid/feature.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/artifacts.jar?r=151&amp;spec=svn174"
 
 >/tags/r1.2/download/artifacts.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/content.jar?r=151&amp;spec=svn174"
 
 >/tags/r1.2/download/content.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.googlecode.jslint4java.eclipse_1.0.0.201112201653.jar?r=151&amp;spec=svn174"
 
 >...a.eclipse_1.0.0.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.googlecode.jslint4java.eclipse_1.0.1.201202061658.jar?r=151&amp;spec=svn174"
 
 >...a.eclipse_1.0.1.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.jqm.license_1.2.6.201112201653.jar?r=151&amp;spec=svn174"
 
 >...m.license_1.2.6.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.jqm.license_1.2.7.201202061658.jar?r=151&amp;spec=svn174"
 
 >...m.license_1.2.7.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegap.license_1.2.6.201112201653.jar?r=151&amp;spec=svn174"
 
 >...p.license_1.2.6.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegap.license_1.2.7.201202061658.jar?r=151&amp;spec=svn174"
 
 >...p.license_1.2.7.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegapForAndroid_1.2.6.201112201653.jar?r=151&amp;spec=svn174"
 
 >...orAndroid_1.2.6.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/com.mds.phonegapForAndroid_1.2.7.201202061658.jar?r=151&amp;spec=svn174"
 
 >...orAndroid_1.2.7.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/org.eclipse.wst.jsdt.feature_1.2.4.v201112201653.jar?r=151&amp;spec=svn174"
 
 >....feature_1.2.4.v201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/features/org.eclipse.wst.jsdt.feature_1.2.4.v201202061658.jar?r=151&amp;spec=svn174"
 
 >....feature_1.2.4.v201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse.ui_1.0.0.201112201653.jar?r=151&amp;spec=svn174"
 
 >...clipse.ui_1.0.0.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse.ui_1.0.0.201202061658.jar?r=151&amp;spec=svn174"
 
 >...clipse.ui_1.0.0.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse_1.0.0.201112201653.jar?r=151&amp;spec=svn174"
 
 >...a.eclipse_1.0.0.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java.eclipse_1.0.1.201202061658.jar?r=151&amp;spec=svn174"
 
 >...a.eclipse_1.0.1.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java_1.0.0.201112201653.jar?r=151&amp;spec=svn174"
 
 >...lint4java_1.0.0.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.googlecode.jslint4java_1.0.0.201202061658.jar?r=151&amp;spec=svn174"
 
 >...lint4java_1.0.0.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.mds.apg_1.2.6.201112201653.jar?r=151&amp;spec=svn174"
 
 >...m.mds.apg_1.2.6.201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/com.mds.apg_1.2.7.201202061658.jar?r=151&amp;spec=svn174"
 
 >...m.mds.apg_1.2.7.201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.core_1.1.5.v201112201653.jar?r=151&amp;spec=svn174"
 
 >...sdt.core_1.1.5.v201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.core_1.1.5.v201202061658.jar?r=151&amp;spec=svn174"
 
 >...sdt.core_1.1.5.v201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.ui_1.1.5.v201112201653.jar?r=151&amp;spec=svn174"
 
 >....jsdt.ui_1.1.5.v201112201653.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/plugins/org.eclipse.wst.jsdt.ui_1.1.5.v201202061658.jar?r=151&amp;spec=svn174"
 
 >....jsdt.ui_1.1.5.v201202061658.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/download/site.xml?r=151&amp;spec=svn174"
 
 >/tags/r1.2/download/site.xml</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&r=132">r132</a>
 by paul.beusterien
 on Dec 20, 2011
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=132&amp;format=side&amp;path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old_path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old=123">Diff</a>
 <br>
 <pre class="ifOpened">Moving 1.2.6 to main 1.2 branch
-<a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=124">r124</a>:131</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&r=123">r123</a>
 by paul.beusterien
 on Nov 1, 2011
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=123&amp;format=side&amp;path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old_path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old=113">Diff</a>
 <br>
 <pre class="ifOpened">Moving 1.2.5 to main 1.2 branch
-<a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=113">r113</a>:122</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&r=113">r113</a>
 by paul.beusterien
 on Aug 19, 2011
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=113&amp;format=side&amp;path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old_path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&amp;old=94">Diff</a>
 <br>
 <pre class="ifOpened">Merged 1.2.4 changes to 1.2 branch
-<a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=97">r97</a>:112</pre>
 </div>
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list?path=/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js&start=151">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 5792 bytes,
 185 lines</div>
 
 <div><a href="//svn.codespot.com/a/eclipselabs.org/mobile-web-development-with-phonegap/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/15399544380024573679/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/15399544380024573679/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/15399544380024573679/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/15399544380024573679/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn174': '/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/main.js'}
 codereviews = CR_controller.setup(
 {"profileUrl": "/a/eclipselabs.org/u/104567085526109766759/", "token": "ABZ6GAcQaWRcTlND-CYCf14jLyns9WWBsQ:1453066209518", "projectHomeUrl": "/a/eclipselabs.org/p/mobile-web-development-with-phonegap", "loggedInUserEmail": "udhayaganesh@gmail.com", "projectName": "mobile-web-development-with-phonegap", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": "eclipselabs.org", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/15399544380024573679", "relativeBaseUrl": "/a/eclipselabs.org"}, '', 'svn174', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/15399544380024573679/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/15399544380024573679/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

