import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent {
  reservationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.reservationForm.invalid) {
      return;
    }
    

    const reservationData = this.reservationForm.value;
    this.reservationService.createReservation(reservationData)
      .subscribe(
        (response) => {
          console.log('Reservation successful:', response);
          this.submitted = false;
          this.reservationForm.reset();
        },
        (error) => {
          console.error('Reservation failed:', error);
          this.submitted = false;
        }
      );
  }
  

}
