console.log(" Email VAlidator")

let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "aryan.bisht45",
  "email": "aryan.bisht45@gmail.com",
  "score": 0.64,
  "state": "deliverable",
  "domain": "gmail.com",
  "reason": "valid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": true,
  "did_you_mean": "",
  "format_valid": true
}

submitbt.addEventListener("click", async(e)=>{
  e.preventDefault() 
  console.log("Clicked!")
  resultcont.innerHTML = `<img src="/email-validator/img/loading.svg">`
  let key = 'ema_live_6eFfC3dwv3s4rZOoAMry6tvevmbiDoDtk04iDg0O'
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()


  let str = ''
  for (key of Object.keys(result)) {

    if( result[key] !== "" && result[key] !== " "){
         str = str + `<div>${key}:${result[key]}</div>`
     }
 

  }
  console.log(str)
  resultcont.innerHTML = str
})



