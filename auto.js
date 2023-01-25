console.log('survey22')
let func = () => {
  if (document.querySelector('#videoplayer')) {return}

  let target = document.querySelector('.response-label')
    if (target) {target.click()}

  if (document.querySelector('.question-open-ended-input')) {
console.log('open ended')
    document.querySelector('.question-open-ended-input input').value = "i really can't remember"
    document.querySelector('.question-open-ended-input textarea').value = "i really can't remember"
  }

  if (document.querySelector('.question-grid')) {

    document.querySelectorAll('.question-grid tbody tr').forEach(row => {
console.log(row.querySelector('td'))
      row.querySelector('td label').click()
    })
  }

  if (document.querySelector('.question-scale')) {

    document.querySelectorAll('.question-scale tbody tr').forEach(row => {
console.log(row)
      if (row.querySelector('.scale_button')) {
        row.querySelector('.scale_button').click()
      }
    })
  }

  if (document.querySelector('.trailing-open')) {

    document.querySelectorAll('.trailing-open').forEach(x => {
      if (x.querySelector('input')) {
      x.querySelector('input').value = "it was definitely an advert"
      }
    })
  }

    document.querySelector('#next_button').click()

}


// interval = setInterval(func, 1000)
