import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
      <select name="сортировка"
              value={value}
              onChange={e => onChange(e.target.value)}
      >
        <option disabled value="value-title">{defaultValue}</option>
        {options.map(option =>
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        )}
      </select>
    );
  }
;

export default MySelect;
