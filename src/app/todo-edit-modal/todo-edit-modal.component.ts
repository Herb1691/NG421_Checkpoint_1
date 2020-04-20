import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-edit-modal',
  templateUrl: './todo-edit-modal.component.html',
  styleUrls: ['./todo-edit-modal.component.css']
})
export class TodoEditModalComponent implements OnInit {

  modalInstance;
  constructor() { }

  ngOnInit() {
  }

  yes() {
    this.modalInstance.close('yes');
  }

  no() {
    this.modalInstance.close('no');
  }

}
