import React from 'react';
import ReactDOM from 'react-dom';

/* React bootstrap components */
import { Panel, Input, Button } from 'react-bootstrap';

/* Custom components */
import NoteInput from './NoteInput';
import EmailInput from './EmailInput';

var FormNote = React.createClass({
  getInitialState() {
    return {
      isValidNote: false,
      isValidEmail: false
    }
  },
  isValidNote(valid) {
    this.setState({isValidNote: valid});
  },
  isValidEmail(valid) {
    this.setState({isValidEmail: valid});
  },
  onSubmitForm() {
    console.log('Form is valid : ', this.state.isValidNote && this.state.isValidEmail);
  },
  render() {
    return (
      <Panel header="Evaluation">
        <form className="form-horizontal">
          <NoteInput isValid={this.isValidNote} />
          <EmailInput isValid={this.isValidEmail} />
          <Input type="textarea" label="Comment" placeholder="Put your comment"labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
          <Button bsStyle="primary" disabled={this.state.disabled} onClick={this.onSubmitForm} className="pull-right"> Send </Button>
        </form>

      </Panel>
    );
  }
});

ReactDOM.render(<FormNote/>, document.getElementById('app'));
