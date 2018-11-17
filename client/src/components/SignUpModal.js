import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

class SignUpModal extends Component {
  state = {
    modal: false,
    username: '',
    password: '',
    passwordConfirmation: '',
    errors: {}
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentWillReceiveProps(nextProps) {
      if(nextProps.errors) {
        this.setState({errors: nextProps.errors});
      }
  }

  onChange = e => {
      //console.log(e.target.value);
    this.setState({ 
        [e.target.name]: e.target.value 
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    // Add user with addUser action(from imported userActions)
    console.log(newUser);
    this.props.addUser(newUser);

    // Close modal with toggle function
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}>
          Sign Up
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign up for Grocery Guide!</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Username:</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  onChange={this.onChange}
                />
                <Label for="item">Password:</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={this.onChange}
                />
                <Label for="item">Confirm Password:</Label>
                <Input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Re-enter your password"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Sign Up
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

SignUpModal.propTypes = {
    //registerUser: PropTypes.func.isRequired,
    //auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addUser }
)(SignUpModal);