// albums.component.ts
import {Component, OnInit} from '@angular/core';
import {AlbumsService, Album} from '../albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  error: string = '';

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {this.albums = data;});
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(data => {this.albums = this.albums.filter(album => album.id !== id);});
  }
}
