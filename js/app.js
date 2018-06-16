

$(()=>{
  //global variables
  let alternate = true
  let $box = $('.square')
  let $gameContainer = $('.game-container')

  //Click event
  const $clicked = (event)=>{
    const $clickedBox = $(event.target)
      //uses global variable to switch from on player to another
      if (alternate === true) {
        $clickedBox
        //assign background image to show gamepiece
        .css('background-image', 'url(img/Death-Eater-gamepiece.jpg)')
        //add class to assign box to player who clicked
        .addClass('deathEaterPlay')
        //prevent change of game piece once played
        alternate = false
        //turn off click so gamepiece cannot be changed
        $clickedBox.off('click')
      } else {
        $clickedBox
        .css('background-image', 'url(img/oop-gamepiece2.jpg)')
        .addClass('oOPPlay')
        alternate = true
        $clickedBox.off('click')
      }
      checkWin();
  }

  const makeBoard = ()=>{
    for (let i = 0; i < 36; i++){
      $gameContainer.append(
        $('<div>')
        .addClass('square')
        .attr('id', 'box'+i)
        .on('click', $clicked)
      )
    }
  }

  $box.on('click', $clicked)

  // to check win
  // create a function to check to see if adjacent rows have matching classes
  // have to have four matching classes in a row
  // create winner variable (let) and change to either deathEater or oOP

  // const checkWin = ()=>{
  //     const sibs = $('.box').siblings('.deathEaterPlay')
  //     console.log(sibs);
  // }







  makeBoard()


})
