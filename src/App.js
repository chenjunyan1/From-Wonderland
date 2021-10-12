import logo from './logo.svg';
import './App.css';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/e0d2b977-4415-43c7-89c2-7a862a0628a7', this.state)
    .then(response => {
      console.log(response);
    })
  }
    
    render() {
      const { name, age, salary, hobby } = this.state;   
      return (
        <Container fluid className="container">
          <Header as='h2'>React Google Sheets!</Header>
          <Form className="form" onSubmit={this.submitHandler}>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
            </Form.Field>
            <Form.Field>
              <label>Salary</label>
              <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
            </Form.Field>
            <Form.Field>
              <label>Hobby</label>
              <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
            </Form.Field>
            
            <Button color="blue" type='submit'>Submit</Button>
          </Form>
        </Container>
      )
    }
}
