import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  BookingGroups,
  ProjectDataService,
  ProjectsService,
} from '@root/projects';
import { Booking, Project } from '@root/shared';

@Component({
  selector: 'app-itinerary-dashboard',
  templateUrl: './itinerary-dashboard.component.html',
  styleUrls: ['./itinerary-dashboard.component.scss'],
})
export class ItineraryDashboardComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  bookingGroups$: Observable<BookingGroups> = of([]);
  activeProject$: Observable<Project>;

  constructor(
    private dataService: ProjectDataService,
    private projectService: ProjectsService
  ) {
    this.bookings$ = this.dataService.getBookings();
    this.bookingGroups$ = this.dataService.getBookingGroupsByDate();
    this.activeProject$ = this.projectService.getActiveProject();
  }

  ngOnInit(): void {}
}
