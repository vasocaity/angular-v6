import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  bnkMembers: Member[];

  constructor(private service: BnkService) { }

  ngOnInit() {
    this.service.list().subscribe(members => {
      this.bnkMembers = members;
    });
  }
}
