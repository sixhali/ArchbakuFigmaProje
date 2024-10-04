const bars = document.getElementById('bars')
const linksmobile = document.getElementById('linksMobile')
const xmark = document.getElementById('xmark')



bars.addEventListener('click',(e)=>{
   if(linksmobile.style.display === 'none'){
     linksmobile.style.display='flex'
   }else{
    linksmobile.style.display='none'
   }
})

xmark.addEventListener('click',(e)=>{
   if(linksmobile.style.display === 'flex'){
     linksmobile.style.display='none'
   }else{
    linksmobile.style.display='flex'
   }
})