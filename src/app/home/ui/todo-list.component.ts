import { Component, input } from "@angular/core";
import { Todo } from "../../shared/interfaces/todo";

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <!-- The @for directive is used to loop through each item in the 'todos' list.
       - 'todo' is a variable that represents the current item in the loop.
       - 'todos()' is a function that returns the list of todo items.
       - 'track $index' is used to keep track of the index (position) of each item in the list. -->
      @for (todo of todos(); track $index) {
      <li>
        <!-- This is a list item (li) that displays the title of the current todo item.
           - '{{ todo.title }}' is a placeholder that will be replaced with the actual title of the todo item.  -->
        <a>{{ todo.title }}</a>
      </li>
      } @empty {
      <!-- If the 'todos' list is empty, this message will be displayed. -->
      <li>Nothing to do!</li>
      }
    </ul>
  `,
})
export class TodoListComponent {
  // todos is used to represent each todo item in the list of todos.
  // input.required is used to specify that the todos input is required.
  // Todo[] is used to specify that the todos input should be an array of Todo objects.
  todos = input.required<Todo[]>();
}
