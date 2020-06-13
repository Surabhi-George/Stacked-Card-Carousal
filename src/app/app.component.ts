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
            photo: 'https://data.whicdn.com/images/303284270/original.jpg?t=1513309244',
        },            
        {
            photo: 'https://lh3.googleusercontent.com/proxy/WxqX-aIgsGZPJwYcJqImv7YvbxSmzV6LVoH6XVb153-FHpiXVdAksBEyrsXR9o5-fm5Pk8EVT_moCwVxTmNE881wSPCab-DUrofvkYYOJFvKEQTsbxqNBB0lFi0G7bQvfDuh4co5oVeNWeyL6fb3SB7Gi8yWyUC2Q3LrnUrp4A_-sKN2CG5U-hoHNQ',
        },
        {
            photo: 'https://i.pinimg.com/originals/62/76/e8/6276e82ccfb617ddd26973056234ef9e.jpg',
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
