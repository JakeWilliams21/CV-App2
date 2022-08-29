import React, {Component} from "react";
import './Experience.css'

class ExperienceInput extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            company: '',
            position: '',
            jobFrom: '',
            jobTo: ''
        }

        this.handleJobSubmit = this.handleJobSubmit.bind(this)

    }

    handleJobChange = (e, valueName) => {
        this.setState(prevState => {
            let newState = {...prevState}
            newState[valueName] = e.target.value
            return newState
        })
    }

    handleJobSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state)
    }

    render () {
        return (
            <div className = 'job-input-div'>
            <h2>Experience</h2>
            <form className = 'job-form'>
                <input onChange = {e => this.handleJobChange(e, 'company')} placeholder = 'Company' type = 'text' id = 'company' name = 'company'/>
                <input onChange = {e => this.handleJobChange(e, 'position')} placeholder = 'Position' type = 'text' id = 'position' name = 'position'/>
                <input onChange = {e => this.handleJobChange(e, 'jobFrom')} placeholder = 'From' type = 'date' id = 'jobFrom' name = 'jobFrom'/>
                <input onChange = {e => this.handleJobChange(e, 'jobTo')} placeholder = 'To' type = 'date' id = 'jobTo' name = 'jobTo'/>
                <button onClick = {this.handleJobSubmit} >Submit</button>
            </form>
            </div>
        )
    }
}

export class ExperienceDisplay extends Component {
    constructor () {
        super()

        this.state = {}
    }

    render () {
        return (
            <div>
                <h1>Done!</h1>
            </div>
        )
    }
}

export default ExperienceInput