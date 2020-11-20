
import './App.css';
import React, {useState} from 'react';





function App() {
  const [value, setvalue] = useState("")
  const [result, setresult] = useState([])
  const fetchImages=()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=3JojCedYjv8R4GhZj5P9BpcwU19wS6i_Rfp2dv-yV3Q&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      if(!data.errors)
      {
      setresult(data.results);
      }
      else{
        setresult([]);
      }
    })
  
  
  
  }
 
  return (
    <div className="App">
     
        <div className="myapp">
          
          <span>Search
            </span>
            <input className="my-input" type="text"  placeholder ="search here" value={value} onChange= {(e)=>setvalue(e.target.value)} />
            <button onClick={fetchImages}>Send</button>
       
        </div>
       <div className="gallery">
         <div className="container">
       
           
       {
         result.map((item)=>(
           
           <img className="item" key={item.id} src={item.urls.regular} />             
         )
          )
       }
       
      
       </div>
       </div>
       

    </div>
  );
}

export default App;
