
import React, { useState } from 'react';

function App() {
  const [scene, setScene] = useState('intro');
  const [index, setIndex] = useState(0);

  const scenes = {
    intro: [
      "It's 2014. You're Isis, a witty girl starting a new semester.",
      "The school halls buzz with rumors... and someone’s watching you.",
      "You meet James — he's rude to everyone but strangely sweet to you."
    ],
    hallway: [
      "James leans on your locker. 'Hey, want to skip class with me?'",
      "Do you trust him? Or do you feel like he's hiding something?"
    ]
  };

  const handleNext = () => {
    if (index < scenes[scene].length - 1) {
      setIndex(index + 1);
    } else {
      if (scene === 'intro') {
        setScene('hallway');
      } else {
        setScene('intro');
      }
      setIndex(0);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#1b1b1b', color: 'white', fontFamily: 'Arial', minHeight: '100vh' }}>
      <h1>Obsession</h1>
      <p>{scenes[scene][index]}</p>
      <button onClick={handleNext} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e22', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Next
      </button>
    </div>
  );
}

export default App;
