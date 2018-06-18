

$(()=>{
  //global variables
  let alternate = true
  let currentPlayer = 1
  let gameCounter = 0
  const $gameContainer = $('.game-container')


  //Click event

  const $clicked = (event)=>{
    const $clickedBox = $(event.target)
      //uses global variable to switch from on player to another
    if (alternate === true) {
      $clickedBox
      //add class to assign box to player who clicked
      .addClass('deathEaterPlay')
      .attr('player', '1')
      .off()
      currentPlayer = 1
      //prevent change of game piece once played
      alternate = false
      //turn off click so gamepiece cannot be changed
    } else {
      $clickedBox
      .addClass('oOPPlay')
      .attr('player', '2')
      .off()
      currentPlayer = 2
      alternate = true
    }
      // To Check Win
      // have to have four matching classes in a row
      // create winner variable (let) and change to either deathEater or oOP
      //on win activate modal with win phrase "DE won!" or "OoP won!"

      // create a function to check to see if adjacent rows have matching classes
    const checkNextBox = ($clickedBox, row, col)=>{
      //get current cell position
      let boxCurRow = Number($clickedBox.attr('row'))
      let boxCurCol = Number($clickedBox.attr('col'))
      // console.log('current clicked box row: ' + boxCurRow + ', ' + 'current clicked box col: ' + boxCurCol);
      // find next cell overflow
      let nextRowNum = boxCurRow+row
      let nextColNum = boxCurCol+col
      let $nextBox = $(`div[row=${nextRowNum}][col=${nextColNum}]`)
      // console.log('the next box is: ' , $nextBox);

      let rowNum = 6
      let colNum = 6
      let foundMatch = true
      // loop to check boxes
      while (
        (nextRowNum > 0) && (nextColNum > 0) && (nextRowNum <= rowNum) && (nextColNum <= colNum) && (foundMatch)){
          console.log('current player is: ' , currentPlayer)
          console.log($nextBox.attr('player'));
          if ($nextBox.attr('player') == currentPlayer) {
            console.log('matched');
            gameCounter ++
          } else {
            console.log('not there yet...');
            foundMatch = false
          }
          nextRowNum += row
          nextColNum += col
          $nextBox = $(`div[row=${nextRowNum}][col=${nextColNum}]`)
        }
    }
    checkNextBox($clickedBox, 0, 1);
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


})


// test test test repo test
