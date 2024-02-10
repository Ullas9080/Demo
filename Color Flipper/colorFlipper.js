
// function changeColor() {


// let random = Math.floor(Math.random() * 255)

// JSON.stringify(number)
// let colornumber = Math.floor(Math.random() * color.length)
//     background.style.background = `rgba(${color[colornumber]},${color[colornumber]},${color[colornumber]})`
// }


let alpabhet = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

// let color = ["red", "blue", "green", "yellow", "black", "orange", "white",
//     "purple", "pink", "gray"]

let random_color1 = Math.floor(Math.random() * alpabhet.length)
let random_color2 = Math.floor(Math.random() * alpabhet.length)
let random_color3 = Math.floor(Math.random() * alpabhet.length)
let random_color4= Math.floor(Math.random() * alpabhet.length)
let random_color5 = Math.floor(Math.random() * alpabhet.length)
let random_color6 = Math.floor(Math.random() * alpabhet.length)
// let random_number = Math.floor(Math.random() * 9)

let hex1 = alpabhet[random_color1]
let hex2= alpabhet[random_color2]
let hex3 = alpabhet[random_color3]
let hex4= alpabhet[random_color4]
let hex5 = alpabhet[random_color5]
let hex6= alpabhet[random_color6]

let para = document.querySelector('.para')

let background = document.querySelector(".color")
let btn = document.querySelector('.Change')
let btn1 = document.querySelector('.reload')
function changeColor() {
    background.style.background = `#${hex1}${hex2}${hex3}${hex4}${hex5}${hex6}`

    para.innerHTML=`#${hex1}${hex2}${hex3}${hex4}${hex5}${hex6}`


}

btn.onclick = () => {
    changeColor()
}
btn1.onclick = () => {
    location.reload()
}
// btn.addEventListener("click", () => {
   


// })

























































































































































































