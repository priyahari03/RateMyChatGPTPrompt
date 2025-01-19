import React from 'react'
 const PromptInput = ({setPrompt}) => {
  return (
    <div><textarea
    rows="4"
    cols="50"
    placeholder="Enter your prompt..."
    onChange={(e) => setPrompt(e.target.value)}
  ></textarea>
  </div>
  );
};
export default PromptInput