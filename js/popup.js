let popupConnection = document.getElementById('popup-connection');
let body = document.querySelector('body');
let popupOpen = document.getElementById('popup-open');
let popupOpen2 = document.getElementById('popup-open-2');
let popupOpen3 = document.getElementById('popup-open-3');
let popupOpen4 = document.getElementById('popup-open-4');
//let popupOpen = document.querySelector('popup-open');
let popupConnectionClose = document.getElementById('popup-connection-close');
let popupConnectionBody = document.getElementById('popup-connection__body');
let PaddingValue;
let columnListItem1 = document.getElementById('column__list-item-1');
let columnListItem2 = document.getElementById('column__list-item-2');
let columnTitle1 = document.getElementById('column__title-1');
let columnTitle2 = document.getElementById('column__title-2');



/*popupOpen.onclick = */
function afr(){
    if (popupConnectionBody.offsetWidth>=480){
    let main = document.querySelector('main').offsetWidth;
    popupConnection.style.opacity = 1;
    popupConnection.style.visibility = 'visible';
    body.style.overflow = 'hidden';
    PaddingValue = popupConnection.offsetWidth - main + 'px';
    body.style.paddingRight = PaddingValue;
    popupConnectionBody.style.marginLeft = "0px";
    popupConnectionBody.style.transform = "none";
    //popupConnectionBody.style.transform = "translate(0px, 0px)";
    } else {
        let main = document.querySelector('main').offsetWidth;
        popupConnectionBody.style.transform = "translate(0px, 0px)";
        popupConnection.style.opacity = 1;
        popupConnection.style.visibility = 'visible';
        body.style.overflow = 'hidden';
        PaddingValue = popupConnection.offsetWidth - main + 'px';
        body.style.paddingRight = PaddingValue;
        popupConnectionBody.style.marginLeft = "0px";
    }
}
popupConnectionClose.onclick = function(){
    if (popupConnectionBody.offsetWidth>=480){
    popupConnection.style.opacity = 0;
    popupConnection.style.visibility = 'hidden';
    body.style.overflow = 'auto';
    body.style.paddingRight = '0px';
    popupConnectionBody.style.marginLeft = PaddingValue;
    popupConnectionBody.style.transform = "none";
    } else {
        popupConnection.style.opacity = 0;
        popupConnection.style.visibility = 'hidden';
        body.style.overflow = 'auto';
        body.style.paddingRight = '0px';
        popupConnectionBody.style.marginLeft = PaddingValue;
        popupConnectionBody.style.transform = "translate(0px, -100%)";
    }
}
window.onclick = function(event){
    if (event.target == popupConnection){
        if (popupConnectionBody.offsetWidth>=480){
        popupConnection.style.opacity = 0;
        popupConnection.style.visibility = 'hidden';
        body.style.overflow = 'auto';
        body.style.paddingRight = '0px';
        popupConnectionBody.style.marginLeft = PaddingValue;
        } else {
            popupConnection.style.opacity = 0;
            popupConnection.style.visibility = 'hidden';
            body.style.overflow = 'auto';
            body.style.paddingRight = '0px';
            popupConnectionBody.style.marginLeft = PaddingValue;
            popupConnectionBody.style.transform = "translate(0px, -100%)";
        }
    } 
}

popupOpen.onclick = afr;
popupOpen2.onclick = afr;
popupOpen3.onclick = afr;
popupOpen4.onclick = afr;

columnTitle1.onclick = function(){
    if (body.offsetWidth<=639){
        if (columnListItem1.offsetHeight > 0){
        columnListItem1.style.height = 0;
        columnListItem1.style.visibility = "hidden";
        } else{
        columnListItem1.style.height = "auto";
        columnListItem1.style.visibility = "visible";
        }
    }
}
columnTitle2.onclick = function(){
    if (body.offsetWidth<=639){
        if (columnListItem2.offsetHeight > 0){
        columnListItem2.style.height = 0;
        columnListItem2.style.visibility = "hidden";
        } else{
        columnListItem2.style.height = "auto";
        columnListItem2.style.visibility = "visible";
        }
    }
}