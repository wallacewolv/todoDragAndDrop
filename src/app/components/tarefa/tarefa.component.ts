import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  todo: Array<string> = ['Fazer comida', 'Lavar a louça', 'Lavar o carro'];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  }
}
