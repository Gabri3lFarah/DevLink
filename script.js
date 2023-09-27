function toggleMode() {
 const html = document.documentElement
  html.classList.toggle('light')
  //pegar a tag da img
  const img=document.querySelector('#profile img')
  //substituir a imagem
  if(html.classList.contains('light')){
  //se tiver light mode, o codigo acima adiciona a imagem light
  img.setAttribute('src', './assets/avatar_light.png')  
}else{
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }
}

 