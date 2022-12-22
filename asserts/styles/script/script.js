const mass1 = document.querySelector('.weight1')
const mass2 = document.querySelector('.weight2')
const holder = document.querySelector('.display')
const balanceButton = document.querySelector('.start')
const list = document.querySelector('.characters')

balanceButton.onclick = function balancing () {
  const input1 = mass1.value
  const input2 = mass2.value
  const answers = list.value
  const result = answers.split(',')
  
      if (input1 === input2) {
        holder.innerHTML = 'balance'
      } 
      
      else(input1 != input2) 
        for (let i = 0; i < result.length; i++) {
          let ans =  parseInt(input1) + parseInt(result[i])
          let ans2 = parseInt(input2) + parseInt(result[i])
          
        }
      
    
  
  
}
