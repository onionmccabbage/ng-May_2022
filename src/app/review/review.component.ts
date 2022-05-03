import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() imgSize = 12
  @Input() init

  ngOnInit() {
  }
  grow = ()=>{
    // this.imgSize = Number(this.imgSize) + 32
    if (Number(this.init.w) + 32 <= 1024){
      this.init.w = Number(this.init.w) + 32
    }
  }
  shrink = ()=>{
    // this.imgSize = Number(this.imgSize) - 32
    if (Number(this.init.w) - 32 >= 32){
      this.init.w = Number(this.init.w) - 32
    }
  }
}
