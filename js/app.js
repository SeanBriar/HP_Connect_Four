

$(()=>{

  // let alternate = true;  border: 1px solid orange;
  let $box = $('.box')

  const $clicked = (event)=>{
    const $clickedBox = $(event.target)
      $clickedBox
        .css({'background-image': 'img/death_eaters.jpg'})

      console.log('ive been clicked!');
  }


  $box.on('click', $clicked)
















})
