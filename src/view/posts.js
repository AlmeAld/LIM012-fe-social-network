export default()=>{
  const postContent = document.createElement('div');
  postContent.classList.add('content-posts');
  postContent.innerHTML= `
   <div class = 'content-posts'>
        <div class= 'info-profile'>
        <img src="../img/profile1.png" alt="avatar" width = 120px class = 'photo-user'>
        <h3 class = 'name-user'>Fulana Suarez</h3>
        <p>5 de julio de 2020</p>
        <i class="fas fa-ellipsis-h"></i>
        <div class = 'option-publication' >
        <i class="fas fa-pen">Editar</i>
        <i class="fas fa-globe-americas"> Público</i>
        <i class="fas fa-lock">Privado</i>
        <i class="far fa-trash-alt">Eliminar</i>
        </div>
        <div class='content-message'>
          <p>Hola soy fulanas</p>
        </div>
        <i class="far fa-heart"></i>
        <i class="far fa-comment-alt"></i>
      </div>`

  return postContent
}