import React from 'react';

const Weather =(props)=> {
        return (
            <div>
                {
                    props.temprature &&<p>temprature: {props.temprature}</p>
                }
                {
                    props.city &&<p>city: {props.city}</p>
                }
                {
                    props.country &&<p>country: {props.country}</p>
                }
                {
                    props.humidity &&<p>humidity: {props.humidity}</p>
                }
                {
                    props.description &&<p>description: {props.description}</p>
                }
                {
                    props.error &&<p>error: {props.error}</p>
                }
            </div>
        );
}
 
export default Weather;