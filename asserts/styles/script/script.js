const mass1 = document.querySelector('.weight1')
const mass2 = document.querySelector('.weight2')
const holder = document.querySelector('.display')
const balanceButton = document.querySelector('.start')
const list = document.querySelector('.characters')

balanceButton.onclick = function balancing () {
  const input1 = mass1.value
  console.log(input1)
  const input2 = mass2.value
  const answers = list.value
  const result = answers.split(',')

  if (input1 === input2) {
    holder.innerHTML = 'balance'
  } else (input1 !== input2)
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      let valid = parseInt(input1) + parseInt(result[i]) === parseInt(input2) + parseInt(result[j])
      if (valid) {
        holder.innerHTML = `add ${result[i]}, ${result[j]}`
      }
    }
  }
}

