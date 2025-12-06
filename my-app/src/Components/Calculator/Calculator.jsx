import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [liveResult, setLiveResult] = useState('');

  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

  const evaluateLeftToRight = (expr) => {
    const tokens = expr.match(/\d*\.?\d+|[\+\-\*\/]/g);
    if (!tokens || tokens.length === 0) return 0;
    let res = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      if (i + 1 >= tokens.length) break;
      const op = tokens[i];
      const operand = parseFloat(tokens[i + 1]);
      switch (op) {
        case '+': res += operand; break;
        case '-': res -= operand; break;
        case '*': res *= operand; break;
        case '/': res /= operand; break;
        default: break;
      }
    }
    return res;
  };

  const calculateLiveResult = (expr) => {
    if (expr === '' || isOperator(expr.slice(-1))) {
      setLiveResult('');
      return;
    }
    try {
      const lr = evaluateLeftToRight(expr);
      setLiveResult(lr.toString());
    } catch {
      setLiveResult('');
    }
  };

  const inputNumber = (num) => {
    const next = expression + num;
    setExpression(next);
    calculateLiveResult(next);
  };

  const inputDecimal = () => {
    let next = expression;
    if (next === '' || isOperator(next.slice(-1))) {
      next += '0.';
    } else {
      const parts = next.split(/[\+\-\*\/]/);
      const lastPart = parts[parts.length - 1];
      if (lastPart.indexOf('.') === -1) {
        next += '.';
      } else {
        const decimalIndex = lastPart.indexOf('.');
        const afterDecimal = lastPart.substring(decimalIndex + 1);
        if (afterDecimal === '') {
          const beforeLastPart = next.substring(0, next.length - lastPart.length);
          const newLastPart = lastPart.replace('.', '');
          next = beforeLastPart + newLastPart;
        }
      }
    }
    setExpression(next);
    calculateLiveResult(next);
  };

  const inputOperator = (op) => {
    let next = expression;
    if (next === '') {
      if (op === '-') next = '-';
    } else if (!isOperator(next.slice(-1))) {
      next += op;
    } else {
      next = next.slice(0, -1) + op;
    }
    setExpression(next);
    calculateLiveResult(next);
  };

  const calculate = () => {
    if (expression === '') return;
    try {
      const value = eval(expression);
      if (value === undefined || isNaN(value)) {
        alert('Invalid calculation');
        return;
      }
      if (!isFinite(value)) {
        alert('Cannot divide by zero!');
        return;
      }
      setLiveResult(value.toString());
    } catch {
      alert('Invalid calculation');
    }
  };

  const clearAll = () => {
    setExpression('');
    setLiveResult('');
  };

  const deleteLast = () => {
    const next = expression.slice(0, -1);
    setExpression(next);
    calculateLiveResult(next);
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="header">
          <h2>GEE CALIPH A. JUEN</h2>
          <h1>CALCULATOR</h1>
        </div>
        <div className="display-container">
          <input type="text" className="display" value={expression || '0'} readOnly />
          <input type="text" className="display" value={liveResult} readOnly />
        </div>
        <div className="buttons">
          <button className="operator-btn" onClick={() => inputOperator('+')}>+</button>
          <button className="operator-btn" onClick={() => inputOperator('-')}>−</button>
          <button className="operator-btn" onClick={() => inputOperator('*')}>×</button>
          <button className="operator-btn" onClick={() => inputOperator('/')}>÷</button>

          <button className="number-btn" onClick={() => inputNumber('7')}>7</button>
          <button className="number-btn" onClick={() => inputNumber('8')}>8</button>
          <button className="number-btn" onClick={() => inputNumber('9')}>9</button>
          <button className="delete-btn" onClick={deleteLast}>⌫</button>

          <button className="number-btn" onClick={() => inputNumber('4')}>4</button>
          <button className="number-btn" onClick={() => inputNumber('5')}>5</button>
          <button className="number-btn" onClick={() => inputNumber('6')}>6</button>
          <button className="clear-btn" onClick={clearAll}>AC</button>

          <button className="number-btn" onClick={() => inputNumber('1')}>1</button>
          <button className="number-btn" onClick={() => inputNumber('2')}>2</button>
          <button className="number-btn" onClick={() => inputNumber('3')}>3</button>
          <button className="equals-btn tall" onClick={calculate}>=</button>

          <button className="number-btn wide" onClick={() => inputNumber('0')}>0</button>
          <button className="decimal-btn" onClick={inputDecimal}>•</button>
        </div>
      </div>
    </div>
  );
}

