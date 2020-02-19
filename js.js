document.addEventListener("DOMContentLoaded", function() {
  const divs = document.querySelectorAll('.show-password');


    divs.forEach(function(element) {
    element.addEventListener("click", function() {
	addInput(this);
    });
})

});

addInput = (item) => {
    const parentItem = item.previousElementSibling.parentElement;
    const prevSiblingId = item.previousElementSibling.id;
    const txtInputBox = document.createElement('div');
    const itemClass = generateCssClass();   
    const currentVal = getValue(prevSiblingId);
  
    txtInputBox.classList = `control above-all${itemClass}`;

 if(checkValue(prevSiblingId)) {

    txtInputBox.innerHTML = `<input type='text' autocomplete="off" class='input-text' value=${currentVal} onchange="setValue(this);">
<span class="show-password above-all${itemClass}" onclick="removeEl(this);">
                            <svg class="show-password__icon" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="24px"
                                 viewBox="0 0 25 24" version="1.1">
                                <g id="Asset-Artboard-Page" stroke="none" stroke-width="1" fill="none"
                                   fill-rule="evenodd">
                                    <g id="icon/24x24/ic_24x24_show-password" transform="translate(0.615205, 0.000000)"
                                       stroke="#666666">
                                        <circle id="Oval" cx="12" cy="12" r="3.5"></circle>
                                        <path d="M1,12.2993197 C3.79365079,7.90929705 7.46031746,5.71428571 12,5.71428571 C16.5396825,5.71428571 20.2063492,7.90929705 23,12.2993197 C20.2063492,16.2902494 16.5396825,18.2857143 12,18.2857143 C7.46031746,18.2857143 3.79365079,16.2902494 1,12.2993197 Z"
                                              id="Path-18"></path>
                                    </g>
                                </g>
                            </svg>
        </span>`;
    parentItem.appendChild(txtInputBox);
}

};


generateCssClass = () => {
    const newClassName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return newClassName;
}

getValue = (item) => {
    const text = document.getElementById(item).value;
    return text;
}

setValue = (item) => {
    const parent = item.parentElement.parentElement;
    const inputId = parent.querySelector('.input-text').id;
    document.getElementById(inputId).value = item.value;
}

checkValue = (item) => {
  const text = document.getElementById(item).value;
    if(text !== '' && text !== undefined) {
	return true;
    } 
	return false; 
}

removeEl = (item) => {
const classData = item.parentElement.classList.value;
const element = document.querySelector(`[class*="${classData}"]`);
element.remove();
}
