import React from "react";
import Close from '../assets/close-svgrepo-com.svg'

export const CityContext = React.createContext(['defaultValue']);

export function FavoriteCities(props:{
    handleClickClose:(city:string)=>void;
    handleClickChoose:(city:string)=>void;

}){
    const value:string[] = React.useContext(CityContext);

    function handleClickChoose(event:any){
        props.handleClickChoose(event.target.innerHTML);
        // console.log('choose',event.target.innerHTML);
    }
    function handleClickClose(event:any ){
        console.log(event.target.previousSibling.innerHTML)
        props.handleClickClose(event.target.previousSibling.innerHTML);
    }

    return (
        <div className='favoriteCities'>
            <h3>Added locations:</h3>
            <hr/>
            <div>
                {value.map((item,index)=>{
                    return (<div className='favoriteCity' key={index}>
                        <div onClick={handleClickChoose} className='textCity'>{item}</div>
                        <img onClick={handleClickClose} className='closeIcon' src={Close}  />
                    </div>)
                })}
            </div>
        </div>
    )
}