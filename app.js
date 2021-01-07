const nameOutput = document.getElementById("name")
const pronouns = document.getElementById("pronouns")
const nameInput = document.getElementById("name-input")
const pronounsInput = document.getElementById("pronouns-input")
const nameButton = document.getElementById("name-submit")
const purple = document.getElementById("purple")
const blue = document.getElementById("blue")
const red = document.getElementById("red")
const tag = document.getElementById("tag")
const counter = document.getElementById("counter")
const fonts = document.getElementById("fonts")
let num = 0;

nameButton.addEventListener("click", () => {
    nameOutput.textContent=nameInput.value;
    pronouns.textContent=pronounsInput.value;
    nameInput.value = "";
    pronounsInput.value="";
    
})

purple.addEventListener("click", () =>{
    tag.style.backgroundColor = "purple";
    console.log(num);
    num++;
    counter.textContent=num;
})

blue.addEventListener("click", () =>{
    tag.style.backgroundColor = "blue";
    console.log(num);
    num++;
    counter.textContent=num;
})

red.addEventListener("click", () =>{
    tag.style.backgroundColor = "red";
    console.log(num);
    num++;
    counter.textContent=num;
    
})

fonts.addEventListener("change", (e)=>{
    console.log(e.target.value);
    const userFont = e.target.value;
    nameOutput.style.fontFamily=userFont;

})
