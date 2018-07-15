import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { ActivatedRoute } from '@angular/router';
import { Feed, FeedItem } from '../../models/feed';
import { Location } from '@angular/common';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {
  feeds: Feed;
  feedItem: FeedItem[];
  constructor(private bnk: BnkService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const instagram_id = this.route.snapshot.paramMap.get('instagramId');
    this.bnk.instagram(instagram_id).subscribe(data => {
      this.feeds = data;
      this.feedItem = data.feeds.filter(result => result.thumbnail.endsWith('.jpg'));
    }
    );
  }

  goBack() {
    this.location.back();
  }

}
