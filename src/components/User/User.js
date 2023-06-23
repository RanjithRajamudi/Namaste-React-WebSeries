import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(2);

    return (
        <div className='user-card'>
            <h1>FuncBased Count = {count}</h1>
            <h1>FuncBased Count2 = {count2}</h1>
            <h2>Name:Ranjith</h2>
            <h3>Location : bangalore</h3>
            <h4>COntact: @ranjith</h4>
            <h4>{props.name}</h4>
        </div>
    )
}

export default User;