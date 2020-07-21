import{postPrivacy} from '../model/firestore.js'
export default(data)=>{
  const postContent = document.createElement('div');
  postContent.classList.add('content-posts');
  postContent.innerHTML= `
    <div class= 'data-user'>
      <img src=${data.photoURL} alt="avatar" s class = 'photo-user'>
      <h3 class = 'name-user'>${data.userName}</h3>
      <p class='hour'>${data.postHora} </p>
      <div class = 'option-publication'></div>
    </div>
  
    <div class='content-message'>
      <p class='message'>${data.posts}</p>
    </div>
    <div class= 'like-coment'>
      <button class ='like'>
        <i class="far fa-heart fa-lg"></i>
      </button>
              0 
      <button class=coment>
        <i class="far fa-comment-alt fa-lg"></i>
      </button>
    </div>`

  //modal
  const modalContainer = postContent.querySelector('.option-publication')
  modalContainer.innerHTML = `
            <div class='o-publication'>
              <i class="fas fa-ellipsis-h"></i>
              <div class='content-option-post'>
                <ul>
                  <li class='setting-post edit-post'>
                    <i class="fas fa-pen"></i>Edit
                  </li>
                  <li  class='setting-post public-post'>
                    <i class="fas fa-globe-americas"></i>Public
                  </li>
                  <li  class='setting-post private-post'>
                    <i class="fas fa-lock"></i>Private
                  </li>
                  <li  class='setting-post remove-post'>
                    <i class="fas fa-trash-alt"></i>Delete
                  </li>
                </ul>
              </div>
            </div>
          `

  const btnModal = postContent.querySelector('.o-publication')
  // evento para editar post
  const optionEditPost = btnModal.querySelector('.edit-post')
  optionEditPost.addEventListener('click', () => {
    console.log('click en editar post');
  })

  //evento para poner el post en publico
  const optionPublicPost = btnModal.querySelector('.public-post')
  optionPublicPost.addEventListener('click', () => {
    postPrivacy(data.id, 'public')
  })
  //evento para poner el post en privado
  const optionPrivatePost = btnModal.querySelector('.private-post')
  optionPrivatePost.addEventListener('click', () => {
    console.log('click en post privado');
    postPrivacy(data.id, 'private')

  })
  //evento para poner eliminar un post
  const optionRemovePost = btnModal.querySelector('.remove-post')
  optionRemovePost.addEventListener('click', () => {
    console.log('click en eliminar post');
  })

  //funcionalidad a opciones del Post publicado
  window.addEventListener('click', (e) => {
    if (btnModal.contains(e.target)) {
      btnModal.classList.toggle('open');
    } else {
      btnModal.classList.remove('open');  
    }
    
  });
  return postContent
}