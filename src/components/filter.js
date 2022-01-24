import PropTypes from 'prop-types';
import React, { useState } from 'react';

import * as stylesheet from './filter.module.css';

import { FormCheckbox } from 'shards-react';

const CATEGORIES = ['Art', 'Home Dec', 'Lifestyle', 'Print'];

const Filter = () => {
  const [filter, setFilter] = useState([]);

  function handleChange(e, tag) {
    if (filter.includes(tag)) {
      setFilter((prevValues) => prevValues.filter((v) => v !== tag));
    } else {
      setFilter((prevValues) => [...prevValues, tag]);
    }
  }
  return (
    <ul className={stylesheet.root}>
      {CATEGORIES.map((tag) => {
        return (
          <FormCheckbox
            key={tag}
            checked={filter.includes(tag)}
            onChange={(e) => handleChange(e, tag)}
          >
            {tag}
          </FormCheckbox>
        );
      })}
    </ul>
  );
};

export default Filter;
