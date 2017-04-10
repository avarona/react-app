import React, { Component } from 'react';
import { connect } from 'react-redux';

import Example from '../components/Example'

class AppContainer extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
        <Example />
      </div>
    )
  }

export default connect()(AppContainer)
