class Todo {
  title: string;
  detail: string;
  isDone: boolean;
  createdAt: Date;

  constructor(
    title: string,
    detail: string,
    isDone: boolean = false,
    createdAt: Date = new Date()
  ) {
    this.title = title;
    this.detail = detail;
    this.isDone = isDone;
    this.createdAt = createdAt;
  }
}

export default Todo;
