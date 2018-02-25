import {Component, Input} from '@angular/core';
import {BasePlayerController} from '../base/base.controller';

@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.scss']
})
export class WarriorComponent {
  @Input() warrior: BasePlayerController;

  constructor() {}
}
