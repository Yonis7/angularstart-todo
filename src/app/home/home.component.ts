import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';

@Component({
  selector: 'app-home',
  template: `
    <h2>Todo</h2>
    <app-todo-form></app-todo-form>
  `,
  standalone: true,
  imports: [TodoFormComponent],
})
export default class HomeComponent {}
