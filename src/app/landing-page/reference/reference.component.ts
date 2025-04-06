import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ArrowComponent } from '../../shared/arrow/arrow.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { inject } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [ArrowComponent, CommonModule, TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})

export class ReferenceComponent {
  activeSection: number = 0;
  private viewportRuler = inject(ViewportRuler);
  private screenWidth: number = 0;
  @ViewChild('referenceContainer') referenceContainer!: ElementRef;
  
  references = [
    {project: 'references.references.1.project', name: 'references.references.1.name', description: 'references.references.1.desc'},
    {project: 'references.references.2.project', name: 'references.references.2.name', description: 'references.references.2.desc'},
    {project: 'references.references.3.project', name: 'references.references.3.name', description: 'references.references.3.desc'}
  ]

  ngAfterViewInit() {
    if (!this.referenceContainer) return;
    const container = this.referenceContainer.nativeElement;
    container.addEventListener('scroll', () => {
      this.updateActiveButton();
    });
  }

  constructor() {
    this.screenWidth = this.viewportRuler.getViewportSize().width;
  }

  @HostListener('window:resize')
  
  onResize() {
    this.screenWidth = this.viewportRuler.getViewportSize().width;
    this.updateActiveButton();
  }

  private getItemWidth(): number {
    return this.screenWidth >= 470 ? 350 : 280;
  }

  ngOnInit() {
    this.viewportRuler.change().subscribe(() => {
      this.screenWidth = this.viewportRuler.getViewportSize().width;
      this.updateActiveButton();
    });
  }

  private updateActiveButton() {
    if (!this.referenceContainer) return;
    const container = this.referenceContainer.nativeElement;
    const scrollPosition = container.scrollLeft;
    const itemWidth = this.getItemWidth();
    this.activeSection = Math.round(scrollPosition / itemWidth);
  }

  slideToNextCarousel(index: number) {
    if (!this.referenceContainer) return;
    this.activeSection = index;
    const container = this.referenceContainer.nativeElement;
    const items = container.getElementsByClassName('references-item');
    if (items[index]) {
      const itemWidth = this.getItemWidth();
      const scrollPosition = index * itemWidth;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth'});
    }
  }
}