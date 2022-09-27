const List = (props) => {
  const listItems = props.items.map((item, idx) => {
    return (
      <li className='items__item' key={idx}>
        {item}
      </li>
    );
  });
  return <ul className='items__list'>{listItems}</ul>;
};
export { List };
