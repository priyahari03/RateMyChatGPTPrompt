import React, { useState } from 'react';
import './App.css';
import PromptInput from './components/PromptInput';
import PromptEvaluator from './components/PromptEvaluator';
import ExecutionOutput from './components/ExecutionOutput';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [executionResult, setExecutionResult] = useState('');

  const evaluatePrompt = (inputPrompt) => {
    let feedbackMessages = [];
    let promptRating = 0;

    if (inputPrompt.length < 10) {
      feedbackMessages.push('The prompt is too short. Add more details.');
    } else {
      promptRating += 3;
    }

    if (!inputPrompt.match(/\b(what|how)\b/i)) {
      feedbackMessages.push('Try starting with "What" or "How" for a clearer question.');
    } else {
      promptRating += 3;
    }

    if (!inputPrompt.includes('specific')) {
      feedbackMessages.push('Make sure to mention a specific topic or goal.');
    } else {
      promptRating += 4;
    }

    setFeedback(feedbackMessages.join(' '));
    setRating(promptRating);
  };

  const executePrompt = (inputPrompt) => {
    setExecutionResult(`Executing: ${inputPrompt}`);
  };

  return (
    <div className="App">
      <h1>Prompt Evaluator</h1>
      <PromptInput setPrompt={setPrompt} />
      <button onClick={() => evaluatePrompt(prompt)}>Evaluate Prompt</button>
      
      {feedback && <PromptEvaluator feedback={feedback} rating={rating} />}
      {rating >= 7 && (
        <button onClick={() => executePrompt(prompt)}>Execute Prompt</button>
      )}

      {executionResult && <ExecutionOutput result={executionResult} />}
    </div>
  );
};

export default App;
