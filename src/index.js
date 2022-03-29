import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import TypeAhead from './components/Typeahead';
import './index.css';
import Loading from "./components/Loading";
function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading]=useState(true);
  
  const getData= async ()=>{
    setLoading(true);
    try{
        const url =await fetch('https://api.github.com/users');
        const res = await url.json();
        setLoading(false);
        setData(res);
    }catch(error){
        setLoading(false);
        console.log(error);
    }
    
    }
    useEffect(()=>{
        getData();
    },[])

  if(loading){
      return(
          <Loading/>
      )
  }
  return (
    <div className="container">
        <TypeAhead data={data}
        />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

