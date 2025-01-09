// We import the tools we need from Angular
// Injectable means this service can be used by other parts of our app
// signal is like a special container that can hold and update data
import { Injectable, signal } from '@angular/core';
import { CreateTodo, Todo } from '../interfaces/todo';

// @Injectable tells Angular this is a service
// Think of this as a manager that handles all our todo-related tasks
// 'root' means there's only one copy of this service for the whole app
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // This is like a private notebook where we keep our todos
  // The # means only this service can write in the notebook
  // signal<Todo[]> means it's a special notebook that can tell others when it changes
  // [] means it starts empty
  #todos = signal<Todo[]>([]);

  // This is like a read-only copy of our notebook
  // Other parts of the app can look at the todos but can't change them directly
  todos = this.#todos.asReadonly();

  // This is like a method for adding a new page to our notebook
  // todo: CreateTodo means we expect to receive information for a new todo
  addTodo(todo: CreateTodo) {
    // Update our notebook with the new todo
    this.#todos.update((todos) => [
      // Keep all the existing todos (like keeping all the old pages)
      ...todos,
      // Add the new todo with a unique ID (like adding a new page with today's date)
      { ...todo, id: Date.now().toString() },
    ]);
  }
}
