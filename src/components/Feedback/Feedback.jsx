import React from "react";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    total = 0;
    positivePercentage = null;

    addGoodFeedback = () => {
        this.setState(state => ({
            good: this.state.good + 1,
        }));
    };

    addNeutralFeedback = () => {
        this.setState(state => ({
            neutral: this.state.neutral + 1,
        }))
    };

    addBadFeedback = () => {
        this.setState(state => ({
           bad: this.state.bad + 1,
        }))
    };

    countTotalFeedback() {
        const { good, neutral, bad} = this.state;
        this.total = good + neutral + bad;
    };

    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const { total } = this;
        this.positivePercentage = parseInt((good / total) * 100);
    };

    render() {
        this.countTotalFeedback();
        this. countPositiveFeedbackPercentage();
        return (
         <div>
            <h1>Please leave feedback</h1>
            <button onClick={this.addGoodFeedback}>Good</button>
            <button onClick={this.addNeutralFeedback}>Neutral</button>
            <button onClick={this.addBadFeedback}>Bad</button>
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: { this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.total}</p>
            <p>Positive feedback: {this.positivePercentage} %</p>
          </div>
        )
    }
}

export default Feedback;