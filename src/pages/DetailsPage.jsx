import axios from 'axios';
import style from '../components/Details/details.module.css';
import { List } from '../components/Details/List';
import { Details } from '../components/Details/Details';
import { useEffect, useState } from 'react';

const DetailsPage = () => {
  const url =
    'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
  const [list, setList] = useState([]);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => setList(() => res.data));
  }, []);

  const onActivate = (res) => {
    setInfo(() => res);
  };

  return (
    <div className={style.details_page}>
      <List list={list} onActivate={onActivate} />
      {info ? <Details id={info.id} /> : null}
    </div>
  );
};

export { DetailsPage };
