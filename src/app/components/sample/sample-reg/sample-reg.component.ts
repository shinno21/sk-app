import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample/sample.service';
import { Post } from 'src/app/entities/sample';

@Component({
  selector: 'app-sample-reg',
  templateUrl: './sample-reg.component.html',
  styleUrls: ['./sample-reg.component.css']
})
export class SampleRegComponent implements OnInit {
  post: Post = new Post();
  errmsg_cre_date: string = "";
  constructor(private sampleService: SampleService, ) { }

  ngOnInit() {
  }

  pushRegButton() {
    console.log("title: " + this.post.title)
    console.log("content: " + this.post.content)
    console.log("cre_date: " + this.post.cre_date)
    console.log("username: " + this.post.username)
    this.sampleService.regPost(this.post).subscribe(
      data => {
        console.log("登録しました！");
      },
      err => {
        this.errmsg_cre_date = err.error.cre_date;
        console.log(err.error.cre_date)
        console.log("NG: 登録失敗！");
      }
    );
  }

}
