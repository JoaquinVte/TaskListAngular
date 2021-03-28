import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public msg: string = "";
  constructor(private route: ActivatedRoute,public location: Location) { }

  ngOnInit(): void {
    this.msg = this.route.snapshot.paramMap.get("msg");
  }
  back(){
    this.location.back();
  }

}
