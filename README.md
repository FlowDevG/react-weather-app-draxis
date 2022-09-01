# Fancy Weather Application powered by OPENWEATHERMAP API

![Weather Application](weather-app-screenshot.jpg?raw=true "Live Weather Application")

### <a href="https://delightful-capybara-318b47.netlify.app">LIVE DEMO</a>

## Description

This is a ReactJS based weather application using the OpenWeatherMap Api. The application shows the current weather and it's details (City, Country, Feels Like, Humidity, Wind Speed, Pressure, Wind Degrees, LocalTime). Also shows the forcast weather (up to 7 days ahead) of the current day and a line chart which provides the max and mix temperature for the next 7 days. I've made this application into isolated React components with their own styles and structure for maintainance purposes. Data is fed directly from the API. This means that its data is fully acurrate acording the API.

## Installation Process!

### 1. Make sure you have what you need

To build this website, you will need to have Node >=16 downloaded and installed on your machine. If you don't already have it, you can get it <a href="https://nodejs.org/en/download/">HERE</a>

### 2. Build a Create-React-App

Next, you will build the initial application using a handy tool called Create-React-App by using the following command. `npx create-react-app .` in emty folder. This allows you to get up and running with a fresh React App. Go <a href="https://reactjs.org/docs/installation.html">HERE</a> to get started.
When the app building is finished run `cd yourappname` and run `npm start` to test it out.
Hit ctrl+c in the terminal when you want to stop the server that the above command starts.
For this project we will also need to install Luxon's Librady, Chart.JS and React Icons do this by running `npm i luxon@2.4.0` , `npm install --save`, `chart.js react-chartjs-2`, `npm install react-icons --save` in your terminal while inside your project folder. YOU MUST RUN THESE COMMANDS.

### 3. Download the template

Once you have a React app up and running by following the steps in the above link, download my code by hitting the green "clone or download" button above and hit download zip. The next step is to replace the files you downloaded with the files and folders of your newly built pp. If you run `npm start` now, you should see that your app renders the same as the one at the live demo link above.

### 6. Make any styling changes you would like

Feel free to make any changes in the style sheets, it's easy to customize

### 7. Enjoy

## Credits

##### Open Weather Map API

<a href="https://openweathermap.org/">OpenWeathermap.org</a>
