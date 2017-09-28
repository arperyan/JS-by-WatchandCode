var todosList = {
  //todos: ['item 1','item 2','item 3'],
  todos: [],
  todosDisplay: function(){
    if(this.todos.length === 0){
        console.log('Todos list is empty');
    } else {
        console.log('To dos: ');
        for (var i =0; i < this.todos.length;i++) {
          if (this.todos[i].completed === true) {
            console.log('(x)',this.todos[i].todosText);
          } else {
            console.log('()',this.todos[i].todosText);
          }


      }
    }
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
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.todosDisplay();
  }
}
