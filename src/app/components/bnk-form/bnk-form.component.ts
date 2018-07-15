import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Member } from '../../models/member';
import { UrlValidator } from '../../validators/url.validator';
@Component({
  selector: 'app-bnk-form',
  templateUrl: './bnk-form.component.html',
  styleUrls: ['./bnk-form.component.css']
})
export class BnkFormComponent implements OnInit {
  memberForm: FormGroup;
  memberData: Member;
  constructor(private fb: FormBuilder, private router: ActivatedRoute,
    private service: BnkService, private route: Router
  ) { }

  ngOnInit() {
    this.service.getMemberInBnk(this.router.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.memberData = data;
        this.memberForm = this.fb.group({
          _id: [data._id, Validators.required],
          name: [data.name, Validators.required],
          imgUrl: [data.imgUrl, [Validators.required, UrlValidator.validate]],
          instagramId: [data.instagramId, Validators.required]
        });
        console.log(this.memberForm);
      });
  }

  reset() {
    this.memberForm.reset(this.memberData);
  }

  updateMember() {
    const bnkId = this.router.snapshot.paramMap.get('id');
    if (this.memberForm.valid) {
      this.service.updateMember(bnkId, this.memberForm.value).subscribe(result => {
      this.route.navigate(['admin']);
    },
      error => console.log(error));
    } else {
      alert('!!!');
      console.log(this.memberForm.get('imgUrl').getError('url'));
    }
  }
}
