import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, RadioButtonComponent } from "@syncfusion/ej2-angular-buttons";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   @ViewChild('sidebar') sidebar: SidebarComponent;
    public type: string = 'Push';
    public target: string = 'content';
    @ViewChild('togglebtn')
    public togglebtn: ButtonComponent;
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
         this.sidebar.position = "Right"
    }
    btnClick() {
        if (this.togglebtn.element.classList.contains('e-active')) {
            this.sidebar.hide();
        } else {
            this.sidebar.show();
        }
    }
    closeClick() {
        this.sidebar.hide();
        this.togglebtn.element.classList.remove('e-active');
    }
    @ViewChild('radio')
    public radiobutton: RadioButtonComponent;
    public changeHandler(args: any): void {
        this.sidebar.position = (args.event.target.ej2_instances[0].label == "Left") ? "Left" : "Right";
        
    }

  constructor() { }

  ngOnInit() {
  }

}
