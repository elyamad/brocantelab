import React from 'react';
import { Input } from 'react-bootstrap';

var EmailInput = React.createClass({
  propsType: {
    isValid: React.PropTypes.fn
  },

  getInitialState() {
    return{
      defaultValue: null,
      value: null,
      style: null,
      errorMsg: 'Email address is not valid'
    }
  },
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  validationState() {
    return this.state.style
  },

  handleChange(e) {
    var value = e.target.value;
    var newStyle = this.validateEmail(value) ? 'success' : 'error';
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
        type="text"
        label="Email"
        defaultValue={this.state.defaultValue}
        placeholder="Type your address email"
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

module.exports = EmailInput;
