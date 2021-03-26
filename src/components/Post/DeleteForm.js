import React, { Component } from 'react'
import axios from 'axios'

class DeleteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            userId: '',
            title: '',
            body: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { id } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        Id: <input
                        type="text"
                        name="id"
                        value={id}
                        onChange={this.changeHandler}
                    /></div>
                    <button className='submit' type="submit">Delete</button>
                </form>
            </div>
        )
    }
}
export default DeleteForm;
