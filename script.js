const input = document.getElementById("user-input");
const result = document.getElementById("re");
const text = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)\s?|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;
 



check.addEventListener("click", () => {
  const majibu = document.createElement("p");
majibu.id =  "results-div";
document.getElementById("jibu").appendChild(majibu)
  if (input.value === "") {
   alert("Please provide a phone number") 
    
  };
  if (phoneNumberRegex.test(input.value)){
    majibu.textContent = `Valid US number: ${input.value}`

  } else {
     
   majibu.textContent = `Invalid US number: ${input.value}`
    
    
  }
  clear.addEventListener("click",()=>{
  majibu.textContent = "";
})
});

