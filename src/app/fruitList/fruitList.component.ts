import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleFruitComponent } from './single-fruit/single-fruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
    selector: 'app-fruitList',
    standalone: true,
    imports: [CommonModule, SingleFruitComponent],
    templateUrl: './fruitList.component.html',
    styleUrl: './fruitList.component.scss'
})
export class FruitListComponent {
    fruitlistdata = inject(FruitlistdataService);

    // fontColorGood = 'green';
    // fontColorBad = 'red';
    // fontBold = 'bold';

    howItWorks = "super dupa";

    addComment(comment: string, index: number) {
        this.fruitlistdata.addCommentToFruit(comment, index);
    }
}