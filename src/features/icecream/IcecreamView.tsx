import { ordered,restocked } from "./icecreamSlice";
import { useAppSelector,useAppDispatch } from "../../app/hooks";
import { useState } from "react";
function IcecreamView() {
    const numOfIcecreams=useAppSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch=useAppDispatch();
    const [value,setValue]=useState(1);
    return ( 
        <div>
            <h2>Number of icecreams - {numOfIcecreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order icecream</button>
            <input type="text" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} />
            <button onClick={()=>dispatch(restocked(value))}>Restock icecream</button>
        </div>
    );
}

export default IcecreamView;