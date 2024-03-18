function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar img
  const img = document.querySelector("#profile img")

  //trocar imagem
  if(html.classList.contains("light")){

    //se estiver light mode, trocar imagem
    img.setAttribute("src", "./assets/88744715f40173740c1e8f9f6bbd0406.jpg")
  } else {
    //se tiver sem light mode, manter img
    img.setAttribute("src", "./assets/75e3b1b245075011c15929abcbde8514.jpg")
  }
}