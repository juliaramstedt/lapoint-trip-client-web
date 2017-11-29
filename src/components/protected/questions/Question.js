import React, { Component } from 'react'
import { db } from '../../../config/constants'

export default class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: true,
      text: ""
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    db.collection("feedbackQuestions").add({
      text: this.state.text
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  render () {
    if(this.state.isEditing) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Text</label>
          <textarea onChange={this.handleChange}></textarea>
          <button type='submit'>Save</button>
        </form>
      )
    }
    return (
      <div>
      </div>
    )
  }
}
