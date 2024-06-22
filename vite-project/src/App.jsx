import { useState, useEffect } from 'react';
import './App.css';

const App=()=> {
  const [id, setId] = useState(1);
  const [body, setBody] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBody = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const data = await res.json();
      setBody(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBody(id);
  }, [id]);

  const RandomNumber = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setId(randomId);
  };

  return (
    <>
    <div  className="App">
      <button onClick={RandomNumber}>Click for Random Email</button>
      {loading ? (
        <p className='loader'>Loading...</p>
      ) : (
        <ul>
          {body.map(body => (
            <li key={body.id}>
              <strong>{body.email}</strong>: {body.body}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
}

export default App;


