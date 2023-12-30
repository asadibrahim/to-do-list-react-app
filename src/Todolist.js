import React, { useState } from "react";

function Todolist(props){
    const [ItemState,SetItemState]=useState(false);
    const [Active,SetActive]=useState(false);
    function CrossItem(){
        SetItemState(PreValue=>{
            return !PreValue;
        })
    }
    // return <div onClick={CrossItem} style={{textDecoration : ItemState ? "line-through" : "none"}}> 
    //     <li>{props.text}</li>
    //     </div>;
    return <div onClick={()=>{ props.onClicked(props.id)}} > 
    <li>{props.text}</li>
    </div>;
}

export default Todolist;