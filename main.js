const animals = ['bird','bird','wolf','wolf','cat','cat','tucan','tucan','goose','goose','sheep','sheep','parrot','parrot','dog','dog','smallBird','smallBird']; // random animal
let cards=document.querySelectorAll('.cards'); // all cards
cards=[...cards]; // 

const startTime= new Date().getTime(); // our stoper
let activeCard=''; // active card add to array then we can compare
const activeCards=[];
const gamePairs=cards.length/2;
let gameResult=0;

const clickCard= function ()
{
    activeCard=this;
    if(activeCard==activeCards[0]) return;
    activeCard.classList.remove('hidden');
    if(activeCards.length===0)
    {
        activeCards[0]=activeCard
    }
    else
    {
        
        cards.forEach(card=>{
            card.removeEventListener('click', clickCard)
        })
        activeCards[1]=activeCard;

        setTimeout(()=>{
            if(activeCards[0].className===activeCards[1].className)
            {
                activeCards.forEach(item=>{
                    item.classList.add('off')
                });
                gameResult++
                cards=cards.filter(card=> !card.classList.contains('off'))
                // finish game
                if(gameResult===gamePairs)
                {
                    
                    const endTime= new Date().getTime();
                    const time=((endTime-startTime)/1000).toFixed(2);
                    setTimeout(()=>{
                    alert(`Twój czas to: ${time} s`)
                    location.reload();
                },200)
                }

            }
            else
            {
                activeCards.forEach(item=>{
                    item.classList.add('hidden')
                })

            }
                activeCard='';
                activeCards.length=0;
                cards.forEach(card=>{
                card.addEventListener('click', clickCard)
            })

        },500)
}
}

const lotter=()=>{
cards.forEach(card=>{
    const number=Math.floor(Math.random()*animals.length);
    card.classList.add(animals[number]);
    animals.splice(number,1);
})
setTimeout(()=>{
    cards.forEach(card=>{
        card.classList.add('hidden')
        card.addEventListener('click', clickCard)
    })
},2000)
};





lotter();