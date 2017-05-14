import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ModalManager } from 'react-dynamic-modal';
import { logoutUser } from '../redux/reducers/auth';
import store from '../store.jsx'
import SignUp from './SignUp.jsx';

class Navbar extends Component {
	constructor(props){
		super(props)
    this.openModal = this.openModal.bind(this);
		this.logoutSubmit = this.logoutSubmit.bind(this);
	}

  openModal() {
    ModalManager.open(
      <SignUp
				onRequestClose={() => true}
				store={store}
			/>
    );
  }

	logoutSubmit() {
		this.props.logout()
	}

	render() {
		return (
			<div>
        <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="#">Navbar</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link active" to="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Link</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#">Disabled</Link>
              </li>
            </ul>
						<form className="form-inline my-2 my-lg-0">
							{
								(this.props.auth)
								? <ul className="navbar-nav">
									<li className="nav-item">
										<Link to="#" className="nav-link">
											{`Hello, ${this.props.auth.fullName}`}
										</Link>
									</li>
									<li className="nav-item">
										<button
											className="btn btn-outline-danger my-2 my-sm-0"
											type="button"
											onClick={this.logoutSubmit}>
											Logout
										</button>
									</li>
								</ul>
								: <button
									className="btn btn-outline-success my-2 my-sm-0"
									type="button"
									onClick={this.openModal}>
									Login
								</button>
							}
						</form>
          </div>
        </nav>
      </div>
    )
  }
}

/* REDUX CONTAINER */

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
