import { useState } from "react";
import {BsSearch} from 'react-icons/bs'
import {RiDeleteBack2Fill}from 'react-icons/ri'
import People from "./People";

function TypeAhead({data}){
    const [filteredData,setFilteredData]=useState([]);
    const [personName,setPersonName]=useState('')

    const handleChange = (e)=>{
        setPersonName(e.target.value);
        const filteredDataVar = data.filter(person=> person.login.toLowerCase().includes(e.target.value))
        setFilteredData(filteredDataVar);
    }
    const resetData=()=>{
        setPersonName('');
        setFilteredData(data);
    }
    return(
        <div className="typeahead">
            <div className="input">
                <input 
                type='text'
                value={personName}
                onChange={handleChange}
                placeholder='Search by name'
                />
                <div className="icon">
                    {personName.length==0? <BsSearch /> : <RiDeleteBack2Fill onClick={resetData} style={{cursor:'pointer'}}/>}
                </div>
            </div>
            {personName.length ?<People data={filteredData}/>:''}
        </div>
        
    )
}

export default TypeAhead;