let meassage=document.querySelector("#guess_meassage") //print y is there or not 
let word_lines=document.querySelector("#Word") //it is a container for word
let guess=document.querySelector("#Guess") //Chances
let entered_letters=document.querySelector("#Entered_letters") //user entered words
let letter_messsage=document.querySelector("#no_of_letters")//print no of dashes of the word (length)
let error_message=document.querySelector("#Error_message")// to print error meassage
let button=document.querySelector("#Submition")
let entered_list=[]
let guess_count=3
let count=0
word=["cloud","crab","psychology","science","foot","library","pricipal","priciple","school","cool","power","letters","company",'loding','name','people','check','queen','master','hello','dear','lion','tiger','fox']

random_word=word[Math.floor(Math.random()*word.length)]
console.log(random_word);
var lines_list=[]
for (let i=0;i<random_word.length;i++){
    lines_list[i]='_ '
}
//writing how may letters are ther in words
letter_messsage.innerHTML=` You word has ${random_word.length} letters`;
for (let i=0;i<random_word.length;i++){
    console.log(lines_list[i])
}
word_lines.innerHTML=" _".repeat(random_word.length)

//To find given input is alphabet or not
function letterornot(letter){
    return /^[a-zA-Z]$/.test(letter);
}
//to print error message
function ErrorMessage(Str){
  let input=document.querySelector('#input_value')
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
    input.style.border="3px solid #48b7af"
      return true
  }

}
//clearing the error_message while entering in the inputfield
button.addEventListener('click',()=>{
    word_lines.innerHTML=""
    let input=document.querySelector('#input_value')
    if(ErrorMessage(input.value.toLowerCase()))
    {
         
          if(random_word.includes(input.value.toLowerCase()))
          { 
               letter_messsage.innerHTML=`Good Guess the word has the letter ${input.value} `
               for(let i=0;i<random_word.length;i++)
               {
                  if(random_word[i]==input.value.toLowerCase())
                  {

                    lines_list[i]=input.value
                    count=count+1
                  
                  }
               }      
          }
         else
         {
          letter_messsage.innerHTML=`Wrong Guess the word  doesn't have the letter ${input.value} `
            guess_count=guess_count-1
            guess.innerHTML=guess_count
         }
    }
    // To append the words that entered in the ipnput field
    for(let i=0;i<lines_list.length;i++)
    {
      word_lines.append(lines_list[i])
    }
  
  //to show enetered list
  
  if(!entered_list.includes(input.value))
    {
       entered_list.push(input.value)
    }
    else if(input.value=" "){
      letter_messsage.innerHTML='enter the letter'
     }
    else
    {
        letter_messsage.innerHTML="You already entered that letter"
    }
  entered_letters.innerHTML=entered_list

//to disabled buttons after guess
  if(count==lines_list.length)
   {
      letter_messsage.innerHTML="Yahooo you won the game"
      button.disabled=true

   }

   
  //To disabled button after Guess_count is zero
  if (guess_count===0)
  {
       button.disabled=true
       letter_messsage.innerHTML="You lost the game.Sorry if you want to continue refresh the page"
       button.style.backgroundColor="Red"
       button.style.title="You lost button is enable"
        input.disabled=true

  }
  input.value=""
})

console.log(entered_list)




// button.addEventListener('click',()=>
// {
  
       
       
// })  

// button.addEventListener('click',()=>
// {
  
// })
