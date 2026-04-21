import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>(this.getInitialTasks());

  private getInitialTasks(): Task[] {
    return [
      {
        id: this.uid(),
        title: 'Ler capítulo 3 de Algoritmos',
        due: this.addDaysISO(2),
        level: 'high',
        desc: 'Priorizar exercícios 3.1-3.5',
        status: 'todo',
      },
      {
        id: this.uid(),
        title: 'Resolver lista de TS',
        due: this.addDaysISO(5),
        level: 'medium',
        desc: 'Atenção a generics',
        status: 'doing',
      },
      {
        id: this.uid(),
        title: 'Revisão rápida: HTML/CSS',
        due: this.addDaysISO(10),
        level: 'low',
        desc: '30 minutos',
        status: 'done',
      },
    ];
  }

  addTask(task: Omit<Task, 'id'>): void {
    this.tasks.update((t) => [...t, { ...task, id: this.uid() }]);
  }

  updateTask(id: string, updates: Partial<Task>): void {
    this.tasks.update((t) => t.map((task) => (task.id === id ? { ...task, ...updates } : task)));
  }

  deleteTask(id: string): void {
    this.tasks.update((t) => t.filter((task) => task.id !== id));
  }

  private uid(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  private addDaysISO(n: number): string {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  }
}
