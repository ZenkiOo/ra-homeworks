import { useState, useEffect } from 'react';

function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, statusText: '' });

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        setError({ status: true, statusText: response.statusText });
        setLoading(false);
        throw new Error('Something went wrong');
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [{ data, loading, error }];
}

export default useJsonFetch;
