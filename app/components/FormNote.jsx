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
    }
  },
  isValidNote(valid) {
    console.log("Note :", valid);
  },
  isValidEmail(valid) {
    console.log("Email :", valid);
  },
  onSubmitForm() {
    console.log(this.state);
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
