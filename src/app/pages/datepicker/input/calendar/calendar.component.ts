import {Component, OnInit} from '@angular/core';

interface YearDecade {
  from: number,
  to: number
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  daysName: string[] = [
    'Lun',
    'Mar',
    'Mie',
    'Jue',
    'Vie',
    'Sab',
    'Dom',
  ]
  monthName: string[] = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ]
  days!: number[]
  years!: number[]

  private yearSelect!: number
  private monthSelect!: number

  stateView: 'year' | 'month' | 'day' = 'day'
  dateNow: Date = new Date()
  initYearDecade!: YearDecade


  constructor() {
    this.yearSelect = this.dateNow.getFullYear()
    this.monthSelect = this.dateNow.getMonth()
    this.setRangeYears()
    this.generateDaysByMonthYear(this.yearSelect, this.monthSelect)

  }

  ngOnInit(): void {

  }

  //#region InitialValues
  setRangeYears() {
    // Set Year Decade
    const yearPart = this.dateNow.getFullYear().toString().substring(0, 3)
    let yearFrom = parseInt(yearPart + '0')
    this.initYearDecade = {
      from: yearFrom,
      to: yearFrom + 9
    }
  }

  //#endregion

  private generateDays(length: number) {
    this.days = Array.from<number>({length})
      .map((item, idx) => idx + 1)
  }

  private generateDaysByMonthYear(year: number, month: number) {
    let ultimoDia = new Date(year, month + 1, 0);
    this.generateDays(ultimoDia.getDate())
  }

  private generateYears(initial: number, cant: number = 10) {
    this.years = Array.from({length: cant})
      .map((item, idx) => initial + idx)
  }

  clickItemMonth(month: number) {
    this.generateDaysByMonthYear(this.yearSelect, month)
    this.monthSelect = month
    this.stateView = 'day'
  }

  clickItemYear(year: number) {
    this.yearSelect = year
    this.stateView = 'month'
  }

  clickPrev() {
    if (this.stateView == 'day') {
      // Move Month
      const prevYear = (this.monthSelect - 1) < 0
      this.monthSelect = prevYear ? 11 : this.monthSelect - 1
      this.yearSelect -= prevYear ? 1 : 0
      this.generateDaysByMonthYear(this.yearSelect, this.monthSelect)
    }
    if (this.stateView == 'month') {
      // Move Year
      this.yearSelect -= 1
    }
    if (this.stateView == 'year') {
      // Move Year Decade
      const {from, to} = this.initYearDecade
      this.initYearDecade = {
        from: from - 10,
        to: to - 10
      }
      this.generateYears(this.initYearDecade.from)
    }
  }

  clickNext() {
    if (this.stateView == 'day') {
      // Move Month
      const nextYear = (this.monthSelect + 1) > 11
      this.monthSelect = nextYear ? 0 : this.monthSelect + 1
      this.yearSelect += nextYear ? 1 : 0
      this.generateDaysByMonthYear(this.yearSelect, this.monthSelect)
    }

    if (this.stateView == 'month') {
      // Move Year
      this.yearSelect += 1
    }

    if (this.stateView == 'year') {
      // Move Year Decade
      const {from, to} = this.initYearDecade
      this.initYearDecade = {
        from: from + 10,
        to: to + 10
      }
      this.generateYears(this.initYearDecade.from)
    }

  }

  get isToday() {
    return this.dateNow.getDate()
  }

  get label() {
    const labels = {
      'year': `${this.initYearDecade.from} - ${this.initYearDecade.to}`,
      'month': this.yearSelect,
      'day': `${this.monthName[this.monthSelect]} ${this.yearSelect}`
    }
    return labels[this.stateView]
  }

  get firstDay() {
    let day = new Date(this.yearSelect, this.monthSelect, 1).getDay();
    return 'first-day-' + day
  }

  changeView() {
    if (this.stateView == 'day')
      this.stateView = 'month'
    else if (this.stateView == 'month') {
      this.stateView = 'year'
      this.generateYears(this.initYearDecade.from)
    }
  }

}
