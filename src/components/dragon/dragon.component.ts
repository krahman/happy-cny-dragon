import {Component, Input} from '@angular/core';
import {BasePlayerController} from '../base/base.controller';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent {
  @Input() dragon: BasePlayerController;

  constructor() {}
}
