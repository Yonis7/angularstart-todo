import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-home',
  template: `
    <h2>Todo</h2>
    <!-- The 'app-todo-form' component is used here. When the 'todoSubmitted' event is emitted from this component, the 'createTodo' method is called with the event data ($event) as its argument. -->
    <app-todo-form (todoSubmitted)="createTodo($event)" />
  `,
  standalone: true,
  imports: [TodoFormComponent],
})
export default class HomeComponent {
  // The purpose of this method is to create a new todo. They syntax explained: 'createTodo' is the name of the method, 'todo' is the parameter, and 'Todo' is the type of the parameter.
  createTodo = (todo: Todo) => {
    console.log(todo);
  };
}
