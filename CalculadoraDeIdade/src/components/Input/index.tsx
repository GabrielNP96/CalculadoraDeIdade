import { useState } from "react";

const Input = () => {
    const [day,setDay] = useState("");
    const [mounth, setMounth] = useState("");
    const [year, setYear] = useState("");
    return (
        <form className="calculator" action="#">
            <input type="number" placeholder="Dia"/>
            <input type="number" placeholder="Mês"/>
            <input type="number" placeholder="Ano" />
            <button onClick={}>Calcular</button>
        </form>
    )
}

export default Input;