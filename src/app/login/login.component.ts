import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public num1 : number= 0;
  public num2 : number= 0;
  public result1 : number = 0;
  public result2 : number = 0;
   area(){
    this.result1 = this.num1 * this.num2;
   }

   perimeter(){
    this.result2 = 2*(this.num1 + this.num2)
   }

   public num3 : number= 0;
   public result3 : number = 0;
   public result4 : number = 0;
    
 
   circlearea(){
     this.result3 = 3.14 * (this.num3 * this.num3)
    }
 
    circleperimeter(){
     this.result4 = 2*3.14*(this.num3)
    }
 
    public num4 : number= 0;
    public num5 : number= 0;

    public result5 : number = 0;

    bimCalculator(){
         this.result5 = this.num5 / ((this.num4 / 100) * (this.num4 / 100))
    }

}


