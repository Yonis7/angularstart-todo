import { Component, input } from "@angular/core";
import { Todo } from "../../shared/interfaces/todo";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-todo-list',
  template: `
    <!-- ul stands for unordered list - it creates bullet points -->
    <ul>
      <!-- This is like a loop that goes through each todo item in our list
          Imagine going through a stack of sticky notes one by one -->
      @for (todo of todos(); track todo.id) {
      <!-- li stands for list item - each todo gets its own bullet point -->
      <li>
        <!-- This creates a clickable link to see more details about the todo
               When clicked, it takes us to a page showing just that todo -->
        <a routerLink="/detail/{{ todo.id }}">
          <!-- Show the todo's title here -->
          {{ todo.title }}
        </a>
      </li>
      } @empty {
      <!-- If we have no todos, show this friendly message -->
      <li>Nothing to do!</li>
      }
    </ul>
  `,
  // Tell Angular which features we need to use
  imports: [RouterLink], // We need RouterLink for our clickable links
  // This component can work on its own without needing other components
  styles: [
    `
      ul {
        margin: 0;
        padding: 1rem;
      }
    `,
  ],
  standalone: true,
})
export class TodoListComponent {
  // This creates a property called 'todos' that must be provided when using this component
  // It's like saying "To use this component, you must give me a list of todos"
  // The Todo[] means it must be a list (array) of Todo items
  todos = input.required<Todo[]>();
}
