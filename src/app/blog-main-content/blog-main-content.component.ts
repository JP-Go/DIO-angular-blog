import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-main-content.component.html',
  styleUrl: './blog-main-content.component.sass',
})
export class BlogMainContentComponent {}
