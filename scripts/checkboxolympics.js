document.querySelector('.readyButton').click()
var clicked = 0
document.querySelectorAll("input").forEach(e=>{ 
  if (clicked==0) return setTimeout(()=>{e.click();clicked=1}, 3000)
  e.click()
})
