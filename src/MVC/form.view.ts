export class FormView {
  constructor(){}
  addItems():void {
    const btn =this.getElement('.btn')
    btn.addEventListener('click',(evt)=>{
      console.log('a');
    })
    console.log(btn);
    
  }
  getElement(selector:string){
    const elem = document.querySelector(selector);
    return elem
  }
}