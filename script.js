

const person = document.querySelector('.person');

const checkpoints = document.querySelectorAll('.checkpoint');
const flag = document.querySelector('#flag');

document.body.addEventListener('keydown', (e)=>{
  e.keyCode === 88 ? goForward() : 
      e.keyCode === 90 ? goBack() : false;
})


setInterval(function(){
  document.body.addEventListener('keydown', function (e) {
      console.log('go anim')
      person.style;
  }, {once: true})
}, 1000)


function goForward(){
    let curTabIndex = Number(document.activeElement.getAttribute('tabindex'));
    console.log(curTabIndex, "табиндекс моргающего чекпоинта");

    let activeElem = checkpoints[Number(curTabIndex - 1)]
    const[bottom, left] = checkpoints[curTabIndex-1].dataset.position.split(' ')

    if (curTabIndex < 6){
        activeElem.blur();
        checkpoints[curTabIndex].focus()
        person.style.bottom = `${bottom}%`;
        person.style.left = `${left}%`;
    }else if (curTabIndex == 6){
        person.style.bottom = `${bottom}%`;
        person.style.left = `${left}%`;
        flag.style.bottom = `75%`;
    }
}



function goBack() {
  let curTabIndex = Number(document.activeElement.getAttribute('tabindex'));
  console.log(curTabIndex, "табиндекс моргающего чекпоинта");

  let activeElem = checkpoints[Number(curTabIndex - 1)]

  if(curTabIndex > 1){
    const[bottom, left] = checkpoints[curTabIndex - 2].dataset.position.split(' ')
    activeElem.blur()
    checkpoints[curTabIndex-2].focus()
    person.style.bottom = `${bottom}%`;
    person.style.left = `${left}%`;
  }else if (curTabIndex === 1) false

}
