const Input = () => {
    return (
        <form className="calculator" action="#">
            <input type="number" placeholder="Dia"/>
            <input type="number" placeholder="Mês"/>
            <input type="number" placeholder="Ano" />
            <button>Calcular</button>
        </form>
    )
}

export default Input;