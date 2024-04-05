import './App.css';
import { StrictMode } from 'react';
import Form from './copmonents/Calculator';
import Top from './Top';
import { Route,Routes } from 'react-router-dom';
import Thomas from './Thomas';
import List from './Lists';

export default function App(){

  return(
    <StrictMode>
       <div>
        <h1 style={{textAlign:'center', margin:"20px auto"}}>Thomas alexander</h1>
       </div>
        <Top/>
        <Routes>
          <Route path='/' index/>
          <Route path='/Thomas' element={<Thomas />}/>
          <Route path='/Form' element={<Form />}/>
          <Route path='/Lists' element={<List />}/>
        </Routes>
   
    </StrictMode>
  )
}