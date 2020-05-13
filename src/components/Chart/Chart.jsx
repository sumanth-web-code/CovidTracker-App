import React, { useState,useEffect } from 'react';
import { Line,Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data, country}) =>{
   const[dailydata,setDailydata] = useState([]);

   useEffect(()=>{
        const fetchAPI = async() =>{
          setDailydata(await fetchDailyData());
        }

        console.log(dailydata);
        fetchAPI();
   },[]);

   const lineChart = (
       dailydata.length ?
        (<Line
           data ={{
             labels: dailydata.map(({date})=> date),
             datasets: [{
               data: dailydata.map(({ confirmed })=> confirmed),
               label:'Infected',
               borderColor: '#3333ff',
               backgroundColor:'rgba(0,0,255,0.5)',
               fill: true
             },{
               data: dailydata.map(({ deaths })=>deaths),
               label: 'Deaths',
               borderColor: 'red',
               backgroundColor:'rgba(255,0,0,0.5)',
               fill:true
             }]
           }}
       />):null
   );

   const barChart =(
     data.confirmed ?
     (<Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: ['blue', 'Green', 'Red'],
            data: [ data.confirmed.value, data. recovered.value, data.deaths.value]
          }]
        }}
        options={{
          legend:{ display: false},
          title: { display: true, text: `Current state in ${country}`}
        }}
     
     />
    ):null
    )

    return(
        <div className={styles.container}>
          { country ? barChart : lineChart }
        </div>
    )
}

export default Chart;