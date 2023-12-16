import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../@types/article';
import { FeaturedArticleComponent } from '../featured-article/featured-article.component';

@Component({
  selector: 'blog-main-content',
  standalone: true,
  imports: [CommonModule, FeaturedArticleComponent],
  providers: [ArticleService],
  templateUrl: './blog-main-content.component.html',
  styleUrl: './blog-main-content.component.sass',
})
export class BlogMainContentComponent {
  articleService = inject(ArticleService);
  featuredArticle?: Article;
  constructor() {
    this.featuredArticle = this.articleService.getFeaturedArticle();
  }
}
