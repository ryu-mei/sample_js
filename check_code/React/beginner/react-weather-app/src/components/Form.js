import { useState } from "react";
"https://api.weatherapi.com/v1/current.json?key=efecb59d3a13430c9ed212345241803&q=London&aqi=no"

const Form = () => {
    const [city, setCity] = useState("");
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={ e => setCity(e.target.value)} />
            {city}
            <button>Get Weather</button>
        </form>
    )
}

export default Form;