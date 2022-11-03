class todo{
    constructor(todoInputId , todoListId){
      this.todoInput = document.getElementById(todoInputId);
      this.todoList = document.getElementById(todoListId);
      this.todos = ['read the book','make some coffee'];

      this.render();
    }
    // <li class="mb-2 d-flex justify-content-between border-1 border-light border p-1 ">
    // read the book
    // <span class="actions">
    //     <a class="delete d-flex justify-content-center align-items-center btn btn-secondary">delete</a>
    // </span>
    // </li>

    render(){
       const todosOutput = document.createElement('ul');
       const input = document.querySelector('#todo-input');

       todosOutput.classList.add('mt-5', 'text-white' , 'w-100');
       todosOutput.id = 'todo-list';
       
       for(const todo of this.todos){
         todosOutput.append(this.renderTodos(todo));
         input.after(todosOutput)
       }

       this.todoList.innerText = '';
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
}

new todo('todo-input','todo-list');

