

$(()=>{

  let alternate = true
  let $box = $('.box')

  const $clicked = (event)=>{
    const $clickedBox = $(event.target)
      if (alternate === true) {
        $clickedBox
        .css('background-image', 'url(img/Death-Eater-gamepiece.jpg)')
        // console.log('ive been clicked!');
        alternate = false
        $clickedBox.off('click')
      } else {
        $clickedBox
        .css('background-image', 'url(img/oop-gamepiece2.jpg)')
        alternate = true
        $clickedBox.off('click')
      }
  }


  $box.on('click', $clicked)
















})
