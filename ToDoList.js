import React, { Component } from 'react';
import {ListItem} from './ListItem';

export class ToDoList extends Component {

	render() {
		console.log("todolist props");
		console.log(this.props);
		var {tasks} = this.props
		var tasksJSX = []
		for(var attr in tasks){
			if(tasks[attr].visible){
				var task = tasks[attr]
				tasksJSX.push(<ListItem key={attr} id={attr} status={task.status} task={task.value} handleEnter={this.props.handleEnter} handleTaskChange={this.props.handleTaskChange} handleBlur={this.props.handleBlur} handleEdit={this.props.handleEdit} handleDestroy={this.props.handleDestroy} handleCompleted={this.props.handleCompleted}/>)
			}
		}
		console.log(tasksJSX)
		//var tasks = this.props.tasks.filter((val, i) => val.visible === true);
// {tasks.map(task => (
// 					<ListItem key={task.key} id={task.key} status={task.status} task={task.value} handleEnter={this.props.handleEnter} handleTaskChange={this.props.handleTaskChange} handleBlur={this.props.handleBlur} handleEdit={this.props.handleEdit} handleDestroy={this.props.handleDestroy} handleCompleted={this.props.handleCompleted}/>
// 				))}
		return (
			<ul className="todo-list">
				{tasksJSX}
			</ul>
		);
	}
}
