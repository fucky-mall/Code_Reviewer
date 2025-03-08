import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import DOMPurify from "dompurify";
import { marked } from 'marked';
import './App.css';
import axios from 'axios';

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, [review]);

  async function reviewCode() {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      const reviewText = response.data?.review;

      if (typeof reviewText === "string") {
        let formattedReview = marked.parse(reviewText);
        formattedReview = DOMPurify.sanitize(formattedReview);
        setReview(formattedReview);
      } else {
        setReview("Invalid review format received.");
      }
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Error fetching review. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <div 
          onClick={reviewCode} 
          className={`review ${isLoading ? 'disabled' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Reviewing...' : 'Review'}
        </div>
      </div>
      <div className="right">
        {isLoading ? (
          <div className="loading-screen">
            <div className="loader"></div>
            <p>Analyzing your code...</p>
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: review }} />
        )}
      </div>
    </main>
  );
}

export default App;