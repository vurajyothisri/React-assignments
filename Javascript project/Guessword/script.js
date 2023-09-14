
let meassage=document.querySelector("#guess_meassage")
let word_lines=document.querySelector("#Word")
let guess=document.querySelector("#Guess")
let entered_letters=document.querySelector("#Entered_letters")
let letter_messsage=document.querySelector("#no_of_letters")

word=["cloud","crab","psychology","science","foot","library","pricipal","priciple","school","cool","power","letters","company"]
console.log(input_value)
random_word=word[Math.floor(Math.random()*word.length)]
console.log(random_word);
lines_list=[]
for (let i=0;i<random_word.length;i++){
    lines_list[i]='  _   '
}
letter_messsage.innerHTML=` You word has ${random_word.length} letters`
for(let j=0;j<random_word.length;j++){
    word_lines.append(lines_list[j])
   
}