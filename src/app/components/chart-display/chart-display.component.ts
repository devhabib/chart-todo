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

    const chartConfig: ChartConfiguration<'bar' | 'line' | 'pie' | 'doughnut', number[], string> = {
      type: this.chartCategory.toLowerCase() as 'bar' | 'line' | 'pie' | 'doughnut',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
          {
            label: 'Dataset Label',
            data: this.chartData,
            backgroundColor: ['#96B6C5', '#ADC4CE', '#7C9D96', '#7C9D96', '#A8A196']
          }
        ]
      }
    };

    new Chart(ctx, chartConfig);

  }
}
