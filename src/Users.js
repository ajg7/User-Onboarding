import React from "react";



function Users(props) {

    const { users } = props;

    return users.map(user => {
        return (
        <>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.position}</p>
        </>
        )
    })
}

export default Users;