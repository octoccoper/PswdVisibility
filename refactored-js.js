const showHidePasswordControl = {
    init: function (elements) {
        this.elements = elements;
        this.binds();
    },

    binds: function (elements) {
        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];
            element.addEventListener("click", () => this.createInput(element));
        }
    },

    createInput: function (item) {

        const parentItem = item.previousElementSibling.parentElement;

        const prevSiblingId = item.previousElementSibling.id;

        const txtInputWrap = document.createElement('div');
        const inputBox = document.createElement('input');

        const txtInputWrapClass = this.generateCssClass(36, 2, 15);
        const currentInputVal = this.getValue(prevSiblingId);

        const currentIcon = document.querySelector('.show-password');
        let duplicatedIcon;
        if (currentIcon.length !== 0) {
            duplicatedIcon = currentIcon.cloneNode(true);
        } else {
            console.warn(".show-password element doesn't exist");
        }

        txtInputWrap.classList = `control above-all${txtInputWrapClass}`;

        this.setAttributes(inputBox,
            'class', 'input-text',
            'autocomplete', 'off',
            'value', `${currentInputVal}`,
            'type', 'text'
        );

        if (this.checkValue(prevSiblingId)) {
            txtInputWrap.append(inputBox);
            txtInputWrap.append(duplicatedIcon);
            parentItem.append(txtInputWrap);

            const currentInput = txtInputWrap.querySelector('.input-text');
	    currentInput.addEventListener("change", () => this.setValue(currentInput));

	    const currentShowPasswIcon = txtInputWrap.querySelector('.show-password');
            currentShowPasswIcon.addEventListener("click", () => this.removeEl(currentShowPasswIcon));
        }

    },

    generateCssClass: function (radix, indexA, indexB) {
        return Math.random().toString(radix).substring(indexA, indexB) + Math.random().toString(radix).substring(indexA, indexB);
    },

    getValue: function (item) {
        return document.getElementById(item).value;
    },

    setValue: function (item) {
        const parent = item.parentElement.parentElement;
        const inputId = parent.querySelector('.input-text').id;
        document.getElementById(inputId).value = item.value;
    },

    checkValue: function (item) {
        const text = document.getElementById(item).value;
        return ((text !== '' && text !== undefined));
    },

    setAttributes: function (elem) {
        for (let i = 1; i < arguments.length; i += 2) {
            elem.setAttribute(arguments[i], arguments[i + 1]);
        }
    },

    removeEl: function (item) {
        const classData = item.parentElement.classList.value;
        const element = document.querySelector(`[class*="${classData}"]`);
        element.remove();
    }
};

document.addEventListener("DOMContentLoaded", function () {

    const showPasswordCollection = document.querySelectorAll('.show-password');

    if (showPasswordCollection.length > 0) showHidePasswordControl.init(showPasswordCollection);

});
