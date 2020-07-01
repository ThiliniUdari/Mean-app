import { Component, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../../posts.model'
import { Subscription } from 'rxjs';
import { PostService } from '../../posts.service';
 
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit ,OnDestroy{

  // {title:'first',content:'hello first content'},
    // {title:'second',content:'hello second content'},
    // {title:'third',content:'hello third content'},
    posts:Post[]=[];
    private postSub:Subscription;

  constructor(public postsService:PostService) {}

  ngOnInit(): void {
    this.posts=this.postsService.getPosts();
    this.postSub=this.postsService.getPostUpdateListner()
      .subscribe((posts:Post[])=>{
          this.posts=posts;
      })
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
