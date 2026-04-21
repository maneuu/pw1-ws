import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';
import { TaskCardComponent } from '../task-card/task-card';
import { TaskFormComponent } from '../task-form/task-form';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskCardComponent, TaskFormComponent],
  templateUrl: './task-list.html',
})
export class TaskListComponent {
  taskService = inject(TaskService);
  isFormOpen = signal(false);
  editingTask = signal<Task | null>(null);
  private draggedTaskId: string | null = null;

  todoTasks = computed(() => this.taskService.tasks().filter((t) => t.status === 'todo'));
  doingTasks = computed(() => this.taskService.tasks().filter((t) => t.status === 'doing'));
  doneTasks = computed(() => this.taskService.tasks().filter((t) => t.status === 'done'));

  openFormModal(): void {
    this.editingTask.set(null);
    this.isFormOpen.set(true);
  }

  closeFormModal(): void {
    this.isFormOpen.set(false);
    this.editingTask.set(null);
  }

  editTask(task: Task): void {
    this.editingTask.set(task);
    this.isFormOpen.set(true);
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId);
  }

  handleTaskSubmit(data: Omit<Task, 'id'>): void {
    const editing = this.editingTask();
    if (editing) {
      this.taskService.updateTask(editing.id, data);
    } else {
      this.taskService.addTask(data);
    }
    this.closeFormModal();
  }

  onDragStart(taskId: string): void {
    this.draggedTaskId = taskId;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, newStatus: Task['status']): void {
    event.preventDefault();
    if (this.draggedTaskId) {
      this.taskService.updateTask(this.draggedTaskId, { status: newStatus });
      this.draggedTaskId = null;
    }
  }
}
