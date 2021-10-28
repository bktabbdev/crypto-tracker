import { Input, Div } from './query-box.styles';
import { useState } from 'react';

const QueryBox = () => {
  const [val, setVal] = useState(null);

  const handleChange = () => {
    console.log(this);
  };

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
      />
    </Div>
  );
};

export default QueryBox;
