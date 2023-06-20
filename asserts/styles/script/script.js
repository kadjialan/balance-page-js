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

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      const firstSum = parseInt(input1) + parseInt(result[i])
      const secondSum = parseInt(input2) + parseInt(result[j])
      console.log(firstSum, secondSum)
      if (input1 === input2) {
        holder.innerHTML = 'balance'
      } else {
        if (firstSum === secondSum) {
          holder.innerHTML = `add ${result[i]}, ${result[j]}`
          break
        } else {
          holder.innerHTML = 'not balance'
        }
      }
    }
  }
}
