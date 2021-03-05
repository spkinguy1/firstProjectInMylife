const firstInput = document.getElementById('firstInput')
const firstSubmit = document.getElementById('firstSubmit')
const result = document.getElementById('result')
const lable1 = document.getElementById('lable1')
const footer = document.getElementById('footer')
const notif = document.getElementById('notif')



setInterval(() => {
    if(result.textContent == "شمارنده به پایان رسید"){
        result.textContent = "شمارنده به پایان رسید"
    }else{
        result.textContent = firstInput.value
    }
}, 30);

firstSubmit.addEventListener('click',submitHandler)

function submitHandler(){
    result.textContent = firstInput.value
    let myFooterInitial = firstInput.value
    footer.textContent = myFooterInitial

    if(firstInput.value > 0 && !isNaN(firstInput.value)){
        firstSubmit.disabled = true
  
        setInterval(() => {
            if(firstInput.value > 0 ) {
                firstInput.value -= 1
                footer.textContent = ((firstInput.value/myFooterInitial)*100).toFixed(2) + " % "+" درصد از زمانتان باقی مانده"
            }
            result.textContent = firstInput.value
            if(result.textContent == 0){
                firstInput.value = ''
                firstSubmit.disabled = false
                firstSubmit.style.cursor = "pointer"
                result.previousElementSibling.textContent = "شمارنده به پایان رسید"
                if(result.previousElementSibling.textContent === "شمارنده به پایان رسید"){
                    notif.toggleAttribute('boxDisAppear')
                }
            }
        }, 1000);
    }else if(firstInput.value == ''){
        alert('مقداری وارد نشده است')
        
    }else{
        alert('مقدار وارد شده صحیح نیست')
        firstInput.value = ''
    }
    if(firstSubmit.disabled == true){
        firstSubmit.style.cursor = "default"
        
    }    
}






