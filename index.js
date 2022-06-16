// Code your solutions in this file
function countDown(integer){
    let i = 0
      while(i <= integer){
          console.log(integer)
          integer = integer - 1
      }
  }
  const message = []
  function writeCards(name, event) {
      for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
      }
      return(message)
  }