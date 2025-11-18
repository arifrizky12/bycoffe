// JvaScirpt yang saya gunakan ialah penunjuk jam di bagian footer
setInterval(() => {
  let date = new Date()
  let clock = document.getElementById('clock')
  clock.innerHTML =
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()
  }, 1000);
