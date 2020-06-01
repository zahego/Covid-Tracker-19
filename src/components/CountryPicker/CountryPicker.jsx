import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../API';
const CountryPicker=({handleCountryChange})=>{
    const [countriesData, setCountriesData]=useState([]);
    
    //useEffect(async()=>{}) doesnt exist
    //if no second argument, useEffect is going to run endlessly
    //if argument provide, only run when second argument change
    useEffect(()=>{
        const fetchAPIcountries=async()=>{
            //return of async function is a promise, not object or anything
            //dont forget the () at await
            setCountriesData(await fetchCountries());
        };
        
        fetchAPIcountries();
    },[setCountriesData]);
    return(
        <FormControl className={styles.formControl}> 
            <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countriesData.map((country, id)=><option value= {country.countryName} key={id}>{country.countryName}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;