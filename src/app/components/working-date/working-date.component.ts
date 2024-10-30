import { Component, ElementRef, output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-working-date',
  standalone: true,
  imports: [],
  templateUrl: './working-date.component.html',
  styleUrl: './working-date.component.scss'
})
export class WorkingDateComponent {
  // Static bằng true để cập nhập lại trạng thái của view khi nhắn scroll
  @ViewChild('dateScroll', { static: true }) dateScroll!: ElementRef;

  dates: { day: string, slots: number }[] = [];
  times: string[] = []
  indexDateActive = 0;
  indexTimeActive = -1;

  dateTimeCurrent = output<{date: Date, timeStart: Date | null, timeEnd: Date | null}>();

  ngOnInit(): void {
    this.generateTimeSlots();
    this.generateDates();
  }

  indexDateActiveChange(index: number) {
    this.indexDateActive = index;
    this.dateTimeCurrent.emit({
      date: this.getDateFromIndex(this.indexDateActive),
      timeStart: this.getTimeFromIndex(this.indexTimeActive),
      timeEnd: this.getTimeEndFromIndex(this.indexTimeActive)
    });
  }

  indexTimeActiveChange(index: number) {
    this.indexTimeActive = index;
    this.dateTimeCurrent.emit({
      date: this.getDateFromIndex(this.indexDateActive),
      timeStart: this.getTimeFromIndex(this.indexTimeActive),
      timeEnd: this.getTimeEndFromIndex(this.indexTimeActive)
    });
  }
  getDateFromIndex(index: number): Date {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  }
  
  getTimeFromIndex(index: number): Date | null {
    if (index === -1) return null;
    const timeSlot = this.getTimeSlotByIndex(index);
    if (!timeSlot) return null;
    
    const [startTime, startEnd] = timeSlot.split(' - ');
    const [hours, minutes] = startTime.split(':').map(Number);
    
    const time = new Date();
    time.setHours(hours, minutes, 0, 0);
    return time;
  }

  getTimeEndFromIndex(index: number): Date | null {
    if (index === -1) return null;
    const timeSlot = this.getTimeSlotByIndex(index);
    if (!timeSlot) return null;
    
    const [startTime, startEnd] = timeSlot.split(' - ');
    const [hours, minutes] = startEnd.split(':').map(Number);
    
    const time = new Date();
    time.setHours(hours, minutes, 0, 0);
    return time;
  }

   // Hàm tạo 14 ngày tiếp theo
   generateDates() {
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = this.getDayOfWeek(date);
      const day = `${dayOfWeek}, ${this.formatDate(date)}`;
      this.dates.push({ day, slots: this.times.length });
    }
  }

  // Hàm tạo các time slots từ 7:30 đến 16:30 với khoảng cách 1 tiếng
  generateTimeSlots() {
    const startHour = 7;
    const startMinute = 30;
    const endHour = 16;
    const timeSlots = [];

    let currentHour = startHour;
    let currentMinute = startMinute;

    while (currentHour < endHour || (currentHour === endHour && currentMinute === 0)) {
      const startTime = this.formatTime(currentHour, currentMinute);

      // Tăng thêm 1 tiếng
      currentHour += 1;

      const endTime = this.formatTime(currentHour, currentMinute);
      timeSlots.push(`${startTime} - ${endTime}`);
    }

    this.times = timeSlots;
  }

  // Hàm format ngày
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}-${month}`;
  }

  // Hàm lấy thứ trong tuần
  getDayOfWeek(date: Date): string {
    const daysOfWeek = ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'];
    return daysOfWeek[date.getDay()];
  }

  // Hàm format thời gian
  formatTime(hour: number, minute: number): string {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  }

  getTimeSlotByIndex(index: number): string | null {
    return this.times[index] || null;
  }

  scrollLeft() {
    this.dateScroll.nativeElement.scrollBy({ left: -836, behavior: 'smooth' });
  }

  scrollRight() {
    this.dateScroll.nativeElement.scrollBy({ left: 836, behavior: 'smooth' });
  }
}
