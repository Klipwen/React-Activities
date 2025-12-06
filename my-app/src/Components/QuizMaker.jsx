import { useState } from "react";

export default function QuizMaker({ onSaveQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(null);
  const [error, setError] = useState("");

  const resetForm = () => {
    setText("");
    setOptions(["", "", "", ""]);
    setCorrect(null);
    setError("");
  };

  const addQuestion = () => {
    if (!text.trim()) {
      setError("Enter a question.");
      return;
    }
    if (options.some((o) => !o.trim())) {
      setError("Fill all 4 options.");
      return;
    }
    if (correct === null) {
      setError("Select the correct option.");
      return;
    }
    const q = { text: text.trim(), options: options.map((o) => o.trim()), correct };
    setQuestions((prev) => [...prev, q]);
    resetForm();
  };

  const handleSave = () => {
    if (questions.length === 0) {
      setError("Add at least one question before saving.");
      return;
    }
    onSaveQuiz(questions);
  };

  const updateOption = (idx, value) => {
    setOptions((prev) => prev.map((o, i) => (i === idx ? value : o)));
  };

  return (
    <div className="panel">
      <style>{`
        .panel { max-width: 720px; margin: 0 auto; text-align: left; background: var(--surface); border-radius: 16px; padding: 1rem; box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light); }
        .text-input { width: 100%; padding: 0.5rem 0.75rem; border-radius: 12px; border: none; background: var(--surface); color: var(--text); box-shadow: inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light); }
        .option-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
        .radio { display: flex; align-items: center; gap: 0.35rem; }
        .btn { padding: 0.5rem 0.9rem; border-radius: 12px; border: none; background: var(--surface); color: var(--text); box-shadow: 6px 6px 12px var(--shadow-dark), -6px -6px 12px var(--shadow-light); }
        .btn.primary { background: var(--accent); color: #fff; box-shadow: 6px 6px 12px rgba(76,110,245,0.35), -6px -6px 12px rgba(255,255,255,0.7); }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .actions { display: flex; gap: 0.5rem; margin-top: 0.75rem; }
        .muted { color: var(--muted); }
        .small { color: var(--muted); font-size: 0.9rem; }
        .question-list { list-style: none; padding: 0; }
        .question-list li { margin: 0.5rem 0; }
      `}</style>
      <h2>Quiz Maker</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter question"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-input"
        />
      </div>

      <div className="options">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="option-row">
            <input
              type="text"
              placeholder={`Option ${i + 1}`}
              value={options[i]}
              onChange={(e) => updateOption(i, e.target.value)}
              className="text-input"
            />
            <label className="radio">
              <input
                type="radio"
                name="correct"
                checked={correct === i}
                onChange={() => setCorrect(i)}
              />
              Correct
            </label>
          </div>
        ))}
      </div>

      {error && <p className="error">{error}</p>}

      <div className="actions">
        <button className="btn" onClick={addQuestion}>Add Question</button>
        <button className="btn primary" onClick={handleSave}>Save Quiz</button>
      </div>

      <p className="muted">Questions added: {questions.length}</p>

      {questions.length > 0 && (
        <ul className="question-list">
          {questions.map((q, idx) => (
            <li key={idx}>
              <strong>{idx + 1}. {q.text}</strong>
              <div className="small">Correct: {String.fromCharCode(65 + q.correct)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
