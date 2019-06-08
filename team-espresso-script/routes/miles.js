import React, {Component} from 'react';
import Validation from 'react-validation';
import "../validation.js";

export default class MileReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            car: '',
            miles: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            car: this.state.car,
            miles: this.state.miles
        }
        console.log(data)
        fetch("/miles/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.setState({msg: "Thanks for updating"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
                    <label>Car</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='John' name='name' validations={['required']}/>
                    <label>Miles</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                    <div className="submit-section">
                        <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                    </div>
                </Validation.components.Form>
            </div>
        );
    }
}