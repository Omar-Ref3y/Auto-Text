const selectedEle=document.querySelector('div')
const careers=["a FrontEnd Developer","a Graphic Designer","a Video Editor","a Freelancer","a leader","an Instructor","an UI UX designer"]
let index=0
let characterIndex=0
updateText()
function updateText() {
    characterIndex++;
    selectedEle.innerHTML=`<h1>I am ${careers[index].slice(0,characterIndex)}</h1>`;
    if (characterIndex===careers[index].length) {
        index++;
        characterIndex=0
    }
    if(index===careers.length){
        index=0;
    }
    setTimeout(updateText,200);
}
