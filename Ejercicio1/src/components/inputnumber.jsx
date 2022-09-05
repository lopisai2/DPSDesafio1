import React,{useState} from 'react'

function Number (props){

return(

    <input id="number1"type="number" min={1} max={100000} step={1} 
    onChange={e => props.addCant(e.target.value, props.id)}/>
)
}

export default Number;