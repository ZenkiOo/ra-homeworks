import style from './portfolio.module.css';
import PropTypes from 'prop-types';
const ProjectList = (props) => {
  const listItems = props.projects.map((item, idx) => {
    return (
      <li className={style['projects__item']} key={idx}>
        <span className={style['projects__item-desc']}>{item.category}</span>
        <img src={item.img} alt={item.category} />
      </li>
    );
  });
  return <ul className={style['projects__list']}>{listItems}</ul>;
};
ProjectList.propTypes = {
  projects: PropTypes.array,
};
export { ProjectList };
