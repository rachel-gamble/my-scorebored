let homeScore = 0
let awayScore = 0


function addHome() {
    homeScore += 1
    console.log("increase home score one", homeScore);
    let homeElem = document.getElementById("homeScore")
    homeElem.innerText = homeScore
}

function addAway() {
    awayScore += 1
    // console.log("increasing away score", awayScore);
    let awayElem = document.getElementById("awayScore")
    awayElem.innerText = awayScore
}

function addHomeThree() {
    homeScore += 3
    console.log("increase home score three", homeScore)
    let homeElem = document.getElementById("homeScore")
    homeElem.innerText = homeScore
}

function addAwayThree() {
    awayScore += 3
    console.log("increase away score three", awayScore)
    let awayElem = document.getElementById("awayScore")
    awayElem.innerText = awayScore
}

function clearHomeScore() {
    homeScore = 0
    console.log("clear home score", homeScore)
    let homeElem = document.getElementById("homeScore")
    homeElem.innerText = homeScore
}

function clearAwayScore() {
    awayScore = 0
    console.log("clear away score", awayScore)
    let awayElem = document.getElementById("awayScore")
    awayElem.innerText = awayScore
}








// console.log('js loaded')


// console.log('happy', 'halloween')



// let yourCode = ''

// let score = 0;

// function drawScore() {
//     .fillText('Score: ${score}', 8, 20)
// }

// function home1() {
//     yourCode += 'home1'
//     console.log(yourCode)
//     drawCode()
// }

// function away1() {

// }

// function clearCode() {
//     yourCode = ''
//     drawCode()
// }

// function logIt(name) {
//     //statement
// }

// function drawCode() {
//     let codeElm = document.getElementById('your-code')
//     console.log(codeElm);
//     codeElm.innerText = yourCode
// }