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

  // This method is called 'addTodo'.
  // - 'addTodo' is the name of the method.
  // - 'todo' is the parameter, which means it is the input to the method.
  // - 'Todo' is the type of the parameter, which means 'todo' should be an object with a title and description.
  // The purpose of this method is to add a new todo item to the list of todos.
  addTodo(todo: Todo) {
    // This line updates the list of todos by adding the new todo item to the existing list.
    // It creates a new array that includes all the existing todos and the new todo item.
    this.#todos.update((todos) => [...todos, todo]);
  }
}
