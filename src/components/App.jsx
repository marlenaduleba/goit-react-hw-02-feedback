import { Component } from 'react';
import Feedback from './Feedback/Feedback';

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

  render() {
    return (
      <div>
        <Feedback
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default App;
