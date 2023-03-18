import {useCallback, useEffect, useState} from 'react'
import React from 'react'
import './App.css'
import {Input} from './components/input.jsx';
import {CityContext, FavoriteCities} from './components/favoriteCities.jsx'
import {Info} from './components/info.jsx'
import {getInfo} from "./getInfo";
import {getInfoForecast} from "./getInfoForecast";



function App() {

    const [tab,setTab]=useState<"Now"|"Details"|"Forecast">('Now');
    const [currentCity,setCurrentCity]=useState<string>(localStorage.getItem("currentCity") || '');
    const [searchCity,setSearchCity]=useState<string>("");
    const [info,setInfo]=useState<any>(null);
    const [infoForecast,setInfoForecast]=useState<any>(null);
    const [favoriteCities,setFavoriteCities]=useState<string[]>(['Tambow','Kirov','Vladimir']);
    const isLike:Boolean=favoriteCities.includes(currentCity);


    function changeTab(value:"Now"|"Details"|"Forecast"){
        setTab(value);
    }

    function handleChangeSearchCity(value:string){
        setSearchCity(value);
    }

    function handleClickClose(city:string){
        setFavoriteCities([...(favoriteCities.filter(item=>item!==city))]);
    }

    function handleClickChoose(city:string){
            setSearchCity(city);
            handleSubmit(city);

    }

    function handleClick(){

        if ((!isLike) && currentCity){
            setFavoriteCities([...favoriteCities,currentCity]);
        }   else {
            setFavoriteCities([...(favoriteCities.filter(item=>item!==currentCity))]);
        }
    }

    function handleSubmit(city?:string){
        getInfo(city||searchCity)
            .then((result) => {
                setInfo(result);
                setCurrentCity(city||searchCity);
            })
            .catch(err => {
                alert(err);
            });

        getInfoForecast(city||searchCity)
            .then((response) => response.json())
            .then((result) => {
                setInfoForecast(result.list);
            })
            .catch(err => {
                alert(err);
            });
    }


  return (
    <div className='App'>
        <Input value={searchCity} handleSubmit={handleSubmit} handleChange={handleChangeSearchCity}/>
        <Info promiseInfo={info} isLike={isLike} promiseInfoForecast={infoForecast}  city={currentCity} handleClick={handleClick} handleTab={changeTab} tabs={tab}/>
        <CityContext.Provider value={favoriteCities}>
        <FavoriteCities handleClickChoose={handleClickChoose} handleClickClose={handleClickClose} />
        </CityContext.Provider>

    </div>
  )
}

export default App
