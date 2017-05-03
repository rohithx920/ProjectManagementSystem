import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'
@Component({
    selector: 'ai-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']  
})
export class StarComponent implements OnChanges { 
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> =new EventEmitter<string>();
    onClick(): void{
        console.log("j");
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!`)
    }
    
    ngOnChanges(): void{
        this.starWidth=this.rating* 86/5;
    }

}