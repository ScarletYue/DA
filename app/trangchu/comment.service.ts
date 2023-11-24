// comment.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentsSubject = new BehaviorSubject<Comment[]>([]);
  comments$ = this.commentsSubject.asObservable();

  addComment(comment: Comment): void {
    const currentComments = this.commentsSubject.value;
    const updatedComments = [...currentComments, comment];
    this.commentsSubject.next(updatedComments);
  }
}
