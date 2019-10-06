---
layout: post
title:  "Personal Website"
date:   2019-10-02 10:51:47 +0530
technologies:  Jekyll, Markdown, Google Forms, Bootstrap, Github Pages, Javascript, Sass, HTML, VS Code
github: https://github.com/catai9/catai9.github.io
img: personal-website-project.JPG
--- 

Personal website to showcase project portfolio.

One of my first personal projects was creating a personal website. I have gone through two major iterations of my website and utilised various tools for each version. This article will be discussing the major changes and their respective reasons.

Link to [Github Code]({{page.github}}).

Technologies used include {{page.technologies}}. 

## Overview of Major Changes

#### 1. **[Website Foundation](#website-foundation)**
#### 2. **[Home Page](#home-page)**
#### 3. **[Contact Form](#contact-form)**
#### 4. **[Video Portfolio](#video-portfolio)**

## Details of Major Changes

<a name= "website-foundation"></a>

#### 1. Website Foundation
In the first version of the website, the code was built from the ground up and minimal Bootstrap was used to develop features. However, that introduced a lot of problems across browsers and it was time-consuming to add new pages. Then I discovered Jekyll and Markdown which made it easier to add new pages and customize website features. 

[Back to Top](#top)

<a name= "home-page"></a>

#### 2. Home Page
Initially, the home page consisted of a pyramid of key topics that I was interested in. When hovered, additional details about the topics were shown to the user. Although beneficial, it was soon analyzed that the most frequently visited page was the Projects tab. Thus, in the second iteration, that page became the home page.

<p float="center">
    Initial Home Page
    <img src="../images/personal-website/before-home.JPG"  />
</p>
<p float="center">
    Initial Project Page
    The initial project page where cards would flip when hovered to provide more information about the project.
    <img src="../images/personal-website/initial-project-page.png"  />
</p>

<p float="center">
Revised Project Page 
  The new version where key project information was displayed on the project card and users can click the card for more detailed information.
  <img src="../images/personal-website/revised-project-page.JPG"  />
</p>

[Back to Top](#top)

<a name= "contact-form"></a>

#### 3. Contact Form
In the first iteration of the website, the contact form would redirect users to an email application where the content of the email were prepopulated with the information that they had written on the form. However, showcasing my personal email in the files would expose it to email spam bots. Since my personal website is static to decrease loading time, I utilized Google Forms in my code for the contact form. By using Google Forms, I can quickly analyze the form responses and I get a notification when a form is submitted. 

<p float="center">
  Initial Contact Form
  <img src="../images/personal-website/initial-contact-form.JPG"  />
</p>

<p float="center">
  Contact Form with Google Forms
  <img src="../images/personal-website/revised-contact-form.JPG"  />
</p>

[Back to Top](#top)

<a name= "video-portfolio"></a>

#### 4. Video Portfolio
At first, I was planning to host a video portfolio on my website as videos are more engaging. However, after conducting research and user tests, it was soon discovered that factors such as loading time for the video outweigh the possible benefits of using a video. Thus, the video was removed and a simple About page was used instead. 

<p float="center">
  Using a Video
  <img src="../images/personal-website/video-intro.JPG"  />
</p>

<p float="center">
  Showing an About Page
  <img src="../images/personal-website/about-page.JPG"  />
</p>

[Back to Top](#top)