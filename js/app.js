

$(()=>{
  //global variables
  let alternate = true
  let currentPlayer = 1
  let gameCounter = 0
  let maxWin = 3
  let rowNum = 6
  let colNum = 6
  const $gameContainer = $('.game-container')


  //Click event

  const $clicked = (event)=>{
    let gameCounter = 0
    const $clickedBox = $(event.target)
    // console.log($clickedBox);
      //uses global variable to switch from on player to another
    if (alternate === true) {
      $clickedBox
      //add class to assign box to player who clicked
      .addClass('deathEaterPlay')
      .attr('player', '1')
      // .off()
      currentPlayer = 1
      //prevent change of game piece once played
      alternate = false
      //turn off click so gamepiece cannot be changed
      match = true
    } else {
      $clickedBox
      .addClass('oOPPlay')
      .attr('player', '2')
      // .off()
      currentPlayer = 2
      alternate = true
      match = true
    }

    // To Check Win
    //on win activate modal with win phrase "DE won!" or "OoP won!"
    const calculateWin = ()=>{
      if (gameCounter >= maxWin) {
        console.log(gameCounter);
        console.log('winner');
        alert('someone has one!')
        // enable modus
        // enter winner info
      } else {
        console.log('no winner yet');
        // continue play
        //reset game gameCounter
        gameCounter = 0
      }
    }
    // have to have four matching classes in a row
    // create winner variable (let) and change to either deathEater or oOP
    const checkForWin = ($clickedBox)=> {
      console.log($clickedBox);
      console.log('check for win running');

      // cyle through the boxes until
      //horizonal wins
      checkNextBox($clickedBox, 0, 1) //left: add one column
      checkNextBox($clickedBox, 0 -1) //right: subtract one column
      calculateWin()


      // vertical wins
      checkNextBox($clickedBox, 1, 0) //up
      checkNextBox($clickedBox, -1, 0) //down
      calculateWin()


    } //ends checForkWin

      // create a function to check to see if adjacent rows have matching classes
    const checkNextBox = ($clickedBox, row, col)=>{
      // console.log('starting check next box');
      //get current cell position
      let boxCurRow = Number($clickedBox.attr('row'))
      let boxCurCol = Number($clickedBox.attr('col'))
      // console.log('current clicked box row: ' + boxCurRow + ', ' + 'current clicked box col: ' + boxCurCol);
      // find next cell overflow
      let nextRowNum = boxCurRow+row
      let nextColNum = boxCurCol+col
      let $nextBox = $(`div[row=${nextRowNum}][col=${nextColNum}]`)
      console.log('the next box is: ' , $nextBox);

      // loop to check boxes
      while (
        (nextRowNum > 0) && (nextColNum > 0) && (nextRowNum <= rowNum) && (nextColNum <= colNum) && (match) && (gameCounter <= maxWin)){
          // console.log('starting while loop');
          // console.log('current player is: ' , currentPlayer)
          // console.log('next box is ' , $nextBox);
          if ($nextBox.attr('player') == currentPlayer) {
            // console.log('matched');
            gameCounter ++

            //check next cell (depends on direction)
            nextRowNum += row
            nextColNum += col
            $nextBox = $(`div[row=${nextRowNum}][col=${nextColNum}]`)
            console.log('next box is: ' , $nextBox);
          } else {
            console.log('no match');
            match = false
            gameCounter = 0
          }
        } //ends whileloop

    //
    //
    // }
    //
  } //ends checkNextBox function



  checkForWin($clickedBox)

  } // ends click event function
  $('.square').on('click', $clicked)


  //Reset Button
  //on click remove all added classes/id's on gamepiece div's that occurred when player clicked box div
  const $resetBtn = $('<button>').text('Reset the game').addClass('btn')
  $('#aside-content').append($resetBtn)
  $resetBtn.on('click', ()=>{
    let playedBox = $('.square')
    playedBox.removeClass('deathEaterPlay')
    playedBox.removeClass('oOPPlay')
  }) //end reset button

  // Valid boxes
  // If a box has has a piece below it, it can be clicked and played
  // If a box does not have a piece below it, it is not valid for play


}) //document ready


// loop through columns
// check for matching player attribute
// if $nextBox.attr('player') == currentPlayer
