

$(()=>{
  //global variables
  let rows = 6
  let cols = 7
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
  //on click remove all added classes/id's on gamepiece div's that occurred when player clicked box div
  const $resetBtn = $('<button>').text('Reset the game').addClass('btn')
  $('#aside-content').append($resetBtn)
  $resetBtn.on('click', ()=>{
    let playedBox = $('.square')
    playedBox.removeClass('deathEaterPlay')
    playedBox.removeClass('oOPPlay')
  })


  //Making the game board
  const makeBoard = ()=>{
    //make loops that adds a 6x7 grid to game container
    //first loop to make rows and append to container
    for (let row = 0; row < rows; row++){
      const $row = $('<div>').addClass('row')
      // now create a loop to make columns and append to the rows
      for (let col = 0; col < cols; col++) {
        const $col = $('<div>')
          $col
          //add class for easy grabbing
          .addClass('square')
          //////// add id for individual numbers ////////////
          //add onClick function
          .on('click', $clicked)
          $row.append($col)
      }
      $gameContainer.append($row)
    }
  }

  // Valid boxes
  // If a box has has a piece below it, it can be clicked and played
  // If a box does not have a piece below it, it is not valid for play

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
