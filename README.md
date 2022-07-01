<h1 align="center">CalorieCounter - online calculator of the daily calorie requirement.</h1>

<p align="left">
  <img src="https://img.shields.io/badge/made%20by-ivanel-orange.svg">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ivan-el/caloriecounter?color=orange">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/ivan-el/caloriecounter?color=orange">
</p>

<img src="img/main-preview.png" width="100%">

<h2>Description</h2>
<p>The calculator will help you calculate your daily calorie requirement online, as well as show recommendations on calorie intake for weight loss or weight gain.
To start the calculation, you must specify gender, weight, height, age and degree of activity.</p>

<h3>How does the calorie calculator work?</h3>

<p>The calculation of the calorie norm is based on the Mifflin-San Geor formula. The Mifflin — San-Geor formula looks like this:</p>
<p><b>For women:</b> (10 × weight in kilograms) + (6.25 × height in centimeters) − (5 × age in years) − 161</p>
<p><b>For men:</b> (10 × weight in kilograms) + (6.25 × height in centimeters) − (5 × age in years) + 5</p>
<p>Therefore, for a 25-year-old man with a height of 180 cm and a weight of 70 kg, the calculation of calories necessary for the functioning of the body at rest will be as follows:</p>
<p>(10 × 70) + (6,25 × 180) — (5 × 25) + 5 = 1705 kcal</p>
<p>The formula also takes into account physical activity, based on which a coefficient is added to the resulting figure.</p>

<ul>
  <li>If you have no physical activity and sedentary work, multiply the result by 1.2.</li>
  <li>If you take small runs or do light gymnastics 1-3 times a week, multiply by 1.375.</li>
  <li>If you exercise with average loads 3-5 times a week, multiply the number of calories by 1.55.</li>
  <li>If you fully train 6-7 times a week, then you need to multiply the result by 1,725.</li>
  <li>And finally, if your work is related to physical labor, you train 2 times a day and include strength exercises in the training program, your coefficient will be equal to 1.9.</li>
</ul>

<p>So, for a man with the above parameters, who runs several times a week in the morning, the number of calories will be equal to 1,705 × 1,375 = 2 344. However, if the same man trains 6-7 times a week, then her daily rate will be 1,705 × 1,725 = 2 941.</p>

<img src="img/calorie-preview.png" width="100%">

<h3>About the project.</h3>

<p>Calorie counter is a one-page application that works in a browser. The interface consists of a form with input fields and a block for output of the result. My implementation uses native browser APIs.</p>

<h3>Technologies.</h3>

<ul>
  <li>JavaScript ES6+</li>
  <li>Chrome DevTools</li>
</ul>

