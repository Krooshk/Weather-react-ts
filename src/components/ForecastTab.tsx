import React from "react";
import {ForecastElement} from './ForecastElement';


export function ForecastTab(props:{
    city:string;
    info:any;
}){


    let result:string | [];
    if (props.city) {
        const array:any = [0,1,2,3];
        result = array.map((item:any) =>{
            return <ForecastElement list={props.info}  key={item} id={item}/>
        })
    } else result='No data';

    return (
        <div className='forecastTab'>
            {result}
        </div>
    )
}