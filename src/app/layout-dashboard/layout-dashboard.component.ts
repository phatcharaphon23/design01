import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.scss']
})
export class LayoutDashboardComponent {
  navbarOpen: boolean = true;
  desktopViewWidth: number = 770;

  ngOnInit(){
    this.onResize(window.innerWidth);
  }
  @HostListener('window.resize', ['$event.target.innerWidth'])
  onResize(innerWidth: any){
    this.navbarOpen = innerWidth >= this.desktopViewWidth;
  }


}
