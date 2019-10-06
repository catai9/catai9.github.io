---
layout: post
title:  "Decision Support Tool"
date:   2019-08-20 10:51:47 +0530
technologies: Excel VBA
github: https://github.com/catai9/decision-support-tool
img: decision-support-tool/home.png
---

A decision support tool to assist teams with planning and executing projects. The tool functions as a medium for delegating and managing tasks. This project was completed in a team of six for MSCI 100: Management Engineering Concepts final project.

Link to [Code]({{page.github}}).
Technologies used include {{page.technologies}}. 

## Application Components

#### 1. **[Home](#home)**
#### 2. **[Problem Sheet](#problem-sheet)**
#### 3. **[Project Input](#project-input)**
#### 4. **[Resources Sheet](#resource-sheet)**
#### 5. **[Mentor Matching](#mentor-matching)**
#### 6. **[Assignment Table](#assignment-table)**

## Application Functionality Details

<a name= "home"></a>

#### 1. Home
The home provides an easy way to access specific pages of the tool and provides the current date to the user as a reminder of the time remaining for the project. The screen has specific sections for the project manager, team members, other shortcuts, and reports. 

<p float="center">
  <img src="../images/decision-support-tool/home.png"/>
</p>

[Back to Top](#top)

<a name= "problem-sheet"></a>

#### 2. Problem Sheet
This feature displays necessary information on tasks, deadlines, problem statuses, and assigned members. The group progress can be easily reviewed on this sheet as the tasks and their progress are clearly outlined.

<p float="center">
 <img src="../images/decision-support-tool/problem-sheet.png"/>
</p>

The "View Specific Sheet" button introduces a pop-up user form which provides the project manager with easy access to another sheet.

<p float="center">
 <img src="../images/decision-support-tool/problem-sheet-view-specific-sheet.png"/>
</p>

The "Update Problem Status" button brings up a form that allows the project manager to update each task with its status. Possible labels include 'Addressed', 'Ongoing', and 'Not Addressed'.

<p float="center">
 <img src="../images/decision-support-tool/problem-sheet-problem-status.png"/>
</p>

[Back to Top](#top)

<a name= "project-input"></a>

#### 3. Project Input
Only project managers have access to this page. The primary function is to guide users to input various tasks for the group project and outline the details of each task.

<p float="center">
 <img src="../images/decision-support-tool/project-input.png"/>
</p>

The "Project Phase and Task Input" button opens a user form to prompt the user to enter the number of team members, the number of weeks for the project, and the final project deadline.

<p float="center">
   <img src="../images/decision-support-tool/project-input-project-phase.png"/>
</p>

When the "Add New Task" button is pressed, a form opens with fields for the task, project phase, task descriptions, task competency needed, competency skill level, estimated task completion time, and the task deadline.

<p float="center">
  <img src="../images/decision-support-tool/project-input-add-task.png"/>
</p>

[Back to Top](#top)

<a name= "resource-sheet"></a>

#### 4. Resources Sheet
A table is shown on this sheet for the project manager to view team members, their competencies and their available times. This feature increases the effectiveness of project managers in monitoring all group members' availability and their ability to perform outlined project tasks.

<p float="center">
 <img src="../images/decision-support-tool/resource-sheet.png"/>
</p>

The "Add New User" button activates a pop-up user form that allows the project manager to add new member info and associated member information.

<p float="center">
  <img src="../images/decision-support-tool/resource-sheet-add-user.png"/>
</p>

The "Edit Resources" button allows members to revise their individual member information.

<p float="center">
  <img src="../images/decision-support-tool/resource-sheet-revise-user.png"/>
</p>

[Back to Top](#top)

<a name= "mentor-matching"></a>

#### 5. Mentor Matching
This feature matches group members who are considered mentors to group members who are considered mentees of a specific competency.

<p float="center">
  <img src="../images/decision-support-tool/mentor-matching.png"  />
</p>

[Back to Top](#top)

<a name= "assignment-table"></a>

#### 6. Assignment Table
This feature serves as a summary sheet for the project manager and the team members to track the progress, details, and status of each project task.

<p float="center">
  <img src="../images/decision-support-tool/assignment-table.png"  />
</p>

The "Task Update" button activates a form for team members to add and update project tasks for display on the summary sheet.

<p float="center">
  <img src="../images/decision-support-tool/assignment-table-status-update.png"  />
</p>

[Back to Top](#top)