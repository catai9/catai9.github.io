---
layout: post
title:  "Simple Karting Microgame"
date:   2020-12-26 10:51:47 +0530
technologies: Unity
img: simple-karting-game.png
---

Adaptation on the simple karting microgame on Unity.

Technologies used include {{page.technologies}}. 


## Demo

  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="{{site.baseurl}}/games/simple-karting/TemplateData/UnityProgress.js"></script>
    <script src="{{site.baseurl}}/games/simple-karting/Build/UnityLoader.js"></script>
    <script>
      var unityInstance = UnityLoader.instantiate("unityContainer", "{{site.baseurl}}/games/simple-karting/Build/simpleKarting.json", {onProgress: UnityProgress});
    </script>
  </head>
  <body>
    <div class="webgl-content">
      <div id="unityContainer" style="width: 700px; height: 600px"></div>
      <div class="footer">
        <div class="webgl-logo"></div>
        <div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
        <div class="title">Simple Karting Game</div>
      </div>
    </div>
  </body>