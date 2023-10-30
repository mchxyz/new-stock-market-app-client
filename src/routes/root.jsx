import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { StockExchange } from "../components/StockExchange";

export const Root = () => {
    const { user, setToken } = useContext(AuthContext);

    const handleClickLogout = () => {
        setToken(undefined);
    };

    return (
        <div>
            <h1>Welcome to the best stock exchange.</h1>

            {user &&
                 <StockExchange />
            }
        </div>
    );
};