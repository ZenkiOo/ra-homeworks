import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DetailsCard } from './DetailsCard';

const Details = ({ id }) => {
  const [info, setInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const url =
    'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

  useEffect(() => {
    setLoading(() => true);
    axios.get(url + `${id}.json`).then((res) => {
      setInfo(() => res.data);
      setLoading(() => false);
    });
  }, [id]);

  return <>{isLoading ? 'Loading...' : <DetailsCard info={info} />}</>;
};

Details.propTypes = {
  id: PropTypes.number,
};
export { Details };
