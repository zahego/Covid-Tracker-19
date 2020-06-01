import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';
const urlDaily=url.concat('/daily');
const urlCountries=url.concat('/countries');
export const fetchtData=async(countries)=>{
    let newUrl=url;
    if(countries){
        newUrl=urlCountries.concat('/'+countries);
    }

    try{
        //props must name data to work(even props doesnt work). possibly a await or get() thing
        const {data:{confirmed,recovered,deaths,lastUpdate,}}=await axios.get(newUrl);
        const modifiedresponse={
            //if key and value have the same name, could just left 1 value and it will still register
            //shorter code
            confirmed, recovered,deaths,lastUpdate,
        }
        return modifiedresponse;
    }catch(e){
        console.log(e);
    }
}
export const fetchtDataDaily=async()=>{
    try{
        //props must name data to work(even props doesnt work). possibly a await or get() thing
        const{data}=await axios.get(urlDaily);
        const modifiedResponseDaily=data.map((datum)=>({
            confirmed:datum.confirmed.total,
            deaths:datum.deaths.total,
            reportDate:datum.reportDate,
        }));
        return modifiedResponseDaily;
    }catch(e){
        console.log(e);
    }
}

export const fetchCountries = async ()=>{
    try { 
        const data=await axios.get(urlCountries);
        const modifiedresponse=data.data.countries.map((datum)=>({countryName:datum.name}))
        return modifiedresponse;
    } catch(e){
        console.log(e);
    }
}