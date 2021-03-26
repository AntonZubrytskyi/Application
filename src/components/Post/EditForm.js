import React, { Component } from 'react'
import axios from 'axios'

class EditForm extends Component {
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
            .put(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { id, userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        Id:
                        <input
                        type="text"
                        name="id"
                        value={id}
                        onChange={this.changeHandler}
                    /></div>
                    <div>
                        UserId:
                        <input
                        type="text"
                        name="userId"
                        value={userId}
                        onChange={this.changeHandler}
                    />
                    </div>
                    <div>
                        Title:
                        <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.changeHandler}
                    />
                    </div>
                    <div>
                        Body:<input
                        type="text"
                        name="body"
                        value={body}
                        onChange={this.changeHandler}
                    />
                    </div>
                    <button className='submit' type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default EditForm;
