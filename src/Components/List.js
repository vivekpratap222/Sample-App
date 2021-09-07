import React from "react";
import { Button, Table } from 'react-bootstrap';
import { deleteItem, getList } from "../Utils/apiUtils";
import 'bootstrap/dist/css/bootstrap.css';
import { FaTrash, FaEdit } from 'react-icons/fa';
import history from './../history';



class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        };
    }

    componentDidMount() {
        this.getList()
    }

    getList(){
        getList().then(response => {
            console.log("getList :: ", response)
            this.setState({ listData: response })
        }).catch((error) => {
            console.log(
                "oops ! something went wrong !! get message ",
                error
            );
        });
    }

    delete(id) {
        deleteItem(id).then(response => {
            console.log("delete :: ", response)
            this.getList()
        }).catch((error) => {
            console.log(
                "oops ! something went wrong !! get message ",
                error
            );
        });
    }

    edit(id) {
        history.push('/edit/'+id);
    }



    render() {
        const { listData } = this.state;
        return (
            <div>
                <h4 className="text-center mt-2 mb-3">List</h4>
                <Button className="float-right mb-2 mr-2" onClick={() => history.push('/add')}>Add</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td className="pointer">
                                    <FaEdit onClick={() => { this.edit(item.id) }} />&nbsp;
                                    <FaTrash onClick={() => { this.delete(item.id) }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default List;