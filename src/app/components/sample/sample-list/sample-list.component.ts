import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/entities/sample';
import { SampleService } from 'src/app/services/sample/sample.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {

  posts: Post[];
  ps: Post = new Post();
  constructor(private sampleService: SampleService, ) { }

  ngOnInit() {
  }

  getPosts() {
    console.log(this.ps.title)
    this.sampleService.getPosts(this.ps.title).subscribe(
      post => {
        this.posts = post.results;
      });
  }

}
