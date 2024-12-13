import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { TodoService } from '../shared/data-access/todo.service';

@Component({
  selector: 'app-home',
  template: `
    <h2>Todo</h2>
    <!-- The 'app-todo-form' component is used here. When the 'todoSubmitted' event is emitted from this component, the 'createTodo' method is called with the event data ($event) as its argument. -->
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />
  `,
  standalone: true,
  imports: [TodoFormComponent],
})
export default class HomeComponent {
  // Here we have todoService set equal to the value of the TodoService class. This is done using the inject function from the Angular core library.
  todoService = inject(TodoService);
}
