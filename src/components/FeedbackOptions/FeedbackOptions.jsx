function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsKeys = [...Object.keys(options)];
  return (
    <div>
      {optionsKeys.map(key => (
        <button
          key={key}
          type="button"
          onClick={onLeaveFeedback}
          data-option={key}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
