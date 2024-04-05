import '../App.css';
import { useState } from 'react';
export default function Form(){
    const [values,setvalues]=useState("");
    const [age,setAge]=useState("");
    const range = (e) => {
        setAge(e.target.value)
    }
     


    const valid = () => {
           return values.length >= 8 && age;
    };
     

     const handel = (e) => {
        e.preventDefault();
         alert("submited");
         setvalues("");
         setAge("")
     }

      
    return(
        <div style={{background:"red"}}>
            <form onSubmit={handel}> 
                <fieldset style={{background:"white",margin:" auto"}}>
                <div>
                <label>Form</label><br />
                <input type="text" placeholder="enter name" value={values} onChange={(e) => setvalues(e.target.value)}/> <br />
                <input type='range'  max={10} min={0} value={age} onChange={range} style={{padding:"0"}}/><br />
                <label>{age}: Star</label>
                <button type='submit' disabled={!valid()} >Submit</button>
                </div>
                    
                </fieldset>
            </form>
        </div>
    )
}