const body = document.querySelector('body');


function togleBackground(){    
    (body.classList.contains('light'))?
    body.classList.remove('light'):
    body.classList.add('light');
        
}