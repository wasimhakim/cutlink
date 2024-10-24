import React, { useState } from 'react';

const UrlShortener = (props) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/url/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl }),
      });

      const data = await response.json()

      if (data?.code == 500) {
        throw new Error(data.message);
      }

      props.newUrlAdded(true)
    } catch (err) {
      setError('Error: ' + err.message);
    }
  };

  return (
    <div className="url-shortener-container">
      <h1>Shorten Your URL</h1>
      <form className="url-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter original URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UrlShortener;