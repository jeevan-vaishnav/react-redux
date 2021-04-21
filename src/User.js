import React from 'react';


const User = (porps)=>{

    const data = porps.data;

    return (
        <div>
            <h1>Name : {data.name}</h1>
            <h1>Age : {data.age}</h1>
        </div>
    );
};


export default User;