import { Injectable } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId: number = 0;
  statuses: Array<string> = [
    'Todo',
    'Doing',
    'Done'
  ];
  todoList: ITodo [] = [
    // example of how to make an item in todo list
    { title: 'Install Angular CLI', id: this.todoId, status: 'Todo', description: 'Angular', createdAt: new Date() }
  ];
  constructor() { }
  getStatuses() {
    return this.statuses;
  }
  getTodos(status) {
    if (this.statuses.includes(status)) {
      return this.todoList.filter(item => item === status);
    } else {
      return this.todoList;
    }
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo): void {
    todo.id = this.todoId ++;
    this.todoList.push(todo);
  }
}
