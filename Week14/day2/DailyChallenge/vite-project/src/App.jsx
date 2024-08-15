import { useState } from 'react'


function App() {

  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Vote for your favorite programming language</h1>
      {languages.map((language, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <h2>{language.name}</h2>
          <button onClick={() => handleVote(index)}>Vote</button>
          <p>Votes: {language.votes}</p>
        </div>
      ))}
    </div>
  );
}

export default App
