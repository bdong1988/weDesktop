import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderReceiver } from '../../shared/orderReceiver';
import { UserProfileService } from '../../core/user-profile.service';

@Component({
  selector: 'app-edit-receiver',
  templateUrl: './edit-receiver.component.html',
  styleUrls: ['./edit-receiver.component.scss']
})
export class EditReceiverComponent implements OnInit {
  receiver: OrderReceiver;
  bSaving: boolean = false;
  constructor(
    private userProfileService: UserProfileService,
    private router: Router) { 
    this.receiver = this.userProfileService.getEditReceiver();
  }

  ngOnInit() {
  }

  onClickSave(): void {
    this.bSaving = true;  
    this.userProfileService.saveEditReceiver()
    .subscribe(
      () => {
        this.bSaving = false;
        this.router.navigate(['user/receivers']);
      },
      (error) => {
        this.bSaving = false;
        console.log(error);
      });
  }

}
