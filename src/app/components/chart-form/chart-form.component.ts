import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
  styleUrls: ['./chart-form.component.scss']
})
export class ChartFormComponent {
  chartName: string = '';
  chartCategory: string = 'Bar';

  @Output() chartData = new EventEmitter<{ name: string, category: string, data: number[] }>();
  @Output() deleteCharts = new EventEmitter<void>();

  onSubmit() {
    const data = {
      name: this.chartName,
      category: this.chartCategory,
      data: [5, 18, 15, 25, 20]
    };

    this.chartData.emit(data);
    this.clearForm();
  }

  onDeleteCharts() {
    this.deleteCharts.emit();
  }
  clearForm() {
    this.chartName = '';
    this.chartCategory = 'Bar';
  }

}
