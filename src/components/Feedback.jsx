import React from 'react';
import Controls from './Controls/Controls';
import Statistica from 'components/Statistics/Statistics';
import css from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    visible: false,
  };

  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
      total: prevState.total + 1,
      visible: true,
    }));
  };

  getPositivePercentage = () => {
    const { good, total } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad, total, visible } = this.state;
    return (
      <div className={css.container}>
        <Controls
          clickGood={() => this.handleClick('good')}
          clickNeutral={() => this.handleClick('neutral')}
          clickBad={() => this.handleClick('bad')}
        />
        {visible && (
          <Statistica
            upGood={good}
            upNeutral={neutral}
            upBad={bad}
            upTotal={total}
            upInterest={this.getPositivePercentage()}
          />
        )}
      </div>
    );
  }
}

export default Feedback;
