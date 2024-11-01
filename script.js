const titleCreator = document.getElementById('titleCreator')

titleCreator.value='hello';
const addTitle=document.getElementById('addTitle')
addTitle.onclick=function() {
    console.log(titleCreator.value())
}               