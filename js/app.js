

$(()=>{
  //global variables
  let alternate = true
  // let currentPlayer = 1
  // let gameCounter = 0
  // let maxWin = 3
  // let rowNum = 6
  // let colNum = 6
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
      // currentPlayer = 1
      //prevent change of game piece once played
      alternate = false
      //turn off click so gamepiece cannot be changed
    } else {
      $clickedBox
      .addClass('oOPPlay')
      .attr('player', '2')
      // .off()
      // currentPlayer = 2
      alternate = true
    }
    checkWin();
  } // ends click event function


  // Game Board
  const makeBoard = () => {
    for (let i = 0; i < 36; i++){
      $gameContainer.append(
        $('<div>')
        .addClass('square')
        .attr('id', 'box'+i)
        .on('click', $clicked)
      )
    }
  } // ends makeBoard

  // Check for Winner
  const checkWin = () => {
    //if there are four of the same classes in a row, there is a winner
    //row 6
    if ($('#box30').hasClass('deathEaterPlay') && ($('#box31').hasClass('deathEaterPlay')) && $('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay'))) {
      console.log('deathEater wins');
    } else if ($('#box30').hasClass('oOPPlay') && ($('#box31').hasClass('oOPPlay')) && $('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay'))){
      console.log('order wins');

    } else if ($('#box31').hasClass('deathEaterPlay') && ($('#box32').hasClass('deathEaterPlay')) && $('#box33').hasClass('deathEaterPlay') && ($('#box34').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box31').hasClass('oOPPlay') && ($('#box32').hasClass('oOPPlay')) && $('#box33').hasClass('oOPPlay') && ($('#box34').hasClass('oOPPlay'))){
        console.log('order wins');

    } else if ($('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay')) && $('#box34').hasClass('deathEaterPlay') && ($('#box35').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay')) && $('#box34').hasClass('oOPPlay') && ($('#box35').hasClass('oOPPlay'))){
        console.log('order wins');

    // row 5
    } else if ($('#box24').hasClass('deathEaterPlay') && ($('#box25').hasClass('deathEaterPlay')) && $('#box26').hasClass('deathEaterPlay') && ($('#box27').hasClass('deathEaterPlay'))) {
      console.log('deathEater wins');
    } else if ($('#box24').hasClass('oOPPlay') && ($('#box25').hasClass('oOPPlay')) && $('#box26').hasClass('oOPPlay') && ($('#box27').hasClass('oOPPlay'))){
      console.log('order wins');

    } else if ($('#box25').hasClass('deathEaterPlay') && ($('#box26').hasClass('deathEaterPlay')) && $('#box27').hasClass('deathEaterPlay') && ($('#box28').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box25').hasClass('oOPPlay') && ($('#box26').hasClass('oOPPlay')) && $('#box27').hasClass('oOPPlay') && ($('#box28').hasClass('oOPPlay'))){
        console.log('order wins');

    } else if ($('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay')) && $('#box34').hasClass('deathEaterPlay') && ($('#box35').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay')) && $('#box34').hasClass('oOPPlay') && ($('#box35').hasClass('oOPPlay'))){
        console.log('order wins');

    //row 4
    } else if ($('#box18').hasClass('deathEaterPlay') && ($('#box19').hasClass('deathEaterPlay')) && $('#box20').hasClass('deathEaterPlay') && ($('#box21').hasClass('deathEaterPlay'))) {
      console.log('deathEater wins');
    } else if ($('#box18').hasClass('oOPPlay') && ($('#box19').hasClass('oOPPlay')) && $('#box26').hasClass('oOPPlay') && ($('#box27').hasClass('oOPPlay'))){
      console.log('order wins');

    } else if ($('#box19').hasClass('deathEaterPlay') && ($('#box20').hasClass('deathEaterPlay')) && $('#box21').hasClass('deathEaterPlay') && ($('#box22').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box19').hasClass('oOPPlay') && ($('#box20').hasClass('oOPPlay')) && $('#box21').hasClass('oOPPlay') && ($('#box22').hasClass('oOPPlay'))){
        console.log('order wins');

    } else if ($('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay')) && $('#box34').hasClass('deathEaterPlay') && ($('#box35').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay')) && $('#box34').hasClass('oOPPlay') && ($('#box35').hasClass('oOPPlay'))){
        console.log('order wins');


      //row 3
    } else if ($('#box12').hasClass('deathEaterPlay') && ($('#box13').hasClass('deathEaterPlay')) && $('#box14').hasClass('deathEaterPlay') && ($('#box15').hasClass('deathEaterPlay'))) {
      console.log('deathEater wins');
    } else if ($('#box12').hasClass('oOPPlay') && ($('#box13').hasClass('oOPPlay')) && $('#box14').hasClass('oOPPlay') && ($('#box15').hasClass('oOPPlay'))){
      console.log('order wins');

    } else if ($('#box13').hasClass('deathEaterPlay') && ($('#box14').hasClass('deathEaterPlay')) && $('#box15').hasClass('deathEaterPlay') && ($('#box16').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box13').hasClass('oOPPlay') && ($('#box14').hasClass('oOPPlay')) && $('#box15').hasClass('oOPPlay') && ($('#box16').hasClass('oOPPlay'))){
        console.log('order wins');

    } else if ($('#box14').hasClass('deathEaterPlay') && ($('#box15').hasClass('deathEaterPlay')) && $('#box16').hasClass('deathEaterPlay') && ($('#box17').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box14').hasClass('oOPPlay') && ($('#box15').hasClass('oOPPlay')) && $('#box16').hasClass('oOPPlay') && ($('#box17').hasClass('oOPPlay'))){
        console.log('order wins');
      }

      //row 2
     else if ($('#box6').hasClass('deathEaterPlay') && ($('#box7').hasClass('deathEaterPlay')) && $('#box8').hasClass('deathEaterPlay') && ($('#box9').hasClass('deathEaterPlay'))) {
      console.log('deathEater wins');
    } else if ($('#box6').hasClass('oOPPlay') && ($('#box7').hasClass('oOPPlay')) && $('#box8').hasClass('oOPPlay') && ($('#box9').hasClass('oOPPlay'))){
      console.log('order wins');

    } else if ($('#box7').hasClass('deathEaterPlay') && ($('#box8').hasClass('deathEaterPlay')) && $('#box9').hasClass('deathEaterPlay') && ($('#box10').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box7').hasClass('oOPPlay') && ($('#box8').hasClass('oOPPlay')) && $('#box9').hasClass('oOPPlay') && ($('#box10').hasClass('oOPPlay'))){
        console.log('order wins');

    } else if ($('#box8').hasClass('deathEaterPlay') && ($('#box9').hasClass('deathEaterPlay')) && $('#box10').hasClass('deathEaterPlay') && ($('#box11').hasClass('deathEaterPlay'))){
      console.log('deathEater wins');
    }else if ($('#box8').hasClass('oOPPlay') && ($('#box9').hasClass('oOPPlay')) && $('#box10').hasClass('oOPPlay') && ($('#box11').hasClass('oOPPlay'))){
        console.log('order wins');
      }

  } // ends checkWin



  makeBoard();
}) //document ready


























  //   // To Check Win
  //   //on win activate modal with win phrase "DE won!" or "OoP won!"
  //   const calculateWin = ()=>{
  //     if (gameCounter >= maxWin) {
  //       console.log(gameCounter);
  //       console.log('winner');
  //       alert('someone has one!')
  //       // enable modus
  //       // enter winner info
  //     } else {
  //       console.log('no winner yet');
  //       // continue play
  //       //reset game gameCounter
  //       gameCounter = 0
  //     }
  //   }
  //   // have to have four matching classes in a row
  //   // create winner variable (let) and change to either deathEater or oOP
  //   const checkForWin = ($clickedBox)=> {
  //     console.log($clickedBox);
  //     console.log('check for win running');
  //
  //     // cyle through the boxes until
  //     //horizonal wins
  //     checkNextBox($clickedBox, 0, 1) //left: add one column
  //     checkNextBox($clickedBox, 0 -1) //right: subtract one column
  //     calculateWin()
  //
  //
  //     // vertical wins
  //     checkNextBox($clickedBox, 1, 0) //up
  //     checkNextBox($clickedBox, -1, 0) //down
  //     calculateWin()
  //
  //     let boxCurRow = 0
  //     let boxCurCol = 0
  //   } //ends checForkWin
  //
  //     // create a function to check to see if adjacent rows have matching classes
  //   const checkNextBox = ($clickedBox, row, col)=>{
  //     // console.log('starting check next box');
  //     //get current cell position
  //     let boxCurRow = Number($clickedBox.attr('row'))
  //     let boxCurCol = Number($clickedBox.attr('col'))
  //     // console.log('current clicked box row: ' + boxCurRow + ', ' + 'current clicked box col: ' + boxCurCol);
  //     // find next cell overflow
  //     let nextRowNum = boxCurRow+row
  //     let nextColNum = boxCurCol+col
  //     let $nextBox = $(`div[row=${nextRowNum}][col=${nextColNum}]`)
  //     console.log('the next box is: ' , $nextBox);
  //
  //     // loop to check boxes
  //     while (
  //       (nextRowNum > 0) && (nextColNum > 0) && (nextRowNum <= rowNum) && (nextColNum <= colNum) && (match) && (gameCounter <= maxWin)){
  //         // console.log('starting while loop');
  //         // console.log('current player is: ' , currentPlayer)
  //         // console.log('next box is ' , $nextBox);
  //         if ($nextBox.attr('player') == currentPlayer) {
  //           // console.log('matched');
  //           gameCounter ++
  //
  //           //check next cell (depends on direction)
  //           nextRowNum += row
  //           nextColNum += col
  //           $nextBox = $(`div[row=${nextRowNum}][col=${nextColNum}]`)
  //           console.log('next box is: ' , $nextBox);
  //         } else {
  //           console.log('no match');
  //           match = false
  //           gameCounter = 0
  //         }
  //       } //ends whileloop
  //
  //   //
  //   //
  //   // }
  //   //
  // } //ends checkNextBox function
  //
  //
  //
  // checkForWin($clickedBox)

    // if ()


  // $('.square').on('click', $clicked)


  //Reset Button
  //on click remove all added classes/id's on gamepiece div's that occurred when player clicked box div
  // const $resetBtn = $('<button>').text('Reset the game').addClass('btn')
  // $('#aside-content').append($resetBtn)
  // $resetBtn.on('click', ()=>{
  //   let playedBox = $('.square')
  //   playedBox.removeClass('deathEaterPlay')
  //   playedBox.removeClass('oOPPlay')
  // }) //end reset button

  // Valid boxes
  // If a box has has a piece below it, it can be clicked and played
  // If a box does not have a piece below it, it is not valid for play


// loop through columns
// check for matching player attribute
// if $nextBox.attr('player') == currentPlayer
