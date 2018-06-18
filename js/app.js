

$(()=>{
  //global variables
  let alternate = true
  const $gameContainer = $('.game-container')

  //Click event

  const $clicked = (event)=>{
    const $clickedBox = $(event.target)
      //uses global variable to switch from on player to another
      if (alternate === true) {
        $clickedBox
        //add class to assign box to player who clicked
        .addClass('deathEaterPlay')
        //prevent change of game piece once played
        alternate = false
        //turn off click so gamepiece cannot be changed
      } else {
        $clickedBox
        .addClass('oOPPlay')
        alternate = true
      }
      // checkWin();
  }
  $('.square').on('click', $clicked)

  //Reset Button
  //on click remove all added classes/id's on gamepiece div's that occurred when player clicked box div
  const $resetBtn = $('<button>').text('Reset the game').addClass('btn')
  $('#aside-content').append($resetBtn)
  $resetBtn.on('click', ()=>{
    let playedBox = $('.square')
    playedBox.removeClass('deathEaterPlay')
    playedBox.removeClass('oOPPlay')
  })

  // Valid boxes
  // If a box has has a piece below it, it can be clicked and played
  // If a box does not have a piece below it, it is not valid for play

  // To Check Win
  // create a function to check to see if adjacent rows have matching classes
  // have to have four matching classes in a row
  // create winner variable (let) and change to either deathEater or oOP
  //on win activate modal with win phrase "DE won!" or "OoP won!"

})


// test test test repo test
