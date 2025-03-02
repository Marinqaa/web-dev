// album-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  title: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(
      data => {
        this.album = data;
      }
    );
  }

  updateAlbum(): void {
    if (this.album && this.title) {
      this.albumsService.updateAlbum(this.album.id, this.title).subscribe(
        updatedAlbum => {
          this.album = updatedAlbum;
        },
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}