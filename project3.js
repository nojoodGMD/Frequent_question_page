//Variables
const accordion = document.getElementsByClassName('content-container');

//To access all the elements of the content-container
for(i=0 ; i<accordion.length ; i++){
    accordion[i].addEventListener('click',function(){
        console.log(accordion[i])
        //reference the object which the function is its property (or in other meaning)
        //reference the object that currently calling the function by using 'this' keyword which in this case 'accordion
       this.classList.toggle('active');
    })
}