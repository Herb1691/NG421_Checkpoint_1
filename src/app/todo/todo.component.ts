import { Component, OnInit,Input } from '@angular/core';
import {TodoService} from '../services/todo.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TodoEditModalComponent } from '../todo-edit-modal/todo-edit-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  isEditing: false;
  constructor(private todoService : TodoService, private modalService : NgbModal) { }
  todoTitle = '';
  ngOnInit() {
  }
  async deleteTodo(todo) {
    let result;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === 'yes') {
        this.todoService.deleteTodo(todo);
      }
    } catch (ex) {}
  }

  async saveTodo(todo) {
    let result;
    const modal = this.modalService.open(TodoEditModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === 'yes') {
        this.todoService.doneEdit(todo);
      } else {
        this.todoService.cancelEdit(todo);
      }
    } catch (ex) {}
  }


  getStatus() {
    return this.todoService.getStatuses();
  }

  editTodo() {
    this.todoService.editTodo(this.todo);
  }

  doneEdit() {
    this.todoService.doneEdit(this.todo);
  }

  cancelEdit() {
    this.todoService.cancelEdit(this.todo);
  }

}
