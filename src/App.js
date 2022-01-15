import { useState } from 'react';
import fromInputData from './FormData/data.js';

// convert object ot array
function objectToArr (obj){
  return Object.keys(obj).map(key => ({name: key, ...obj[key]}))
}



// convert agian array to object
const objectData = (obj) => {
 return Object.keys(obj).reduce((acc,cur) => {
    acc[cur] = {
      ...obj[cur],
      value: ''
    }
    return acc;
  }, {})
}


function App() {
  const [objDataList, setobjDataList] =  useState( objectData(fromInputData))
  const dataFrom = objectToArr(objDataList)


// Form Sumbmit
const handleSubmit = (e) => {
  e.preventDefault();
  const values = Object.keys(objDataList).reduce((acc,cur) => {
    acc[cur] = objDataList[cur].value;
    return acc;
  },{})
  console.log(values)
}


// setobjDataList defind
const handleChange = (e) => {
  setobjDataList({
    ...objDataList,
    [e.target.name]: {
      ...objDataList[e.target.name],
      value : e.target.value
    }
  })
}



  return (
    <div className="App">
      <h1>Dynamic From</h1>
      <form onSubmit={handleSubmit}>
      {dataFrom.map((item,index) => (
        <div className="form" key={index}>
        <label htmlFor={item.name}>{item.label}</label>
        <input 
          type={item.type}
          name ={item.name}
          placeholder={item.placeholder}
          value={item.value}
          onChange={handleChange}
      
        />
      </div>
      ))}
      <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;

