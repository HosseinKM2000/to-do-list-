const KEY_ENTER = 13;

class todo{
    constructor(todoInputId , todoListId){
      this.todoInput = document.getElementById(todoInputId);
      this.todosBox = document.getElementById(todoListId);
      this.todos = [];

      this.todoInput.addEventListener('keyup', (e) => {
        if(e.keyCode == KEY_ENTER){
          this.addtodo();
        }
      })

      this.render();
    }
 

    render(){
       if(this.todos.length == 0){
        const emptyMassage = document.createElement('h5');

        emptyMassage.textContent = '"Please add to do"';
        emptyMassage.classList.add('emptyMessage');

        this.todosBox.append(emptyMassage)
        
       }else{
        const todosOutput = document.createElement('ul');

        todosOutput.classList.add('mt-5', 'text-white' , 'w-100');
        todosOutput.id = 'todo-list';
        
        for(const todo of this.todos){
          todosOutput.append(this.renderTodos(todo));
        }
 
        this.todosBox.innerText = '';
        this.todosBox.append(todosOutput);
       }
    }



    renderTodos(todo){
      const li = document.createElement('li');
      const span = document.createElement('span');
      const delet_ = document.createElement('a');

      li.classList.add('mb-2', 'd-flex', 'justify-content-between', 'border-1', 'border-light', 'border', 'p-1');
      span.classList.add('actions');
      delet_.classList.add('delete','d-flex', 'justify-content-center', 'align-items-center' ,'btn', 'btn-secondary');
      
      delet_.innerText = 'Delete';
      li.innerText = todo;

      span.append(delet_);
      li.append(span);

      return li ;
    }



    
    addtodo(){
      const todo = this.todoInput.value;
      this.todos.push(todo);
      this.render();
    }
}

new todo('todo-input','todos-box');

