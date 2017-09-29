import React, { Component } from 'react';
import _ from 'lodash';

export class JeopardyDisplay extends Component {

  componentDidMount() {
    this.props.renderQuestion();
  }

  render() {

    console.log(this.props.question);

  //  let question = (this.props.question.question) ? this.props.question.question : "";

    

    return (
    <div>
      Question should be here
        {/* {this.question.question} */}
    </div>
    );
  }
}

export default JeopardyDisplay;