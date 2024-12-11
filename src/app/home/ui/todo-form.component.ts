import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  template: `
    <form [formGroup]="todoForm">
      <input type="text" formControlName="title" placeholder="title..." />
      <input
        type="text"
        formControlName="description"
        placeholder="description..."
      />
      <button type="submit">Add todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class TodoFormComponent {
  // private fb is a reference to the FormBuilder service. The FormBuilder service is used to create form groups and form controls. The FormBuilder service is injected into the TodoFormComponent class using the inject function.
  private fb = inject(FormBuilder);

  // The todoForm property is a form group that contains two form controls: title and description. The title form control is required, while the description form control is optional. The todoForm property is initialized with an empty title and description.
  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
