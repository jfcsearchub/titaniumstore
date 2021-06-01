import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Member, members } from '../../members';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  member: Member|undefined;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const memberIdFromRoute = Number(routeParams.get('memberId'));

  // Find the product that correspond with the id provided in route.
  this.member = members.find(member => member.id === memberIdFromRoute);

  }

}