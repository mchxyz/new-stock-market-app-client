// This is the part that renders all the stock and all the inputs for the amount. 

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

// for "context" please reference line 7 in the file. 

export const StockExchange = () => {
    const { user, getToken } = useContext(AuthContext);

    // Usestate is one of the most important parts. Basically it defines some state for the application. 
    // These are variables that React is keeping track of and whenever this variables get updated that would trigger the UI to be re-render. 

    const [ticker, setTicker] = useState("");
    const [amount, setAmount] = useState(1);
    const [stocks, setStocks] = useState([]);

    // Token: the 2 user routes that we have, get users and update stocks, both of them require a token in the request for them to work.
    // Here we calling the backend and actually providing the token. 

    useEffect(() => {
        const token = getToken();
        fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => response.json())
            .then(data => {
                setStocks(data.user.stocks);
            });
    }, []);

    const handleChangeTicker = (e) => setTicker(e.target.value.toUpperCase());

    const handleChangeAmount = (e) => setAmount(e.target.value);

// First, we get the token from out auth provider. Second, we make a request to our server and then the last part is where we'd update the stocks based on the response. 
// The response is going to update the user's profile which contains the stock and we should be able to see that on the front end. 


    const handleClickBuy = async (e) => {
        const token = getToken();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}/stocks`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ ticker, amount }),
        });

        const data = await response.json();
        // const newStocks = stocks.map(stock => stock.ticker === ticker ? data : stock);
        // console.log(newStocks);
        // setStocks(newStocks);
        setStocks(data.user.stocks);
    };

    // Line 62: We're going to be looping through every Stocks. | 

    return (
        <div>
            {user &&
              <h2>Hello {user.username}!</h2>          
            }
            <label>Ticker:&nbsp;</label>
            <input type="text" onChange={handleChangeTicker} value={ticker} />
            <input type="number" onChange={handleChangeAmount} value={amount} min={0} />
            <button onClick={handleClickBuy}>buy</button>
            {stocks.map((stock, idx) => (
                <div key={`stock-${idx}`} className="border m-1">
                    <div>{stock.ticker}</div>
                    <div>Quantity: {stock.amount}</div>
                    <div>Price: ${stock.price}</div>
                    <div>Total: ${stock.price * stock.amount}</div>
                </div>
            ))}
        </div>
    );
};
