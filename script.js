const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const text = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;




check.addEventListener("click", () => {

  if (input.value === "") {
   alert("Please provide a phone number") 
    
  };
  if (phoneNumberRegex.test(input.value)){
    text.textContent = `Valid US number: ${input.value}`

  } else {
     
   text.textContent = `Invalid US number: ${input.value}`
    
    
  }
});
clear.addEventListener("click",()=>{
  text.textContent = "";
})
