let boxes = document.querySelectorAll(".box")
let resstbtn = document.querySelector(".reset-btn")
let newbtn = document.querySelector(".new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let player = true;

const winchance = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [8, 7, 6],
    [5, 4, 3],
    [2, 1, 0],
    [8, 5, 2],
    [7, 4, 1],
    [6, 3, 0],
    [6, 4, 2],
    [8, 4, 0],

]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked")
        if (player === true) {
            box.innerHTML = "X"
            player = false
            box.disabled = true;
        }
        else {
            box.innerHTML = "O"
            player = true
            box.disabled = true;
        }
        box.disabled = true;

        checkwinner()
    })

})
const diableboxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false
//         box.innerHTML = "";
//     }
// }
// const resetgame = () => {
//     player = true;
//     enableBoxes()
//     msgcontainer.classList.add("hide")
// }
const showwinner = ((winner) => {
    msg.innerText = "Congratulation Winner is " + winner;
    msgcontainer.classList.remove('hide')
    diableboxes();
})


const checkwinner = (() => {
    for (chance of winchance) {
        let chance1 = boxes[chance[0]].innerText;
        let chance2 = boxes[chance[1]].innerText;
        let chance3 = boxes[chance[2]].innerText;
        if (chance1 != "" && chance2 != "" && chance3 != "") {
            if (chance1 === chance2 && chance2 === chance3) {
                console.log("Winner ", chance1)
                showwinner(chance1);

            }
        }

    }
})



newbtn.addEventListener("click",()=>
{
    document.location.reload()
})
resstbtn.addEventListener("click", ()=>
{
    document.location.reload()
})

// let boxes = document.querySelectorAll(".box")
// let resetbtn = document.querySelector(".reset-btn")
// let newbtn = document.querySelector(".new-btn")
// let msgcontainer = document.querySelector(".msg-container")
// let msg = document.querySelector("#msg")

// let winningchance = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [0, 4, 8],
//     [8, 7, 6],
//     [5, 4, 3],
//     [2, 1, 0],
//     [8, 5, 2],
//     [7, 4, 1],
//     [6, 3, 0],
//     [6, 4, 2],
//     [8, 4, 0],
// ]

// let player = true;

// const showwinner = (winner) => {
//     msg.innerHTML = "Congartulation Winner is ", winner;
//     msgcontainer.classList.remove("hide")
// }

// const checkwinner = () => {
//     for (let pattern of winningchance) {
//         let pos1 = boxes[pattern[0]].innerText
//         let pos2 = boxes[pattern[1]].innerText
//         let pos3 = boxes[pattern[2]].innerText
//         // console.log(boxes[pattern[0]].innerText
//         //     ,boxes[pattern[1]].innerText
//         //     ,boxes[pattern[2]].innerText)
//         // console.log(pattern[0],pattern[1],pattern[2])
//         // console.log(boxes)
//         // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])

//         if (pos1 != "" && pos2 !== "" && pos3 != "") {
//             if (pos1 === pos2 && pos2 === pos3) {
//                 showwinner(pos1)

//             }
//         }

//     }

// }

// boxes.forEach(box => {

//     box.addEventListener("click", () => {
//         if (player === true) {
//             box.innerHTML = "X"
//             player = false
//         }
//         else {
//             box.innerHTML = "O"
//             player = true
//         }
//         box.disabled = true
//     })

//     checkwinner()
// })
// // resetbtn.addEventListener("click",()=>

// // {

// // })

