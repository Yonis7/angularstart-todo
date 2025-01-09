// Import the building blocks we need from Angular
// These are like the ingredients we need to make our form work
import { Component, inject, output } from '@angular/core';
// These help us create and manage forms in Angular
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// This is the shape of our todo item (like a template for what info we need)
import { CreateTodo } from '../../shared/interfaces/todo';

// @Component tells Angular this is a reusable piece of our app
// Think of it like a custom LEGO piece we're creating
@Component({
  // This is the name we use to add this form in our HTML
  selector: 'app-todo-form',
  // This is what our form looks like
  template: `
    <!-- This is our form that collects todo information -->
    <!-- [formGroup] connects our form to the todoForm we create below -->
    <!-- (ngSubmit) is what happens when someone clicks the submit button -->
    <form
      [formGroup]="todoForm"
      (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())"
    >
      <!-- Input field for the todo title -->
      <!-- 'required' means you must fill this in -->
      <input type="text" formControlName="title" placeholder="title..." />

      <!-- Input field for the todo description -->
      <!-- This one is optional -->
      <input
        type="text"
        formControlName="description"
        placeholder="description..."
      />

      <!-- Submit button - disabled if the form isn't valid -->
      <button [disabled]="!todoForm.valid" type="submit">Add todo</button>
    </form>
  `,
  // Tell Angular we need the form features
  imports: [ReactiveFormsModule],
  // This component can work on its own
  standalone: true,
})
export class TodoFormComponent {
  // This creates an event that sends out the new todo when the form is submitted
  // Like a messenger that delivers the form data to whoever needs it
  todoSubmitted = output<CreateTodo>();

  // FormBuilder helps us create and manage forms
  // Like a helper that sets up our form structure
  private fb = inject(FormBuilder);

  // This creates our form with two fields:
  // 1. title: required (must be filled in)
  // 2. description: optional
  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required], // Empty string to start, but required
    description: [''], // Empty string to start, optional
  });
}
