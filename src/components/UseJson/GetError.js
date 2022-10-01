import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';

const GetError = () => {
  const [{ data, loading, error }] = useJsonFetch(
    'http://localhost:7070/error',
    []
  );
  return (
    <>
      <span>{loading ? 'Loading...' : error.status ? error.statusText : null}</span>
    </>
  );
};

export { GetError };
