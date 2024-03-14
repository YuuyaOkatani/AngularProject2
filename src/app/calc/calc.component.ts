import { Component, numberAttribute } from "@angular/core";
import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";


@Component({
    

    selector:'app-calc',
    
  

    
    templateUrl:'./calc.component.html',
    
    

    
})
export class CalcComponent{

    resultado: number = 0;
    num1: number = 0; 
    num2 : number = 0; 
  
    calc(operacao: string){

        switch(operacao){
            case"soma":
            this.resultado = Number(this.num1) +  Number(this.num2) ; 
            break; 
            
            case"subtracao":
            this.resultado = Number(this.num1) - Number(this.num2);   
            break;

            case"divisao":
            this.resultado = Number(this.num1) / Number(this.num2);
            break; 

            case"multiplicacao":
            this.resultado = Number(this.num1) * Number(this.num2); 
            break; 

            case"raiz":
            this.resultado = Math.pow(this.num1 , 1/this.num2); 
            break; 

            case"elevado":
            this.resultado = Math.pow(this.num1 , this.num2); 
            break;

        }


    }
    images: string[] = [
        'F:\Projetos\calc4\src\assets\foto1.jpg', 
        'F:\Projetos\calc4\src\assets\foto2.jpg'

    ];

    showNavigationArrows = true; 
    showNavigationIndicators = true; 
    
    



}