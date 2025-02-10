import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({providedIn: 'root'})
  export class TasksService {
  private tasks = [
      {
        id: 't1',
        userId: 'u2',
        title: 'Debt Yield',
        summary:
          'Add debt yield as search parameter',
        dueDate: '2025-12-31',
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Interest Rate',
        summary: 'Add interest rate as search parameter',
        dueDate: '2025-05-31',
      },
      {
        id: 't3',
        userId: 'u5',
        title: 'Project Goals',
        summary:
          'Summarize project goals for first quarter 2025',
        dueDate: '2025-04-01',
      },
    ];

    constructor() {
      const tasks = localStorage.getItem('tasks');

      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }

    getUserTasks(userId: string) {
      return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTaskData , userId: string) {
      this.tasks.push({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });
      this.saveTasks();
    }

    removeTask(id: string) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.saveTasks();
    }

    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
