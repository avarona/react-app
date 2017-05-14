import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Example from '../components/Example.jsx';
import { exampleUpdate } from '../redux/reducers/example';

class AppContainer extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
				<Navbar />
				<h1>App Container</h1>
        <Example />
				<Footer />
      </div>
    )
  }
}

/* REDUX CONTAINER */

const mapStateToProps = ({ example }) => ({ example });

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(exampleUpdate())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
