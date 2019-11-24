import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import axios from 'axios';
import server from '../../serverInfo';
import Cookies from 'js-cookie';
import EditModal from './EditModal';


import {
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap';

class UserTasks extends Component {
  constructor(props) {
    super(props);

    this.closeEdit = this.closeEdit.bind(this);


    this.state = {
      tasks: {
        
      },
      edit: null
    };
  }

  closeEdit() {
      this.setState({edit: null});
  }

  render() {
    return (
        <Col xs="12" lg="6">
            <Card>
            <CardHeader>
                <i className="fa fa-align-justify"></i> {this.props.name}
            </CardHeader>
                {this.state.edit === null ? 
                    <CardBody>
                    <Table responsive>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th>Date</th>
                        {/* <th>Role</th> */}
                        <th>Edit</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.tasks.map((task, key) => {
                        return (
                            <tr key={"task-" + task.task_id}>
                                <td>{task.cheked ? <Badge color="success">Done</Badge> : <Badge color="danger">To do</Badge>}</td>
                                <td>{task.task_text}</td>
                                <td>{task.task_date + " " + (task.task_time ? task.task_time : "")}</td>
                                {/* <td>Member</td> */}
                                <td><Button color="link" onClick={() => {this.setState({edit: task.task_id})}}>Edit</Button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                    </Table>
                    <Button size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Add Task</Button>
                    
                </CardBody> : <EditModal
                                editTask={this.props.editTask}
                                task={this.props.tasks.find(task => task.task_id === this.state.edit)}
                                closeEdit={this.closeEdit}>
                              </EditModal>}

                
            </Card>
        </Col>
    );
  }
}

export default UserTasks;