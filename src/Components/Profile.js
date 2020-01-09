import React, { Component } from "react";
import "../App.css";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			nameInput: "",
			ageInput: 0
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
        console.log(this.state.nameInput)
        console.log(this.state.ageInput)
		return (
			<div className="profile-container">
				<h2>Name: {this.props.name}</h2>
				<h2>Age: {this.props.age}</h2>
				<input
					placeholder="Enter New Name"
					name="nameInput"
                    onChange={event => this.handleChange(event)}
                    type='text'
				/>
				<input
					placeholder="Enter New Age"
					name="ageInput"
                    onChange={event => this.handleChange(event)}
                    type='number'
				/>
                <button
                    onClick={()=>this.props.updateInfo(this.state.nameInput, this.state.ageInput)}
                >Submit Both!</button>
			</div>
		);
	}
}

export default Profile;
