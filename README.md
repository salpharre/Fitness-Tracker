# Fitness-Tracker

![GitHub last commit](https://img.shields.io/github/last-commit/salpharre/Fitness-Tracker) ![npm version](https://badge.fury.io/js/inquirer.svg)

Fitness tracker uses mongodb, mongoose and chart.js to keep track of your workouts and the number of exercises (resistance or cardio) per workout.

## Table of Contents

* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technology](#technology)
* [Contributors](#contributors)
* [License](#license)
* [Launch](#launch)

### Demo

For [webpage](https://fitness-for-you-tracker.herokuapp.com/)

For [demo](https://youtu.be/JFVURvqv3Gg)

### Installation

Enter the following to install:
`npm install or npm i`

### Usage

In terminal:
1. `mongod`
2. `npm run seed`
3. `node server.js`

##### Home

If no workouts added, use: 

`Create Your First Workout` to start adding exercises.

If a workout exists, under 'Last Workout' card:

`Continue Workout` to add more exercises to currently showing workout.

`New Workout` to start a new workout, where you will be prompted to add an exercise.

To see charted stats of all workouts and exercises:

`Dashboard` in navbar.

##### Add Exercise or New Workout

Clicking on `Continue Workout` or `New Workout` will redirect you to the exercise page to add an exercise. From the dropdown menu, choose one of two exercise types, `Resistance` or `Cardio`.

Choosing either will dynamically create different input options. Fill out all inputs.

If you have no more exercises to add, click `Complete`. If you have more exercises to add, click `Add Exercise`.

##### Stats Dashboard

Stats dashboard can only be reached via the home page. In the navbar, click on `Dashboard` to be redirected.

In the stats html, you will be shown the last seven workouts and accompanying four charts, a line chart, bar graph, pie and donut chart.

Hovering over the points, slices or bars will display accompanying data.

### Technology

* VS Code v1.47.3
* Express
* MongoDB
* Mongoose
* Morgan
* path
* chart.js
* Semantic.ui
* shields.io

### Contributors

* Sandra Arredondo

### License

Public and free-to-use

### Launch

Original launch date: `August 5th, 2020`


 