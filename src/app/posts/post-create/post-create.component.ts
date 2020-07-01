import { Component, OnInit,EventEmitter } from '@angular/core';
import {Post} from '../posts.model'
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  inputContent="";
  inputTitle="";

  constructor( public postsService:PostService) { }

  ngOnInit(): void {
  }

  onAddPost(form:NgForm){
    // alert("post added");
    if(form.invalid) 
    {return ;}

    this.postsService.addPost(form.value.title,form.value.content);
    form.resetForm();
    
  }
  
}
