import React from "react";
import Button from '../Button/Button';
import Statistic from "../Statistic/Statistic";
import Section from '../Section/Section';
import Notification from '../Notification/Notification';


class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };
      handleClick = button => {
		this.setState({ [button]: this.state[button] + 1 });}

    countTotalFeedback = () => {
        const {good, neutral , bad} = this.state;
        return(good + neutral + bad);
    }
    countPositiveFeedbackPercentage = () => {
        const {good} = this.state;
        if (!good) {
            return 0;
        
        } 
        return((good*100) / this.countTotalFeedback()).toFixed(0);
    }
      render() {
          const {good, neutral ,bad}= this.state;
        return (
         <section>
             
           <Section  title= "Please Leave Feedback">
                <Button
                   options = {['good', 'neutral', 'bad']}
                   onClickHandel = {this.handleClick}
                />
             </Section>
             {this.countTotalFeedback() === 0 ? (
					<Notification message="No feedback given" />
				) : (

                <Section  title = "Section">
                  <Statistic 
                     option={{good, neutral, bad}}
                     total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}       
                    /> 
                </Section>
                )}
         </section>
     )
 }
};


export default Feedback;