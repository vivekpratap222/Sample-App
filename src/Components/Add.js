import React from "react";
import { save, update, getListById } from "../Utils/apiUtils";
import { Button, Form } from 'react-bootstrap';
import history from './../history';

const labelStyle = {
    width: "150px"
}

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
    }

    componentDidMount() {
        console.log("CDM  :: ", this.props.match.params.id)
        if (this.props.match.params.id != undefined) {
            this.setState({ id: this.props.match.params.id })
            getListById(this.props.match.params.id).then(response => {
                console.log("edit :: ", response)
                this.setState({
                    title: response.title,
                    body: response.body
                })
            }).catch((error) => {
                console.log(
                    "oops ! something went wrong !! get message ",
                    error
                );
            });
        }
    }

    submit() {
        console.log("value submit")
        const data = {
            title: this.state.title,
            body: this.state.body,
            userId: 1,
        }
        if (this.state.id != undefined) {
            update(data, this.state.id).then(response => {
                history.push('/')
            }).catch((error) => {
                console.log(
                    "oops ! something went wrong !! get message ",
                    error
                );
            });
        }
        else {
            save(data).then(response => {
                history.push('/')
            }).catch((error) => {
                console.log(
                    "oops ! something went wrong !! get message ",
                    error
                );
            });
        }
    }


    render() {
        return (
            <div className="mt-5">
                {this.state.id != undefined ? <h4>Edit</h4>: <h4>Add</h4>}
                <Form className="p-3">
                    <Form.Group controlId="validationpassword" className="form-field" >
                        <Form.Label style={labelStyle}>Title</Form.Label>
                        <Form.Control type="text" name="estimated"
                            autoComplete="off"
                            value={this.state.title}
                            onChange={(event) => { this.setState({ title: event.target.value }) }}
                            className="form-control"
                            required
                        />
                        <Form.Control.Feedback type="invalid" >Please enter title</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationpassword" className="form-field" >
                        <Form.Label style={labelStyle}>body</Form.Label>
                        <Form.Control as='textarea' name="body"
                            autoComplete="off"
                            rows='6'
                            value={this.state.body}
                            onChange={(event) => { this.setState({ body: event.target.value }) }}
                            className="form-control"
                            onKeyDown={this.handleKeyDown}
                            required
                        />
                        <Form.Control.Feedback type="invalid">Please enter body</Form.Control.Feedback>
                    </Form.Group>
                    <Button onClick={() => { history.push('/') }} >Cancel</Button>
                    <Button onClick={() => { this.submit() }} className="ml-2" >Submit</Button>

                </Form>
            </div>
        )
    }

}
export default Add;