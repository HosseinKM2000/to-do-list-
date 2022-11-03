const KEY_ENTER = 13;

class todo{
    constructor(todoInputId , todoListId){
      this.todoInput = document.getElementById(todoInputId);
      this.todosBox = document.getElementById(todoListId);
      this.todos = [];
      this.localStorage = window.localStorage;
      this.loadList();

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
      const p = document.createElement('p');
      const span = document.createElement('span');
      const delet_ = document.createElement('a');

      delet_.addEventListener('click' , (e) => {
        this.deleteTodo(e);
      })

      li.classList.add('mb-2', 'd-flex', 'justify-content-between', 'border-1', 'border-light', 'border', 'p-1');
      span.classList.add('actions');
      delet_.classList.add('delete','d-flex', 'justify-content-center', 'align-items-center' ,'btn', 'btn-secondary');
      
      delet_.innerText = 'Delete';
      p.innerText = todo;

      span.append(delet_);
      li.append(p,span);

      return li ;
    }



    
    addtodo(){
      const todo = this.todoInput.value;
      this.todos.push(todo);
      this.saveList();
      this.render();
      this.todoInput.value = '';
    }

    deleteTodo(e){
      if(confirm('Are you shure?')){
        const liElement = e.target.closest('li');
        const pValue = liElement.children[0].outerText;
        const eimIndex  = this.todos.indexOf(pValue.toString())
  
        liElement.remove()
        this.todos.splice(eimIndex,1);
        this.saveList();
      }
    }


    saveList(){
      const str = JSON.stringify(this.todos);
      this.localStorage.setItem('todos',str);
    }

    loadList(){
      const todos = this.localStorage.getItem('todos');
      if(todos){
        this.todos = JSON.parse(todos);
      }
    }
}

new todo('todo-input','todos-box');

