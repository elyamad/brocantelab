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
      style: 'success',
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
  componentDidUpdate() {
    // notify parent by changes
    this.props.isValid(this.isValid());
  },
  render() {
    return (
      <Input
        type="number"
        label="Note"
        defaultValue={this.state.defaultValue}
        placeholder="1 to 5, eg: 3"
        help={this.isValid() ? null : this.state.errorMsg}
        bsStyle={this.validationState()}
        ref="input"
        wrapperClassName="col-xs-10"
        labelClassName="col-xs-2"
        onChange={this.handleChange}
      />
    );
  }
});

module.exports = NoteInput;
