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
  #todoLists = [];

  add(todo) {
    this.#todoLists = [...this.#todoLists, todo];
  }

  remove(index){
    if((index < 0) || (index >= this.#todoLists.length)) return;
    this.#todoLists = this.#todoLists.map((_,i)=> i !== index);
  }

  update(index, updatedTodo){
    this.#todoLists[index] = updatedTodo;
  }

  getAll(){
    return this.#todoLists;
  }

  get(index){
    if((index < 0) || (index >= this.#todoLists.length)) return null;
    return this.#todoLists[index];
  }

  clear(){
    this.#todoLists = [];
  }
}

module.exports = Todo;
