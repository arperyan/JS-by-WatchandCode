var todosList = {
  //todos: ['item 1','item 2','item 3'],
  todos: [],
  todosDisplay: function(){
    console.log('To dos: ',this.todos);
  },
  todosAdd: function(todosText){
    this.todos.push({
      todosText: todosText,
      completed: false
    });
    this.todosDisplay();
  },
  todosChange: function(pos,todosText){
    //this.todos[pos] = val;
    this.todos[pos].todosText = todosText;
    this.todosDisplay();
  },
  todosDel: function(pos){
    this.todos.splice(pos,1);
    this.todosDisplay();
  },
  toggleComplete: function(pos){
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.todosDisplay();
  }
}
