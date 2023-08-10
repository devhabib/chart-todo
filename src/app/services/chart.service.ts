import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private charts: any[] = [];

  constructor() { }

  createChart(name: string, type: string) {
    const newChart = {
      name,
      type,
    };
    this.charts.push(newChart);
  }

  getAllCharts(): any[] {
    return this.charts;
  }
}
