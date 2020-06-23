import React,{Component} from 'react';
import logo from './logo.png';
export default class header extends Component{

	render(){
		return(
			<div className="header">
				<img className="logo" src={logo} alt="urlshortner"></img>
			</div>
		)
	}
}
