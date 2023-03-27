import { Component, HostListener } from '@angular/core';
import { BehaviorSubject, forkJoin, fromEvent, map, Observable, take } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items:any[] = []
  currentPage: number = 0;
  pageSize: number = 10;
  isLoading = false;
  constructor(private appService: AppService) { }
 
  ngOnInit() {
    this.getData();
  }
 
  private getData() {
    this.isLoading = true;
    this.currentPage += 1
    this.appService.getData(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.items = [...this.items,...data];
      this.isLoading = false
    })
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    console.log(window.innerHeight , window.scrollY ,document.body.offsetHeight);
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.isLoading) {
      console.log('bottom');
      
      this.getData()
    }
  }
}