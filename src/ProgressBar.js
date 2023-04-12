const ProgressBar = ({ percent }) => {
  const outerDiv = {
    height: 20,
    width: "50%",
    backgroundColor: "lightGrey",
    border: "1px solid black",
    borderRadius: 10
  };

  const innerDiv = {
    height: "inherit",
    width: `${percent}%`,
    backgroundColor: "red",
    border: "1px solid black",
    borderRadius: "inherit",
    transition: "2s width ease-in-out"
  };
  return (
    <div style={outerDiv}>
      <div style={innerDiv}>
        <span>{percent}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
