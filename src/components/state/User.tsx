import { useState } from 'react';

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // const [ user, setUser ] = useState<null | AuthUser>(null);


    // Type assertion
    const [ user, setUser ] = useState<AuthUser>({} as AuthUser);
    // we are essentially lying the the compiler here, telling it that
    // an empty object has type AuthUser
    // we can use this if we know that there will always be a value before it is rendered



    const handleLogin = () => {
        setUser({
            name: 'Abby',
            email: 'AbbysEmail@gmail.com'
        });

        console.log(user.name);
        console.log(user.email);
    };

    // const handleLogout = () => {
    //     setUser(null);
    // };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>Username is {user.name}</div>
            <div>Email is {user.email}</div>
        </div>
    )
}