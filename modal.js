const openBtn=document.getElementById('btn');
const colorBg=document.getElementById('bgColor')
const modalDiv=document.getElementById('modal')
const newModal=document.getElementById('new-modal')
const cancelCross=document.getElementById('cancel')
const lgNewModal=document.getElementById('newsec-modal')
openBtn.addEventListener('click', function(){
    document.body.classList.add('bg-black')
    newModal.setAttribute('style', 'display: block');
    modalDiv.classList.add('hidden');
    lgNewModal.setAttribute('style', 'display: block')

});
cancelCross.addEventListener('click', function(){

    //document.body.removeAttribute('style', 'background: #49a6e980;');
    newModal.removeAttribute('style', 'display: block');
    newModal.removeAttribute('style', 'display: block');
    modalDiv.classList.replace('hidden', 'block');
});
console.log(openBtn)