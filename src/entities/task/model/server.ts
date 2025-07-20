import { createServer } from 'miragejs';

export function makeServer() {
  createServer({
    routes() {
      this.namespace = 'api';

      this.get('/tasks', () => {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
      });

      this.get('/tasks/:id', (schema, request) => {
        const id = +request.params.id;
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        return tasks.find((t: any) => t.id === id);
      });

      this.post('/tasks', (schema, request) => {
        const task = JSON.parse(request.requestBody);
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return task;
      });

      this.put('/tasks/:id', (schema, request) => {
        const id = +request.params.id;
        const updated = JSON.parse(request.requestBody);
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.map((t: any) => (t.id === id ? updated : t));
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return updated;
      });

      this.delete('/tasks/:id', (schema, request) => {
        const id = +request.params.id;
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const filtered = tasks.filter((t: any) => t.id !== id);
        localStorage.setItem('tasks', JSON.stringify(filtered));
        return { success: true };
      });
    },
  });
}
