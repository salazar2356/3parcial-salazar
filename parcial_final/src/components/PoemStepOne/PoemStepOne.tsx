import React, { useEffect, useState } from 'react';
import { fetchPoetryData } from '../../services/poetry';
import "./PoemStepOne.css"

export function PoemStepOne() {
  const [poems, setPoems] = useState<{ title: string; author: string; lines: string[] }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPoetryData();
        setPoems(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
      <div className='poem-container'>

    <h1>Poetry API</h1>
    <ul>
      {poems.map((poem, index) => (
        <li key={index}>
          <h2>{poem.title}</h2>
          <h3>by {poem.author}</h3>
          <pre>{poem.lines.slice(0, 3).join('\n')}...</pre>
        </li>
      ))}
    </ul>
  </div>
    
  );
}

export default PoemStepOne;