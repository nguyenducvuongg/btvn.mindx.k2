import React, {useState, useEffect} from 'react';
import './B2.css'

const B2 = () => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setWordCount(text.split(' ').length);
        }, 500);
      
        return () => clearTimeout(timeout);
      }, [text]);
    return (
        <div>
            <textarea placeholder='enter text' onChange={(e) => setText(e.target.value)}></textarea>
            <p>Word(s): {wordCount}</p>
        </div>
    );
};

export default B2;