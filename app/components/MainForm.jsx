import React from 'react';
import ReactDOM from 'react-dom';

/* React bootstrap components */
import { Panel, Input, Button } from 'react-bootstrap';

/* Custom components */
import NoteInput from './NoteInput';
import EmailInput from './EmailInput';
import OnResult from './OnResult';

var MainForm = React.createClass({
  getInitialState() {
    return {
      isValidNote: false,
      isValidEmail: false,
      result: {
        visible: false,
        value: null,
        headerMsg: null,
        contentMsg: null
      }
    }
  },
  isValidNote(valid) {
    this.setState({isValidNote: valid});
  },
  isValidEmail(valid) {
    this.setState({isValidEmail: valid});
  },
  onSubmitForm() {
    var isFormValid = this.state.isValidNote && this.state.isValidEmail;
    if(isFormValid){
      var newState = {visible: true, value: 'success', headerMsg: 'Thank you !', contentMsg: 'Your note was sent successfully'};
      this.setState({result: newState});
    }
    else {
      var newState = {visible: true, value: 'danger', headerMsg: 'Error !', contentMsg: 'An error has occurred, please check your form data and try again.'};
      this.setState({result: newState});
    }
  },
  render() {
    return (
      <div>
        <OnResult
          visible={this.state.result.visible}
          result={this.state.result.value}
          headerMsg={this.state.result.headerMsg}
          contentMsg={this.state.result.contentMsg}
        />

        <Panel header="Evaluation">
          <form className="form-horizontal">
            <NoteInput isValid={this.isValidNote} />
            <EmailInput isValid={this.isValidEmail} />
            <Input type="textarea" label="Comment" placeholder="Put your comment"labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
            <Button bsStyle="primary" disabled={this.state.disabled} onClick={this.onSubmitForm} className="pull-right"> Send </Button>
          </form>
        </Panel>
      </div>
    );
  }
});

ReactDOM.render(<MainForm/>, document.getElementById('app'));
