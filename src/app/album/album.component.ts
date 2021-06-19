import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { albumDetailsConstant } from '../common/constant/album-details-constant';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumDetails: any[];
  albumName: string;
  albumHeading: string;
  noOfImageLoading = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=> {
        this.albumName = param.albumName;
        this.albumDetails = albumDetailsConstant[this.albumName].data;
        this.noOfImageLoading = this.noOfImageLoading + this.albumDetails.length;
        this.albumHeading = albumDetailsConstant[this.albumName].heading;
      }
    )
    
  }

  onLoad(): void {
    this.noOfImageLoading--;
  }

}
