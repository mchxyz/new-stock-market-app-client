import { createContext, useState } from "react";

export const AuthContext = createContext({ user: undefined });

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("token") || undefined;
    const payload = token && parseJwt(token);

    const [user, setUser] = useState(payload && { username: payload.username, id: payload.id });

    const setToken = (token) => {
        if (!token) {
            localStorage.removeItem("token");
            setUser(undefined);
        }
        else {
            localStorage.setItem("token", token);
            const payload = token && parseJwt(token);
            console.log(payload)
            setUser(payload && { username: payload.username, id: payload.id });
        }
    };

    const getToken = () => localStorage.getItem("token") || undefined;

    // the children will be able to access the object that we see on line 29, from anywhere in the code. 
    // This contains information about our token, about the user that logged in. The user will be able to have "context" about the user that logged in. 
    return (
        <AuthContext.Provider value={{ user, setToken, getToken }}>
            {children}
        </AuthContext.Provider>
    );
};

//Stackoverflow >>>

// function on stackoverflow that parses the jwt file manually. Copied from stackoverflow. 

// The middle part of the following code contains the payload. | Payload: the payload is the middle part. reference: https://jwt.io/ to remember. 
// Lines 41 and 42 basically decode the payload. 
// Here we find the payload in the middle and we decoded it. 

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

