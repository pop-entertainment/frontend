import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { StoryCarouselComponent } from '../../shared/components/story-carousel/story-carousel.component';
import { PopularGoodsComponent } from './popular-goods/popular-goods.component';
import { GoodsCatalogComponent } from './goods-catalog/goods-catalog.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatButtonModule,
    SectionHeaderComponent,
    StoryCarouselComponent,
    PopularGoodsComponent,
    GoodsCatalogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
