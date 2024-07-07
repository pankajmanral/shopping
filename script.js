const card = document.getElementsByClassName('card');

for (let i=0;i<card.length;i++){
    card[i].addEventListener('click',function(){
        window.location.href = './details.html'
    })
}