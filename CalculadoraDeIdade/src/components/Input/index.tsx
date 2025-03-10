import React, { useState } from "react";
import "./InputAge.css";

const Input = () => {
  const [day, setDay] = useState<number | "">("");
  const [month, setMonth] = useState<number | "">("");
  const [year, setYear] = useState<number | "">("");

  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = (event: React.FormEvent) => {
    event.preventDefault();

    if (!day || !month || !year) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setResult({ years: ageYears, months: ageMonths, days: ageDays });
  };

  return (
    <div>
      <form className="calculator" onSubmit={calculateAge}>
        <input
          type="number"
          placeholder="Dia"
          value={day}
          onChange={(e) => setDay(e.target.value ? Number(e.target.value) : "")}
        />
        <input
          type="number"
          placeholder="Mês"
          value={month}
          onChange={(e) => setMonth(e.target.value ? Number(e.target.value) : "")}
        />
        <input
          type="number"
          placeholder="Ano"
          value={year}
          onChange={(e) => setYear(e.target.value ? Number(e.target.value) : "")}
        />
        <button type="submit">Calcular</button>
      </form>

      {result && (
        <div>
          <h2>Idade:</h2>
          <p>{result.years} anos, {result.months} meses e {result.days} dias</p>
        </div>
      )}
    </div>
  );
};

export default Input;
