import { AfterViewInit, Component, Input, ViewChild, ElementRef } from '@angular/core';
import Chart, { ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-chart-display',
  templateUrl: './chart-display.component.html',
  styleUrls: ['./chart-display.component.scss']
})
export class ChartDisplayComponent implements AfterViewInit {
  @Input() chartName: string = '';
  @Input() chartCategory: string = 'Bar';
  @Input() chartData: number[] = [];

  @ViewChild('chartCanvas') chartCanvasRef!: ElementRef;

  ngAfterViewInit() {
    const ctx = this.chartCanvasRef.nativeElement.getContext('2d');

    const chartConfig: ChartConfiguration<'bar' | 'line' | 'scatter' | 'pie' | 'doughnut', number[], string> = {
      type: this.chartCategory.toLowerCase() as 'bar' | 'line' | 'scatter' | 'pie' | 'doughnut',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset Label',
            data: this.chartData,
            backgroundColor: ['red', 'green', 'blue']
          }
        ]
      }
    };

    new Chart(ctx, chartConfig);

  }
}
