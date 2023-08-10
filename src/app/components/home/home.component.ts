import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chartData: Array<{ name: string, category: string, data: number[] }> = [];

  onChartGenerated(data: { name: string, category: string, data: number[] }) {
    this.chartData.push(data);
  }
}
