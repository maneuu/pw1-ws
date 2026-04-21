import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.html',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();
  @Output() dragStart = new EventEmitter<string>();

  onEdit() {
    this.edit.emit(this.task);
  }

  onDelete() {
    this.delete.emit(this.task.id);
  }

  getProximityColor(): string {
    const today = new Date();
    const due = new Date(this.task.due);
    const diff = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diff < 0) return 'bg-gray-500';
    if (diff <= 1) return 'bg-red-500';
    if (diff <= 3) return 'bg-orange-400';
    if (diff <= 7) return 'bg-yellow-300';
    return 'bg-green-400';
  }

  getLevelLabel(): string {
    const labels = { high: 'Alta', medium: 'Média', low: 'Baixa' };
    return labels[this.task.level];
  }
}
