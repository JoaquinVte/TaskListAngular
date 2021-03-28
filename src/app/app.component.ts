import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter = 0;
  textValue: string = "Hello"
  
constructor(private logger : LogService){}

  ngOnInit(): void {
    this.logger.log("[AppComponent] Inicializado el componente AppComponent")
  }  

  clicked() {
    this.counter++;
  }
}
