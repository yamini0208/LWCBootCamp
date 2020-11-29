import { LightningElement } from 'lwc';

export default class Ifelseexample extends LightningElement {
    tompic=true;
    Brand="Show Jerry";
    handleClick(){
        if(this.Brand=='Show Jerry'){
        this.tompic=false;
        this.Brand="Show Tom";
        }else{
            this.tompic=true;
            this.Brand="Show Jerry";
        }
    }
}