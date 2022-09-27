import { useState } from 'react';

const Converter = () => {
  const [color, setColor] = useState('#34495e');

  const style = {
    converter: { padding: 70 + 'px', height: 100 + 'vh' },
    item: {
      marginBottom: 16 + 'px',
    },
  };

  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          row: `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`,
        }
      : null;
  };

  const onColorChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (value.length === 7) {
      if (hexToRgb(value) !== null) {
        setColor(() => value);
      } else {
        setColor(() => 'red');
      }
    }
  };

  return (
    <div
      className="converter"
      style={{ ...style.converter, background: color }}
    >
      <div className="converter__items">
        <div className="converter__item" style={style.item}>
          <input type="text" onChange={onColorChange} />
        </div>
        <div className="converter__item">
          <span>{color !== 'red' ? hexToRgb(color).row : 'Ошибка!'}</span>
        </div>
      </div>
    </div>
  );
};
export { Converter };
