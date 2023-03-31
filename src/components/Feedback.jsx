// import PropTypes from "prop-types"
import React from 'react';
import Controls from './Controls/Controls';
import Statistica from 'components/Statistica/Statistica';
import css from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    visible: false,
  };

  onGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
        visible: true,
      };
    });
  };
  onNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
        visible: true,
      };
    });
  };
  onBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1,
        visible: true,
      };
    });
  };
  getPositivePercentage = () => {
    const { good, total } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <Controls
          clickGood={this.onGood}
          clickNeutral={this.onNeutral}
          clickBad={this.onBad}
        />
        {this.state.visible && (
          <Statistica
            upGood={this.state.good}
            upNeutral={this.state.neutral}
            upBad={this.state.bad}
            upTotal={this.state.total}
            upInterest={this.getPositivePercentage()}
          />
        )}
      </div>
    );
  }
}

export default Feedback;
