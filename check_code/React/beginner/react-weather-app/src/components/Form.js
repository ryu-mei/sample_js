import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [city, setCity] = useState("");
    const getWether = (e) => {
        e.preventDefault();
        axios.get("https://api.weatherapi.com/v1/current.json?key=efecb59d3a13430c9ed212345241803&q=London&aqi=no")
        .then(res => console.log(res));
    };
    
    return (
        <form>
        <input type="text" name="city" placeholder="都市名" onChange={ e => setCity(e.target.value)} />
            {city}
            <button type="submit" onClick={getWether}>Get Weather</button>
        </form>
    )
}

export default Form;