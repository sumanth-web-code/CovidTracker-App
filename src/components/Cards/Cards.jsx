import React from 'react';
import { Grid, Card, CardContent, Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import  styles from './Cards.module.css';


const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) =>{
    if(!confirmed){
        return 'Loading...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Infected)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">
                           <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                       <Typography variant="h5">
                          <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of Recovery Cases from COVID-19</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.Deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of Death caused by COVID-19</Typography>
                   </CardContent>
               </Grid>
            </Grid>
        </div>
    )
}

export default Cards;