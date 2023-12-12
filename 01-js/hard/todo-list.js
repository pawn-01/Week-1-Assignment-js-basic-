/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
     todo = [];
     add(work){
       this.todo.push(work);
     }
     remove(n){
      this.todo.splice(n,1);
     }
     update(n,up){
      if(n<this.todo.length)this.todo[n] = up;
     }
     getAll(){
      return this.todo;
     }
     get(n){
      if(n<this.todo.length) return this.todo[n];
      return null
     }
     clear(){
        this.todo = [];
     }
}


module.exports = Todo;
