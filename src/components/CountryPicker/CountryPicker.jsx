import React, { useState,useEffect } from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';

import { countries } from '../../api';

const CountryPicker = ({handleCountryChange}) =>{
  const[fetchCountries, setFetchCountries] = useState([]);

  useEffect(()=>{
      const fetchedCountries= async()=>{
          setFetchCountries(await countries());
        }
        fetchedCountries()
  },[setFetchCountries])

  console.log(fetchCountries);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}> 
                <option value="global">Global</option>
                { fetchCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;