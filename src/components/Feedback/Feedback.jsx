const Feedback = props => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
      </ul>
      <h2>Statistics</h2>
      <ul>
        <li>Good:{props.good} </li>
        <li>Neutral: {props.neutral} </li>
        <li>Bad: {props.bad}</li>
        <li>Total: </li>
        <li>Positive feedback: </li>
      </ul>
    </div>
  );
};

export default Feedback;
