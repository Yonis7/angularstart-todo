import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoListComponent } from './ui/todo-list.component';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <h1>Todo</h1>
    <!-- The 'app-todo-form' component is used here. When the 'todoSubmitted' event is emitted from this component, the 'createTodo' method is called with the event data ($event) as its argument. -->
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />

    <!-- The 'app-todo-list' component is used here to display the list of todo items.
    - '[todos]' is an input property of the 'app-todo-list' component. This is where the user can type in the list of todo items.

    - 'todoService.todos' is the value being passed to the '[todos]' input property. This is the list of todo items stored in the 'todoService'.

    - This means that the 'app-todo-list' component will receive the list of todo items from the 'todoService'. -->
    <app-todo-list [todos]="todoService.todos()" />
  `,
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
})
export default class HomeComponent {
  // Here we have todoService set equal to the value of the TodoService class. This is done using the inject function from the Angular core library.
  todoService = inject(TodoService);
}
