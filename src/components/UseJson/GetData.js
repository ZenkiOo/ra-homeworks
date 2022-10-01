import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';

const GetData = () => {
  const [{ data, loading, error }] = useJsonFetch(
    'http://localhost:7070/data',
    []
  );
  return (
    <>
      <span>{loading ? 'Loading...' : data?.status}</span>
    </>
  );
};

export { GetData };
