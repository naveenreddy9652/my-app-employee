import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structuraldirectives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structuraldirectives.component.html',
  styleUrl: './structuraldirectives.component.css'
})
export class StructuraldirectivesComponent {

  public colors : string[] = ['white', 'red', 'blue', 'yellow', 'green']
  
  public fruits: string[] = ['blue', 'red', 'orange']

  public products : any[] = [
    {
      name: 'pen', price: 30,
    },
    {
      name: 'ball', price: 50,
    },
    {
      name: 'bat', price: 500,
    }
  ]
  public colorName: string = ''
  public num: number = 0;
  



}
