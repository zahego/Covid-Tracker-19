import React from 'react';
//when you have index file, you don't have to specify index file on folder
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
//when you have index file, you don't have to specify index file on folder
import {fetchtData} from './API';
import headerImg from './images/image.png';
import {Typography} from  '@material-ui/core';;

class App extends React.Component{
    state={covidData:{},country:'',}
    //usually async put after function, but with life cycle method, put before
    async componentDidMount(){
        const response=await fetchtData();
        this.setState({covidData:response});
        
    }
    handleCountryChange=async(countryProps)=>{
        const countryData=await fetchtData(countryProps)
        console.log(countryData);
        this.setState({covidData:countryData, country:countryProps});
    }
    render(){
    return(
    <div className={styles.container}>
        <img className={styles.image} src={headerImg} alt='header'/>
        <Cards cardData={this.state.covidData}/>
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart dataChart={this.state.covidData} countryChart={this.state.country}/>
        <Typography color="textSecondary" variant="h6" gutterBottom style={{paddingTop:'10%'}}>Made by Zahego in 1 day lul</Typography>
        
    </div>)
}}
export default App;