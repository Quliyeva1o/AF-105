import { nanoid } from 'nanoid'

class TodoItem{
    constructor(title){
        this.id = nanoid();
        this.title = title;
        this.isDone = false;
        this.createdAt = new Date();
    }
}

export default TodoItem