import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { createUser, loginUser } from '../redux/reducers/auth';

class SignUp extends Component {
	constructor(props){
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			signUp: false
		}
		this.signUpSubmit = this.signUpSubmit.bind(this);
		this.loginSubmit = this.loginSubmit.bind(this);
  }

	signUpSubmit() {
		this.props.signUp({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		})
		// if statement here for error
		ModalManager.close()
	}

	loginSubmit() {
		this.props.login({
			email: this.state.email,
			password: this.state.password
		})
		// if statement here for error (401 etc)
		ModalManager.close()
	}

	render() {
    const { onRequestClose } = this.props;
		return (
      <div>
        <Modal
          onRequestClose={onRequestClose}
          effect={Effect.ScaleUp}>
					{
						(!this.state.signUp)
						? <div>
							<form
								className="form-group text-center"
								onSubmit={this.loginSubmit}>
								<h3>Login</h3>

								<input
									autoFocus="true"
									className="form-control"
									type="email"
									placeholder="Email"
									value={this.state.email}
									onChange={(evt) => this.setState({email: evt.target.value})}
								/>
								<input
									className="form-control"
									type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={(evt) => this.setState({password: evt.target.value})}
								/>

								<button
									className="btn btn-primary"
									type="submit">
									Login
								</button>
							</form>
							<div className="text-center">
								<a
									href="#"
									onClick={() => this.setState({signUp: true})}>
									Sign Up
								</a>
							</div>
						</div>
						: <div>
							<form
								className="form-group text-center"
								onSubmit={this.signUpSubmit}>
								<h3>Sign Up</h3>
								<div className="row">
									<input
										autoFocus="true"
										className="form-control"
										type="text"
										placeholder="First Name"
										value={this.state.firstName}
										onChange={(evt) => this.setState({firstName: evt.target.value})}
									/>
									<input
										className="form-control"
										type="text"
										placeholder="Last Name"
										value={this.state.lastName}
										onChange={(evt) => this.setState({lastName: evt.target.value})}
									/>
								</div>

								<div className="input-group mb-2 mr-sm-2 mb-sm-0">
									<div className="input-group-addon">@</div>
									<input
										className="form-control"
										type="email"
										placeholder="Email"
										value={this.state.email}
										onChange={(evt) => this.setState({email: evt.target.value})}
									/>
								</div>


								<input
									className="form-control"
									type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={(evt) => this.setState({password: evt.target.value})}
								/>
								<button
									href="#"
									className="btn btn-primary"
									type="submit">
									Sign Up!

								</button>
							</form>
							<div className="text-center">
								<a
									href="#"
									onClick={() => this.setState({signUp: false})}>
									Login
								</a>
							</div>
						</div>
					}
        </Modal>
      </div>
    )
  }
}

/* REDUX CONTAINER */

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
  signUp: (user) => dispatch(createUser(user)),
	login: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
