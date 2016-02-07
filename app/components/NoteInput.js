import React from 'react';
import { Input } from 'react-bootstrap';

var NoteInput = React.createClass({
  propsType: {
    isValid: React.PropTypes.fn
  },

  getInitialState() {
    return{
      defaultValue: 1,
      value: null,
      style: null,
      errorMsg: 'Note must be between 1 and 5'
    }
  },

  validationState() {
    return this.state.style
  },

  handleChange(e) {
    var value = e.target.value;
    var newStyle = (value < 1 || value > 5) ? 'error' : 'success';
    this.setState({style: newStyle, value: value});
  },
  isValid() {
      return (this.state.style === 'success');
  },

  componentWillMount(){
    this.props.isValid(this.isValid());
  },

  render() {
    return (
      <Input
        type="number"
        label="Note"
        defaultValue={this.state.defaultValue}
        placeholder="1 to 5, eg: 3"
        help={this.isValid() || this.state.style == null ? null : this.state.errorMsg}
        bsStyle={this.validationState()}
        ref="input"
        wrapperClassName="col-xs-10"
        labelClassName="col-xs-2"
        onChange={this.handleChange}
      />
    );
  },
  componentDidUpdate(prevProps, prevState) {
    // notify parent by changes
    if(this.state !== prevState){
      this.props.isValid(this.isValid());
    }
  }
});

module.exports = NoteInput;
