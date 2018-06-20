

$(()=>{
  //global variables
  let alternate = true
  const $gameContainer = $('.game-container')
  let $modal = $('#modal')
  let winner = ''


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
      // currentPlayer = 1
      //prevent change of game piece once played
      alternate = false
      //turn off click so gamepiece cannot be changed
      // .off()
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
    const $winText = $('#winText')
    const $winImg = ('#winImage')
    // set modul display to 'block' to display winner
    // add close button on modal
    // set modal text to display winner (add image of celebration?)
    //Horizontal
    //row 6
    if ($('#box30').hasClass('deathEaterPlay') && ($('#box31').hasClass('deathEaterPlay')) && $('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay'))) {
      winner = 1
    } else if ($('#box30').hasClass('oOPPlay') && ($('#box31').hasClass('oOPPlay')) && $('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay'))){
      winner = 2

    } else if ($('#box31').hasClass('deathEaterPlay') && ($('#box32').hasClass('deathEaterPlay')) && $('#box33').hasClass('deathEaterPlay') && ($('#box34').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box31').hasClass('oOPPlay') && ($('#box32').hasClass('oOPPlay')) && $('#box33').hasClass('oOPPlay') && ($('#box34').hasClass('oOPPlay'))){
        winner = 2

    } else if ($('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay')) && $('#box34').hasClass('deathEaterPlay') && ($('#box35').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay')) && $('#box34').hasClass('oOPPlay') && ($('#box35').hasClass('oOPPlay'))){
        winner = 2

    // row 5
    } else if ($('#box24').hasClass('deathEaterPlay') && ($('#box25').hasClass('deathEaterPlay')) && $('#box26').hasClass('deathEaterPlay') && ($('#box27').hasClass('deathEaterPlay'))) {
        winner = 1
    } else if ($('#box24').hasClass('oOPPlay') && ($('#box25').hasClass('oOPPlay')) && $('#box26').hasClass('oOPPlay') && ($('#box27').hasClass('oOPPlay'))){
      winner = 2

    } else if ($('#box25').hasClass('deathEaterPlay') && ($('#box26').hasClass('deathEaterPlay')) && $('#box27').hasClass('deathEaterPlay') && ($('#box28').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box25').hasClass('oOPPlay') && ($('#box26').hasClass('oOPPlay')) && $('#box27').hasClass('oOPPlay') && ($('#box28').hasClass('oOPPlay'))){
        winner = 2

    } else if ($('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay')) && $('#box34').hasClass('deathEaterPlay') && ($('#box35').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay')) && $('#box34').hasClass('oOPPlay') && ($('#box35').hasClass('oOPPlay'))){
        winner = 2

    //row 4
    } else if ($('#box18').hasClass('deathEaterPlay') && ($('#box19').hasClass('deathEaterPlay')) && $('#box20').hasClass('deathEaterPlay') && ($('#box21').hasClass('deathEaterPlay'))) {
        winner = 1
    } else if ($('#box18').hasClass('oOPPlay') && ($('#box19').hasClass('oOPPlay')) && $('#box26').hasClass('oOPPlay') && ($('#box27').hasClass('oOPPlay'))){
      winner = 2

    } else if ($('#box19').hasClass('deathEaterPlay') && ($('#box20').hasClass('deathEaterPlay')) && $('#box21').hasClass('deathEaterPlay') && ($('#box22').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box19').hasClass('oOPPlay') && ($('#box20').hasClass('oOPPlay')) && $('#box21').hasClass('oOPPlay') && ($('#box22').hasClass('oOPPlay'))){
        winner = 2

    } else if ($('#box32').hasClass('deathEaterPlay') && ($('#box33').hasClass('deathEaterPlay')) && $('#box34').hasClass('deathEaterPlay') && ($('#box35').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box32').hasClass('oOPPlay') && ($('#box33').hasClass('oOPPlay')) && $('#box34').hasClass('oOPPlay') && ($('#box35').hasClass('oOPPlay'))){
        winner = 2


      //row 3
    } else if ($('#box12').hasClass('deathEaterPlay') && ($('#box13').hasClass('deathEaterPlay')) && $('#box14').hasClass('deathEaterPlay') && ($('#box15').hasClass('deathEaterPlay'))) {
        winner = 1
    } else if ($('#box12').hasClass('oOPPlay') && ($('#box13').hasClass('oOPPlay')) && $('#box14').hasClass('oOPPlay') && ($('#box15').hasClass('oOPPlay'))){
      winner = 2

    } else if ($('#box13').hasClass('deathEaterPlay') && ($('#box14').hasClass('deathEaterPlay')) && $('#box15').hasClass('deathEaterPlay') && ($('#box16').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box13').hasClass('oOPPlay') && ($('#box14').hasClass('oOPPlay')) && $('#box15').hasClass('oOPPlay') && ($('#box16').hasClass('oOPPlay'))){
        winner = 2

    } else if ($('#box14').hasClass('deathEaterPlay') && ($('#box15').hasClass('deathEaterPlay')) && $('#box16').hasClass('deathEaterPlay') && ($('#box17').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box14').hasClass('oOPPlay') && ($('#box15').hasClass('oOPPlay')) && $('#box16').hasClass('oOPPlay') && ($('#box17').hasClass('oOPPlay'))){
        winner = 2
      }

      //row 2
     else if ($('#box6').hasClass('deathEaterPlay') && ($('#box7').hasClass('deathEaterPlay')) && $('#box8').hasClass('deathEaterPlay') && ($('#box9').hasClass('deathEaterPlay'))) {
        winner = 1
    } else if ($('#box6').hasClass('oOPPlay') && ($('#box7').hasClass('oOPPlay')) && $('#box8').hasClass('oOPPlay') && ($('#box9').hasClass('oOPPlay'))){
      winner = 2

    } else if ($('#box7').hasClass('deathEaterPlay') && ($('#box8').hasClass('deathEaterPlay')) && $('#box9').hasClass('deathEaterPlay') && ($('#box10').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box7').hasClass('oOPPlay') && ($('#box8').hasClass('oOPPlay')) && $('#box9').hasClass('oOPPlay') && ($('#box10').hasClass('oOPPlay'))){
        winner = 2

    } else if ($('#box8').hasClass('deathEaterPlay') && ($('#box9').hasClass('deathEaterPlay')) && $('#box10').hasClass('deathEaterPlay') && ($('#box11').hasClass('deathEaterPlay'))){
        winner = 1
    }else if ($('#box8').hasClass('oOPPlay') && ($('#box9').hasClass('oOPPlay')) && $('#box10').hasClass('oOPPlay') && ($('#box11').hasClass('oOPPlay'))){
        winner = 2
      }






      if (winner === 1) {
        $modal.css('display', 'block')
        $winText.text('The Death Eaters have won! Burn Howarts, Burn!')
        $('<img id="deWinPic" src="https://vignette.wikia.nocookie.net/nicktheultimaswordwielder/images/1/12/Lord_Voldemort_%26_the_Death_Eaters.jpg/revision/latest?cb=20130823032305" />').appendTo($winImg)
      } else if (winner === 2) {
        $modal.css('display', 'block')
        $winText.text('The Order of the Pheonix have defended Hogwarts!')
        $('<img id="oopWinPic" src="http://cdn.playbuzz.com/cdn/41929c94-eab4-4a37-8d21-01ab35c3c384/a81010e7-c0ce-4998-80be-8a0ae6c6d709.jpg" />').appendTo($winImg)
      }
  } // ends checkWin

  //Reset Button
  const $resetBtn = $('<button>').text('Reset the game').addClass('btn')
  $('#aside-content').append($resetBtn)
  $resetBtn.on('click', ()=>{
    location.reload()
  }) //end reset button

  // Modal Close button
  const $closeButton = $('#closeBtn')
    $closeButton.on('click', ()=>{
      $modal.css('display', 'none')
    })


  makeBoard();
}) //document ready


// put boxes in array according to row row 1 [box1, box2, box3, box4, box5]
// loops through array and check to see if any have class of player
// add to variable everytime there is a match
// when there are four, call winner
//
// do the same for columns
