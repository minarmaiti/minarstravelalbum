import { Component, OnInit } from '@angular/core';
import { albumConstant } from '../common/constant/album-constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //url = `url("${albumConstant.himachal.base_image_url}")`
  recentAlbum: any[];
  internationalAlbum: any[];
  indiaAlbum: any[];
  noOfImageLoading = 0;
  constructor() { }
 
  ngOnInit(): void {
    this.recentAlbum = albumConstant.recent;
    // this.noOfImageLoading = this.noOfImageLoading + this.recentAlbum.length;
    this.internationalAlbum = albumConstant.international;
    this.noOfImageLoading = this.noOfImageLoading + this.internationalAlbum.length;
    this.indiaAlbum = albumConstant.india;

  }

  onLoad(): void {
    this.noOfImageLoading--;
  }

}
