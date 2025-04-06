// albums.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumUrl = 'https://jsonplaceholder.typicode.com';
  private albums: Observable<Album[]> | null = null;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumUrl}/albums/${id}`);
  }

  updateAlbum(id: number, title: string): Observable<Album> {
    return this.http.put<Album>(`${this.albumUrl}/albums/${id}`, { title });
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.albumUrl}/albums/${id}`);
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.albumUrl}/albums/${albumId}/photos`);
  }
}