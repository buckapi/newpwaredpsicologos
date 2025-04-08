import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    // The accordion will work automatically with Bootstrap's data attributes
  }

  ngAfterViewInit() {
    // Initialize Owl Carousel
    $('.doctors-slider').owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,
      smartSpeed: 2000,
      navText: [
        '<i class="isax isax-arrow-left"></i>',
        '<i class="isax isax-arrow-right-1"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
  }
}
