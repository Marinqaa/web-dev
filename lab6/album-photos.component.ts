// album-photos.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService, Photo } from '../albums.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(albumId).subscribe(
      data => this.photos = data
    );
  }

  goBack(): void {
    window.history.back();
  }
}