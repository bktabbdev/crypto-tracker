import React, { useState, useEffect } from 'react';
import { Input, Div } from './query-box.styles';
import { AiOutlineSortAscending } from 'react-icons/ai';
import styled from 'styled-components';

const IconSort = styled(AiOutlineSortAscending)`
  height: 50px;
  width: 50px;
`;

const QueryBox = () => {
  const [query, setQuery] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <Div className="query-container">
      <div className="query-item-one">
        <h2>
          Query <br /> For Data
        </h2>
        <Input
          type="text"
          name="query-input"
          className="query-input query-item"
          placeholder="Enter a crypto or ticker"
          maxLength="12"
          onChange={handleChange}
        />{' '}
      </div>
      <div className="query-item-two">
        <h2>Query: {query}</h2>
        <div className="sort-container">
          <IconSort className="sort-icon" />
        </div>
      </div>
    </Div>
  );
};

export default QueryBox;
