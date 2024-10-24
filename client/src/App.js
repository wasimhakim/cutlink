import React, { useState } from 'react';
import UrlShortener from './components/UrlShortener';
import UrlList from './components/UrlList';

function App() {
  const[newUrlAdded, setNewUrlAdded] = useState(false)

  return (
    <div className="App">
      <UrlShortener newUrlAdded={setNewUrlAdded} />
      <hr />
      <UrlList newUrlAdded={newUrlAdded} setNewUrlAdded={setNewUrlAdded} />
    </div>
  );
}

export default App;