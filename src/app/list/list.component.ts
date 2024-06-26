import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list: Coffee[] = [];

  constructor(
    private data: DataService,
    private router: Router,
    private geolocationService: GeolocationService,
  ) { }

  goDetails(coffee: Coffee) {
    this.router.navigate(["/coffee", coffee._id]);
  }

  goMap(coffee: Coffee) {
    const mapUrl = this.geolocationService.getMapLink(coffee.location!);
    // location.href = mapUrl;
    window.open(mapUrl, "_blank");
  };

  share(coffee: Coffee) {
    const shareText = `I had this coffee at ${coffee.place} and for me it's ${coffee.rating} stars.`
    const shareInfo = {
      title: coffee.name,
      text: shareText,
      url: window.location.href
    }

    if ('share' in Navigator && navigator.canShare(shareInfo)) {
      navigator.share(shareInfo)
    }
  };

  ngOnInit() {
    this.data.getList((list: Coffee[]) => {
      this.list = list
    })
  }
}
