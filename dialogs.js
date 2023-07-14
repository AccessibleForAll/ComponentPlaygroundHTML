const wrapper = document.querySelector('main')
const openModalBtn = document.getElementById('openModal')
const cancelModalBtn = document.getElementById('cancelModalBtn')
const modal = document.getElementById('modal')
const modalBackground = document.querySelector('.modalBackground')

const openModal = () => {
  modal.classList.remove('hidden')
  modalBackground.classList.remove('hidden')
  modal.focus()
  wrapper.setAttribute('inert', '')
}

const closeModal = () => {
  modal.classList.add('hidden')
  modalBackground.classList.add('hidden')
  wrapper.removeAttribute('inert')
  openModalBtn.focus()
}

openModalBtn.addEventListener('click', openModal)
cancelModalBtn.addEventListener('click', closeModal)
modalBackground.addEventListener('click', closeModal)
window.addEventListener('keyup', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

const openDialogBtn = document.getElementById('openDialogBtn')
const dialog = document.getElementById('dialog')
const cancelDialogBtn = document.getElementById('cancelDialogBtn')

openDialogBtn.addEventListener('click', () => dialog.showModal())
cancelDialogBtn.addEventListener('click', () => dialog.close())
