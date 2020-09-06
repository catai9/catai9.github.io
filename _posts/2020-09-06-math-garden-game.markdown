---
layout: post
title:  "Math Garden Game"
date:   2020-09-06 10:51:47 +0530
technologies: TensorFlow, Python 3, JavaScript, Pandas, Numpy, Scikit Learn
github: https://github.com/catai9/math-garden
img: math-garden-game.png
---

A fun way to practice adding two numbers together where users can write their answer on a black canvas to be verified against the correct answer.

The TensorFlow model for predicting the handwritten digits was trained in batches of 1000 with two hidden layers, 50 epochs and a learning rate of 0.001. The model's accuracy on the test set was 97.58%.

Link to [GitHub Code]({{page.github}}).

Link to [demo](https://amytai.ca/math-garden/).

Technologies used include {{page.technologies}}. 

## Game States

#### Empty State
At the start of the game, the user is shown an empty state where there are no plants in the background.

<p float="center">
    <img src="../images/math-garden-game/start-game.png"  />
</p>

#### Midgame State
Throughout the game, different coloured plants will appear in the background when questions are answered correctly.
Incorrect answers result in a gradual removal of plants from the background unless the background is already barren.

<p float="center">
    <img src="../images/math-garden-game/mid-game.png"  />
</p>

#### Winning State
After six consecutive wins, the background will be completely populated with plants and the user can restart the game. 

<p float="center">
    <img src="../images/math-garden-game/complete-game.png"  />
</p>