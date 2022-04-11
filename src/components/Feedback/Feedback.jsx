import Button from 'components/Button/Button';
import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick() {
    console.log('first');
  }
  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <div>
          <Button name="Good" onClick={this.onClick} />
          <Button name="Neutral" onClick={this.onClick} />
          <Button name="Bad" onClick={this.onClick} />
        </div>
        <Statistics />
      </section>
    );
  }
}

export default Feedback;
