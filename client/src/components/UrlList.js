import React, { useState, useEffect } from 'react';

const UrlList = (props) => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch('http://localhost:5000/url/');
        if (!response.ok) {
          throw new Error('Failed to fetch URLs');
        }
        const data = await response.json();
        setUrls(data);
        props.setNewUrlAdded(false)
      } catch (err) {
        setError('Error: ' + err.message);
      }
    };

    fetchUrls();
  }, [props.newUrlAdded]);

  return (
    <div className='url-list'>
      <h2>All Shortened URLs</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {urls.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Shortened Path</th>
              <th>Short Code</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, index) => (
              <tr key={index}>
                <td>
                  <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">
                    {url.originalUrl}
                  </a>
                </td>
                <td>
                  <a href={`http://localhost:5000/${url.shortCode}`} target="_blank" rel="noopener noreferrer">
                    {`http://localhost:5000/${url.shortCode}`}
                  </a>
                </td>
                <td>
                  <a href={`http://localhost:5000/${url.shortCode}`} target="_blank" rel="noopener noreferrer">
                    {url.shortCode}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No URLs found.</p>
      )}
    </div>
  );
};

export default UrlList;