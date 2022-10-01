import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';

const GetLoading = () => {
  const [{ data, loading, error }] = useJsonFetch(
    'http://localhost:7070/loading',
    []
  );

  return (
    <>
      <span>{loading ? 'Loading...' : data?.status}</span>
    </>
  );
};

export { GetLoading };
