// trang-chu.component.ts

import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommentService } from './comment.service';
import { Router } from '@angular/router';
import { Comment } from './comment.model';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})

export class TrangChuComponent {
  ImageUrl: string ='../assets/hinh/1310558.jpg'
    products = [
        {
          name: 'Sản phẩm 1',
          description: 'Mô tả sản phẩm 1',
          price: 20.99,
          imageUrl: '../assets/hinh/Zhongli.jpg'
        },
        {
          name: 'Sản phẩm 2',
          description: 'Mô tả sản phẩm 2',
          price: 30.99,
          imageUrl: '../assets/hinh/Zhongli1.jpg'
        },
        {
          name: 'Sản phẩm 2',
          description: 'Mô tả sản phẩm 2',
          price: 30.99,
          imageUrl: '../assets/hinh/Zhongli2.jpg'
        },    
    ];
    event = [
      {
        Name: 'Tên sự kiện 1',
        Description: 'Tóm tắt sự kiện',
        ImageUrl: '....jpg'
      },
      {
        Name: 'Tên sự kiện 2',
        Description: 'Tóm tắt sự kiện',
        ImageUrl: '....jpg'
      },
      {
        Name: 'Tên sự kiện 3',
        Description: 'Tóm tắt sự kiện',
        ImageUrl: '....jpg'
      },
    ];

    @Input() comment!: Comment;
    newComment: Comment = { username: '', content: '', timestamp: new Date(), avatarUrl: 'path/to/avatar.jpg' };
    comments: Comment[] = [];
    constructor(public commentService: CommentService, private renderer: Renderer2, private el: ElementRef, private router: Router) {}
  
    addComment(): void {
      if (this.newComment.username && this.newComment.content) {
        this.commentService.addComment(this.newComment);
        this.newComment = { username: '', content: '', timestamp: new Date(), avatarUrl: 'path/to/avatar.jpg' };
      }
    }
    isFolded:  boolean = false;
  toggleFold() {
    this.isFolded = !this.isFolded;
    if (this.isFolded) {
      this.renderer.addClass(this.el.nativeElement, 'thanhben--fold');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'thanhben--fold');
    }
  }
  navigateToFormLog() {
    this.router.navigate(['/chitietsp']);
  }
}
