import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneService, Timezone } from './timezone.service';

@Component({
  selector: 'app-timezone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss']
})
export class TimezoneComponent implements OnInit {
  private service = inject(TimezoneService);

  timezones: Timezone[] = [];
  selected: Timezone | null = null;

  ngOnInit(): void {
    this.timezones = this.service.getTimezones();
  }

  select(tz: Timezone): void {
    this.selected = tz;
  }

  getTime(offset: number): string {
    return this.service.getCurrentTime(offset);
  }
}
