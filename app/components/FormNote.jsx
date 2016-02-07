import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonInput, Input } from 'react-bootstrap';

var FormNote = React.createClass({
  getInitialState(){
    return {
      clicked : false
    }
  },
  handleClick(){
    this.setState({clicked: !this.state.clicked});
  },
  render() {
    return (
      <form>
        <Input type="text" bsStyle="success" label="Success" hasFeedback />
        <Input type="text" bsStyle="warning" label="Warning" hasFeedback />
        <Input type="text" bsStyle="error" label="Error" hasFeedback />
      </form>
    );
  }
});

ReactDOM.render(<FormNote/>, document.getElementById('app'));
