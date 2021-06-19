import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imageDetailsConstant } from '../common/constant/image-details-constant';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  pageHeading: string;
  pageName: string;
  images: any[];
  showModal: boolean;
  selectedImg: any;
  selectedIndex: any;
  imageload: number;
  noOfImageLoading = 0;
  height: any;
  width: any;
  isImgLoading: boolean;
  isclicked: boolean;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageName = this.route.params['value'].albumLocation;
    this.pageHeading = imageDetailsConstant[this.pageName].heading;
    this.images = imageDetailsConstant[this.pageName].images;
    this.noOfImageLoading = this.noOfImageLoading + this.images.length;
    this.showModal = false;
    this.imageload = 4;
    this.isclicked = false;
    this.calculateHeightAndWidth();    
  }

  imgClicked(img, index): void {
    this.isImgLoading = true;
    this.selectedImg = img;
    this.showModal = true;
    this.selectedIndex = index;
  }

  close(): void {
    this.showModal = false;
    this.selectedImg = null;
  }

  loadMore(): void {
    this.imageload = this.imageload + 4 ;
  }

  modalDetailsClick(event: Event): void {
    event.stopPropagation();
    if(this.isclicked) {
      this.isclicked = false;
      this.close();
    } else {
      this.isclicked = true;
    }
    setTimeout(() => {
      this.isclicked = false
    }, 500);
  }

  nextImg(event: Event, reverse): void {
    event.stopPropagation();
    this.isImgLoading = true;
    if(reverse) {
      this.selectedIndex = this.selectedIndex -1;
    } else {
      this.selectedIndex = this.selectedIndex +1;
    }
    this.selectedImg = this.images[this.selectedIndex];
  }

  onLoad(): void {
    this.noOfImageLoading--;
  }

  onImgLoad() {
    this.isImgLoading = false;
  }

  calculateHeightAndWidth(): void {
    this.showModal = false;
    let bheight = window.innerHeight;
    let bwidth = window.innerWidth;    
    if(bwidth > 720 ) {
      bwidth = 720;
    }
    if(bwidth/bheight > 1.33) {
      this.width = Math.floor(bheight * 1.33);
      this.height = bheight;
    } else {
      this.width = bwidth;
      this.height =  Math.floor(bwidth / 1.33);
    }
  }

}
