import { Injectable } from '@angular/core';

export interface Timezone {
  label: string;
  offset: number;
}

@Injectable({
  providedIn: 'root',
})
export class TimezoneService {
  private timezones: Timezone[] = Array.from({ length: 24 }, (_, i) => {
    const offset = i - 12;
    const label = `UTC${offset >= 0 ? '+' + offset : offset}`;
    return { label, offset };
  });

  getTimezones(): Timezone[] {
    return this.timezones;
  }

  getCurrentTime(offset: number): string {
    const utc = new Date();
    const local = new Date(utc.getTime() + offset * 60 * 60 * 1000);
    return local.toLocaleTimeString();
  }
}
