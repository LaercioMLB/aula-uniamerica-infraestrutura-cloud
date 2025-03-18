db = db.getSiblingDB('todo-app'); 

db.createCollection('todos'); 

db.todos.insertMany([
  { text: "Comprar leite", completed: false },
  { text: "Estudar React", completed: true },
  { text: "Fazer exercícios de Node.js", completed: false },
]);
