import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

countFeedback = property => {
  this.setState((prevState) => ({
    [property]: prevState[property] + 1 
  }))
};

countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
}

countPositiveFeedbackPercentage() {
  return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
}

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        
        <Section title="Please leave feedback">
          <FeedbackOptions
           options={Object.keys(this.state)}
           onLeaveFeedback={this.onLeaveFeedback}
            />
        </Section>
       
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
      </div>
    
    );
  }
}

export default App;
