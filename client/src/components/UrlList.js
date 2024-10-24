import React, { useState, useEffect } from 'react';

const UrlList = (props) => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState('');

  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch(`${apiUrl}/url/`);
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

  const handleDelete = async (shortCode) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this URL?');

    if (confirmDelete) {
      try {
        const response = await fetch(`${apiUrl}/url/${shortCode}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete URL');
        }
        // Update the table by removing the deleted URL
        setUrls(urls.filter(url => url.shortCode !== shortCode));
      } catch (err) {
        setError('Error: ' + err.message);
      }
    }
  };

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
              <th>Actions</th>
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
                  <a href={`${apiUrl}/${url.shortCode}`} target="_blank" rel="noopener noreferrer">
                    {`${apiUrl}/${url.shortCode}`}
                  </a>
                </td>
                <td>
                  <a href={`${apiUrl}/${url.shortCode}`} target="_blank" rel="noopener noreferrer">
                    {url.shortCode}
                  </a>
                </td>
                <td>
                  <button onClick={() => handleDelete(url.shortCode)}>Delete</button>
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