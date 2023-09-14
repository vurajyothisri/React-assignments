
let meassage=document.querySelector("#guess_meassage") //print y is there or not 
let word_lines=document.querySelector("#Word") // .it is a container for word
let guess=document.querySelector("#Guess") //chances
let entered_letters=document.querySelector("#Entered_letters") //user entered words
let letter_messsage=document.querySelector("#no_of_letters")//print dashes of the word (length)
let error_message=document.querySelector("#Error_message")// to print error meassage
let button=document.querySelector("#Submition")
let correct_list=[]
let entered_list=[]
word=["cloud","crab","psychology","science","foot","library","pricipal","priciple","school","cool","power","letters","company"]

random_word=word[Math.floor(Math.random()*word.length)]
console.log(random_word);
lines_list=[]
// for (let i=0;i<random_word.length;i++){
//     lines_list[i]='_ '
// }
//writing how may letters are ther in words
letter_messsage.innerHTML=` You word has ${random_word.length} letters`
for(let j=0;j<random_word.length;j++){
    let line=" _ "
    word_lines.append(line)  

}

//To find given input is alphabet or not
function letterornot(letter){
    return /^[a-zA-Z]$/.test(letter);
}
//to print error message
function ErrorMessage(Str){
    if(Str.length>1){
        error_message.innerHTML= `You Entered ${Str.length} Alphabtes.Enter One Alphabet`
        return false
  }
  else if(Str.length===0){
    error_message.innerHTML="Please Enter the Alphabet"
    return false
  }
  
  else if(!letterornot(Str)){
      
    error_message.innerHTML= "Please Enter the Alphabet not number or special symbol"
    return false
  }
  else{
    error_message.innerHTML=""
      return true
  }

}
//clearing the error_message while entering in the inputfield


button.addEventListener('click',()=>{
    word_lines.innerHTML=""
    let input=document.querySelector('#input_value').value
    console.log("heloo")
    if(ErrorMessage(input)){
        if(random_word.includes(input)){
            console.log("heloo")
           for(let i=0;i<random_word.length;i++){
            if(random_word[i]==input){
                // lines_list[i]=input
                // console.log(`${lines_list[i]}`)
                word_lines.append(input)  

            }
            else{
                let line="   _ "
                word_lines.append(line)  
            }
           }
        //    if(!entered_list.includes(input)){
        //     console.log(!entered_list.includes(input));
        //     entered_list.unshift(input)
        //    }
        //    console.log(!entered_list.includes(input));
        // word_lines.textContent = lines_list;
        }
    }
   
})
for(let j=0;j<entered_list.length;j++){
    console.log(entered_list[j])
}

