import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});


export const AuthContextProvider = (props) => {
    useEffect(() => {
        const storredLoginInfo = localStorage.getItem("isLoggedIn");
        if(storredLoginInfo === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", '0');
    };

    const loginHandler = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", '1');
    };

    return <AuthContext.Provider value ={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>
};
export default AuthContext;