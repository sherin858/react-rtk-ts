import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useAppSelector,useAppDispatch } from "../../app/hooks";
function UserView() {
    const user=useAppSelector((state)=>state.user);
    const dispatch=useAppDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
    return ( 
        <div>
            <h2>List of Users</h2>
            {user.loading?<div>loading...</div>:null}
            {!user.loading&&user.error?<div>Error:{user.error}</div>:null}
            {!user.loading&&user.users.length?user.users.map((user)=>
                <div key={user.id}>{user.name}</div>
            ):null}
        </div>
     );
}

export default UserView;