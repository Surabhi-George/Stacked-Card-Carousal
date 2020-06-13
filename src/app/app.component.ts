import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    constructor( private eleRef: ElementRef ) { }

    ngOnInit(): void {
    }

    // slider screens
    slider_screens = [
        {
            photo: 'slide1.jpg',
        },            
        {
            photo: 'slide2.jpg',
        },
        {
            photo: 'slide3.jpg',
        }
        
    ]
    // slider click
    public show:number = 0;
    selectedItem: number = 0;
    clickedItem(index){
        this.show = index;
        this.selectedItem = index; 
        let curntdata = this.eleRef.nativeElement.querySelector('#item'+index);
        this.eleRef.nativeElement.querySelector('#slide_Warp').prepend(curntdata);
    };
}
