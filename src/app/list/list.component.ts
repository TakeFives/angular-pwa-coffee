import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../logic/Coffee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    list:  Coffee[] = [];

    constructor(
      private data:DataService,
      private router:Router,
    ){}

    goDetails(coffee:Coffee){
      this.router.navigate(['/coffee', coffee.id])
    }

    ngOnInit(){
      this.data.getList((list: Coffee[]) => {
        this.list = list
      })
    }
}
