import React from 'react'

 const PromptEvaluator = ({ feedback, rating }) => {
  return (
    <div>
    <h2>Prompt Feedback</h2>
    <p><strong>Rating:</strong> {rating}/10</p>
    <p><strong>Feedback:</strong> {feedback}</p>
  </div>

  )
}
export default PromptEvaluator