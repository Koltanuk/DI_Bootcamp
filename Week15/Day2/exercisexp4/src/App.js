import React from 'react';

function App() {

  const sendPostRequest = async () => {
    const url = 'https://webhook.site/addca33a-be3d-4e90-91b5-be119cc067c4';


    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });

    
      const jsonResponse = await response.json();


      console.log('Response:', jsonResponse);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div className="App">
      <h1>Post JSON Data Example</h1>
      {/* Button that triggers the sendPostRequest function */}
      <button onClick={sendPostRequest}>Send POST Request</button>
    </div>
  );
}

export default App;
