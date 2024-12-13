import { Injectable, signal } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // We only want this class to be able to
  // update the signal (# makes it private). The purpose of this signal is to store the todos.
  #todos = signal<Todo[]>([]);

  // This can be read publicly the perpose of this expression is to return the todos as a readonly array.
  todos = this.#todos.asReadonly();

  // Syntax explained: 'addTodo' is the name of the method, 'todo' is the parameter, and 'Todo' is the type of the parameter. The purpose of this method is to add a new todo to the todos signal.
  addTodo(todo: Todo) {
    // The purpose of this expression is to update the todos signal with a new array that includes the new todo.
    this.#todos.update((todos) => [...todos, todo]);
  }
}
