import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/data-access/todo.service';

// @Component is like a blueprint that tells Angular how to create and use this component
// Think of it as a recipe card that lists all the ingredients and instructions
@Component({
  // 'selector' is like a name tag - it tells Angular what HTML tag to use for this component
  // You can use this component in other templates by writing <app-detail></app-detail>
  selector: 'app-detail',

  // 'template' is like the HTML layout of our component
  // It describes what users will see on the screen
  template: `
    <!-- @if checks if we found a todo item -->
    <!-- Think of it like asking "Did we find what we're looking for?" -->
    @if (todo(); as todo) {
      <!-- If we found the todo, show its title and description -->
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
    } @else {
      <!-- If we didn't find the todo, show an error message -->
      <p>Could not find todo...</p>
    }
  `,
  // 'standalone: true' means this component can work by itself
  // Like a complete LEGO piece that doesn't need other pieces to function
  standalone: true,
})
export default class DetailComponent {
  // These are like tools our component needs to work
  // 'route' helps us read information from the URL (like todo IDs)
  private route = inject(ActivatedRoute);
  // 'todoService' helps us get and manage todo items
  private todoService = inject(TodoService);

  // This converts URL information into a signal (a special Angular feature)
  // Think of it like a radio that's always listening for changes to the URL
  private paramMap = toSignal(this.route.paramMap);

  // This is a special property that finds the todo item we want to display
  // It's like a search function that:
  // 1. Gets all todos from todoService
  // 2. Looks for the todo with an ID matching what's in the URL
  // 3. Updates automatically when either the URL or todos change
  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
