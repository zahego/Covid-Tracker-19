
## COVID TRACER 19
[https://covid-19-tracker-19.netlify.app/](https://covid-19-tracker-19.netlify.app/)  
A small website that track the current covid information, including confirmed, recovered and death case, sortable by country.

## Motivation
~~I want to alleviate the pandemic situation by providing an informative site about the current sutuation~~ I saw a quick 1h tutorial about a covid tracker app on youtube and jump right into it.

## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.  


## Notable feature
- Single Page Application
- Continuosly self update
- Presentable UI and chart
- Responsive design
- React hook
- CSS module

## Prequesite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Netlify set up if you would like to continuous deploy and have an online hosting server  
check out Netlify instruction [here](https://www.netlify.com/)  
Or you use any other hostin site, including github page (the site is static anyway)

## Installing and Running
Clone the repo
```
$ git clone https://github.com/zahego/Covid-Tracker-19.git
```
Run Node command to create node_modules folder from the information in package.json, which hold all the necessary dependencies
```
$ npm install
```
Run Node command for local testing
```
$ npm start
```

## Deploying on Netlify
create a prouction build of the app
```
$ yarn build
```
install Netlify on your local repo
```
$ npm install netlify-cli -g
```
login to your Netlify account
```
$ netlify login
```
start the deploy process
```
$ netlify deploy
```
choose the option to Create and Config a new site
change the site name to your preference
set the deploy path to 
```
$ ./build
```


## What you can do
- ckeckout the global data
- search the data by country

## API reference
[Covid info API](https://covid19.mathdro.id/api)

## Technologies stack
[React](https://reactjs.org/) - framework
[Chartjs](https://www.chartjs.org/) - a js class to help draw charts
[Material UI](https://material-ui.com/) - for creating slick and modern UI
[classnames](https://www.npmjs.com/package/classnames) - joining classNmes together (like classList huh?)
[CountUp](https://www.npmjs.com/package/countup.js) - js class to create numerical counting up animations 
[axios](https://www.npmjs.com/package/axios) - fetch API


## Contributors
Minh Tran 


## License
This project is licensed under the MIT License

## Challenges and resolutions
- Encounter several issue related to bar and chart component since I have little experience 
- Some troubles with React Hook
- Time commitment (despite the tutorial is 1h30min, it took me 6h to finish it)

## Acknowlegement
JavaScript MAstery youtube channel and [this tutorial](https://www.youtube.com/watch?v=khJlrj3Y6Ls)
