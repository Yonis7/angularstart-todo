//This is the interface for the todo object. It has two properties, title and description, both of which are strings. This interface will be used to define the structure of the todo object. The todo object will be used to store the title and description of a todo item. We added an id.
export interface Todo {
  id: string;
  title: string;
  description: string;
}

// This is the interface for the createTodo object. It is the same as the Todo interface, but without the id property. This interface will be used to define the structure of the createTodo object. The createTodo object will be used to store the title and description of a new todo item.
export type CreateTodo = Omit<Todo, 'id'>;
