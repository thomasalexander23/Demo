import { useReducer } from 'react';
const reducer = (state, action)=>{
    if(action.type === 10) return{name: state.name, age: state.age, Balance:state.Balance +10}
    if(action.type === 20) return{name: state.name, age: state.age, Balance:state.Balance +20}
    if(!action.type) return{name: state.name, age: state.age, Balance:0}
  }
  
export default function List(){
    const user ={name:"THOMAS", age: 27, Balance:0};
    const [state,dispatch]=useReducer(reducer,user);
    return(
        <div>
        <h1 style={{textAlign:"center", marginLeft:"-250px"}}>{state.name} <br />{state.age} <br /> {state.Balance}</h1>
        <button onClick={()=> dispatch({type: 10})}>10</button><br /> <br />
        <button onClick={()=> dispatch({type: 20})}>20</button><br /> <br />
        <button onClick={()=> dispatch({type: false})}>Reset</button> <br /><br />
        </div>
    )
}