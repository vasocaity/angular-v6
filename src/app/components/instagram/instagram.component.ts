import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feed } from '../../models/feed';
import { BnkService } from '../../services/bnk.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  feeds: Feed;
  constructor(private route: ActivatedRoute, private bnk: BnkService
  , private location: Location) { }

  ngOnInit() {
      const instagram_id = this.route.snapshot.paramMap.get('instagramId');
      console.log(instagram_id);
      this.bnk.instagram(instagram_id).subscribe(data =>
        this.feeds = data
      );
  }
  goBack() {
    this.location.back();
  }

}
