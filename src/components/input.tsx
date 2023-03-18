import Search from '../assets/search.svg';
import React from 'react'
export function Input(props:{
   value:string;
   handleChange:(value:string)=>void;
   handleSubmit:()=>void;

}){
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        props.handleChange(event.target.value)
    }

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        console.log(2)
        props.handleSubmit();
    }

    return (
        <div className='wrapper-input'>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label className="input" htmlFor="#">
                <input type="text" value={props.value} placeholder="Actobe" onChange={handleChange}/>
                <img src={Search} alt="search"/>
                </label>
            </form>
        </div>
    )
}