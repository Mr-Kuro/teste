import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('todos')
    let todos = JSON.parse(items)
    if(!todos){
      this.todos = [];
    } else{
      this.todos = todos

    }
  }

  addTodo(title: string):void{
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false
    });

    console.log(this.todos);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: Todo){
    console.log('O elemento pai recebeu', todo);

    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)

    localStorage.setItem('todos', JSON.stringify(this.todos));

  }
}
