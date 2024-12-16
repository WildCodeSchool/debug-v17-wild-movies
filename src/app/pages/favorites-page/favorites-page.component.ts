import { Component, inject } from '@angular/core';
import { MovieThumbnailComponent } from '../../components/movie-thumbnail/movie-thumbnail.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [MovieThumbnailComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent {
  favorites!: Movie[];
  private movieService: MovieService = inject(MovieService);

  ngOnInit() {
    this.favorites = this.movieService.getFavorites();
  }

  toggleFavorite(movie: Movie) {
    if (this.movieService.isFavorite(movie.id)) {
      this.movieService.removeFromFavorites(movie.id);
    } else {
      this.movieService.addToFavorites(movie);
    }
    this.favorites = this.movieService.getFavorites();
  }
}