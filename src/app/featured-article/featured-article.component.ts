import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from '../@types/article';

@Component({
  selector: 'featured-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-article.component.html',
  styleUrl: './featured-article.component.sass',
})
export class FeaturedArticleComponent {
  @Input() featuredArticle?: Article;
}
