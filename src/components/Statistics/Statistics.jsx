

const Statistics = (props) => {
return (
    <ul>
    <li>Good:{props.good} </li>
    <li>Neutral: {props.neutral} </li>
    <li>Bad: {props.bad}</li>
    <li>Total: </li>
    <li>Positive feedback: </li>
  </ul>
)
};

export default Statistics;