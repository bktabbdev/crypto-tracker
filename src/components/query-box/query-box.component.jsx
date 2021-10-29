import { Input, Div } from './query-box.styles';

const QueryBox = () => {
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
