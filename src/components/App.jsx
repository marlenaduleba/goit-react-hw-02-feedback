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

//countTotalFeedback()

//countPositiveFeedbackPercentage()

  render() {
    return (
      <div>
        
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
       
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          </Section>
      </div>
    
    );
  }
}

export default App;
