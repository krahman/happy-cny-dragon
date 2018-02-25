import {Commentary} from './commentary';
import {ICommentary} from './commentary.interface';
import {CommentaryItem} from './commentary.item';

export class CommentaryController extends Commentary implements ICommentary {
  public comments: any;

  getComments() {
    return this.comments;
  }

  addComment(comment: CommentaryItem) {
    return this.comments.push(comment) - 1;
  }
}
