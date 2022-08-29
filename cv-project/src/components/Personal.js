import React, {Component} from "react";
import './Personal.css'

class PersonalInput extends Component {
    constructor () {
        super () 

        this.state = {
            first: '',
            last: '',
            email: '',
            phone: '',

        }
    }

    handlePersonalChange = (e, valueName) => {
        this.setState(prevState => {
            let newState = {...prevState}
            newState[valueName] = e.target.value;
            return newState;

        })
    }

    handlePersonalSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state)
    }

    render () {
        return (
            <div className = 'personal-input-div'>
                <h2>Personal Info</h2>
                <form className = 'personal-form'>
                    <input onChange = {e => this.handlePersonalChange(e, 'firstName')} placeholder = 'First Name' id = 'firstName' name = 'firstName' type = 'text' />
                    <input onChange = {e => this.handlePersonalChange(e, 'lastName')} placeholder = 'Last Name' id = 'lastName' name = 'lastName' type = 'text' />
                    <input onChange = {e => this.handlePersonalChange(e, 'email')} placeholder = 'Email' id = 'email' name = 'email' type = 'email' />
                    <input onChange = {e => this.handlePersonalChange(e, 'phone')} placeholder = 'Phone Number' id = 'phone' name = 'phone' type = 'text' />
                    <button onClick = {this.handlePersonalSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default PersonalInput