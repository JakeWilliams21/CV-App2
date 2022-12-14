import React, {Component} from "react";
import './Skills.css'

class SkillsInput extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            skillName: '',
            skillLevel: 5
        }
        this.handleSkillsSubmit = this.handleSkillsSubmit.bind(this)
    }

    handleSkillsChange = (e, valueName) => {
        this.setState(prevState => {
            let newState = {...prevState}
            newState[valueName] = e.target.value
            return newState
        })
        console.log(e.target.value);
    }

    handleSkillsSubmit = (e) => {
        e.preventDefault()
        this.props.submit(this.state)
    }

    render () {
        return (
            <div className = 'skills-input-div'>
                <h2>Skills</h2>
                <form className = 'skills-form'>
                    <input onChange = {e => this.handleSkillsChange(e, 'skillName')} placeholder = 'skill-name' type = 'text' name = 'skillName' id = 'skillName' />
                    <input onChange = {e => this.handleSkillsChange(e, 'skillLevel')} placeholder = 'skill-level' type = 'range' min = '0' max = '5' name = 'skillLevel' id = 'skillLevel' />
                    <button onClick = {this.handleSkillsSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export class SkillsDisplay extends Component {
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

export default SkillsInput