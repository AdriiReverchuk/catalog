import {filesCatalog} from "./model"
export class FormView {
  constructor(){}
  addItems(arr:filesCatalog,):void{
  const btn =this.getElement(".btn")
    btn.addEventListener('click',(evt)=>{
      const inpId = this.getElement('#id-form');
      const inpTitle = this.getElement('#title-form');
      const inpTags = this.getElement('#tags-form');
      const inpSelect = this.getElement('#select')
      if((<HTMLInputElement>inpId).value !='' && (<HTMLInputElement>inpTitle).value !=''&& (<HTMLInputElement>inpTags).value !=''){
        if(this.getElement('#message')){
          this.getElement('#message').remove()
        }
        switch ((<HTMLInputElement>inpSelect).value) {
          case 'films':
            arr.film.push({
              id: (<HTMLInputElement>inpId).value,
              title: (<HTMLInputElement>inpTitle).value,
              arrTags: [`#${(<HTMLInputElement>inpTags).value}`],
            })
            break;
          case 'books':
            arr.books.push({
              id: (<HTMLInputElement>inpId).value,
              title: (<HTMLInputElement>inpTitle).value,
              arrTags: [`#${(<HTMLInputElement>inpTags).value}`],
            })
            break;
          case 'podcasts':
            arr.podcast.push({
              id: (<HTMLInputElement>inpId).value,
              title: (<HTMLInputElement>inpTitle).value,
              arrTags: [`#${(<HTMLInputElement>inpTags).value}`],
            })
            break;
          case 'musics':
            arr.music.push({
              id: (<HTMLInputElement>inpId).value,
              title: (<HTMLInputElement>inpTitle).value,
              arrTags: [`#${(<HTMLInputElement>inpTags).value}`],
            })
            break;
        }
        const arrItem = document.querySelectorAll('.item');
        if(arrItem){
                if (arrItem){
                    for(let i=0;i<arrItem.length;i++){
                        arrItem[i].remove();
                    }
                }
        }
      }
      else{
        const message = document.createElement('p');
        message.textContent = "All fields must be filled!";
        message.style.color = 'red';
        message.style.textAlign ='center';
        message.id ='message'
        this.getElement('#input-form').append(message);
      }
      
    })  
    
  }
  getElement(selector:string){
    const elem = document.querySelector(selector);
    return elem
  }
}