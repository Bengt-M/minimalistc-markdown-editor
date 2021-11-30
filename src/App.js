import './App.css';
import Checkbox from './Components/Checkbox';
import Textarea from './Components/Textarea';
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function App() {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");

  const handleChange = () => {
    setEditMode(!editMode);
  }

  async function fetchText() {
    let response = await fetch('/text.md');
    let data = await response.text();
    setText(data);
  }

  useEffect(() => {
    fetchText();
  }, []);

  return (
    <div className="App">
      <Checkbox
        label="Edit Mode"
        value={editMode}
        onChange={handleChange}
      />
      {editMode
        ? <Textarea text={text} onChange={setText} readOnly={!editMode} />
        : <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
      }
    </div>
  )
}

export default App;
