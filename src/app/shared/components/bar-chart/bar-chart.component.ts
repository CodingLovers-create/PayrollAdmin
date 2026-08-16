import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  @Input() labels: string[] = [];
  @Input() datasetLabel: string = 'Dataset';
  @Input() data: number[] = [];
  @Input() backgroundColor: string | string[] = '#005ac1';
  @Input() hoverBackgroundColor: string | string[] = '#004799';
  
  private chartInstance: Chart | null = null;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chartInstance && (changes['data'] || changes['labels'])) {
      this.updateChart();
    }
  }

  ngOnDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  private createChart() {
    if (!this.chartCanvas) return;
    
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.datasetLabel,
          data: this.data,
          backgroundColor: this.backgroundColor,
          hoverBackgroundColor: this.hoverBackgroundColor,
          borderRadius: 4,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(26, 28, 30, 0.9)',
            titleFont: { size: 13, family: 'system-ui, sans-serif' },
            bodyFont: { size: 13, family: 'system-ui, sans-serif' },
            padding: 10,
            cornerRadius: 8,
            displayColors: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)',
              drawTicks: false,
            },
            border: {
              display: false
            },
            ticks: {
              font: { family: 'system-ui, sans-serif', size: 11 },
              color: '#73777f',
              padding: 10
            }
          },
          x: {
            grid: {
              display: false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: {
              font: { family: 'system-ui, sans-serif', size: 12 },
              color: '#44474e',
              padding: 8
            }
          }
        }
      }
    });
  }

  private updateChart() {
    if (!this.chartInstance) return;
    this.chartInstance.data.labels = this.labels;
    this.chartInstance.data.datasets[0].data = this.data;
    if (this.backgroundColor) this.chartInstance.data.datasets[0].backgroundColor = this.backgroundColor;
    if (this.hoverBackgroundColor) this.chartInstance.data.datasets[0].hoverBackgroundColor = this.hoverBackgroundColor;
    this.chartInstance.update();
  }
}
