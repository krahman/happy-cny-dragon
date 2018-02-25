import {Commentary} from './commentary';
import {CommentaryItem} from './commentary.item';

export interface ICommentary extends Commentary {
  getComments(): any;
  addComment(comment: CommentaryItem): number;
}
