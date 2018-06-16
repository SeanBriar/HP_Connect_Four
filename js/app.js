

$(()=>{
  //global variables
  let alternate = true
  const $box = $('.square')
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

  //Reset Button
  const $resetBtn = $('<button>').text('Reset the game').addClass('btn')
  $('#aside-content').append($resetBtn)
  $resetBtn.on('click', ()=>{
    let playedBox = $('.square')
    playedBox.removeClass('deathEaterPlay')
    playedBox.removeClass('oOPPlay')
  })


  //Making the game board
  const makeBoard = ()=>{
    //make loop that adds a 6x6 grid to game container
    for (let i = 0; i < 36; i++){
      $gameContainer.append(
        $('<div>')
        //add class for easy grabbing
        .addClass('square')
        //add id for individual numbers
        .attr('id', 'box'+i)
        //add onClick function
        .on('click', $clicked)
      )
    }
  }

  //Reset Button
  //on click remove all added classes/id's on gamepiece div's that occurred when player clicked box div





  // To Check Win
  // create a function to check to see if adjacent rows have matching classes
  // have to have four matching classes in a row
  // create winner variable (let) and change to either deathEater or oOP

  // const checkWin = ()=>{
  //     const sibs = $('.box').siblings('.deathEaterPlay')
  //     console.log(sibs);
  // }



  makeBoard()


})
