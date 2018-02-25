import {Component, Input} from '@angular/core';
import {CommentaryItem} from '../../base/commentary/commentary.item';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent {
  @Input() comment: CommentaryItem;

  constructor() {
  }

}
