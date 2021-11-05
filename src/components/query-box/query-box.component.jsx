import React, { useState, useEffect } from 'react';
import { Input, Div, aToZ } from './query-box.styles';
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
      <h1>
        Query <br /> For Data
      </h1>
      <Input
        type="text"
        name="query-input"
        className="query-input"
        placeholder="Enter a crypto or ticker"
        onChange={handleChange}
      />{' '}
      <h2>Query: {query}</h2>
      <div className="sort-container">
        <IconSort />
      </div>
    </Div>
  );
};

export default QueryBox;
