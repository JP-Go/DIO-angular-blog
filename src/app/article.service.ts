import { Injectable } from '@angular/core';
import { Article } from './@types/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    {
      title: 'The end of the world is far away',
      summary:
        'Scientists believe that the end of the world is far away. "Maybe in a million years" says the geologist Nakamura Hideo',
      pictureUrl: 'https://picsum.photos/400',
      publishedAt: new Date(Date.UTC(2023, 2, 3)),
    },
    {
      title: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
      summary:
        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
      publishedAt: new Date('2023-03-03T00:00:00Z'),
      pictureUrl: 'https://picsum.photos/400',
    },
    {
      title: 'Aliquam erat volutpat. In congue.',
      summary:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      publishedAt: new Date('2023-03-03T00:00:00Z'),
      pictureUrl: 'https://picsum.photos/400',
    },
    {
      title:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      summary:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
      publishedAt: new Date('2023-03-03T00:00:00Z'),
      pictureUrl: 'https://picsum.photos/400',
    },
    {
      title: 'Proin at turpis a pede posuere nonummy. Integer non velit.',
      summary: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      publishedAt: new Date('2023-03-03T00:00:00Z'),
      pictureUrl: 'https://picsum.photos/400',
    },
  ];
  featuredArticle?: Article = undefined;

  constructor() {
    this.featuredArticle = this.articles.at(
      Math.floor(Math.random() * this.articles.length),
    );
  }

  getFeaturedArticle() {
    return this.featuredArticle;
  }

  getNonFeaturedArticles() {
    return this.articles.filter((article) => this.featuredArticle !== article);
  }
}
