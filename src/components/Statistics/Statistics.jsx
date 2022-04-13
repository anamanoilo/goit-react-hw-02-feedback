const Statistics = ({ statistics }) => {
  return (
    <ul>
      {statistics.map(arr => (
        <li key={arr[0]}>
          <span>{arr[0]}</span>: {arr[1]}
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
