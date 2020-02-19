const showHideControl = {
    init: function () {
        this.addEventListeners();
    },

    addEventListeners: function () {
        const self = this;
        const divs = document.querySelectorAll('.show-password');

        divs.forEach(function (element) {
            element.addEventListener("click", function () {
                self.addInput(this);
            });
        });
    },

    addInput: function (item) {
        const self = this;
        const parentItem = item.previousElementSibling.parentElement;
        const prevSiblingId = item.previousElementSibling.id;
        const txtInputWrap = document.createElement('div');
        const inputBox = document.createElement('input');
        const txtInputWrapClass = this.generateCssClass(36,2,15);
        const currentInputVal = this.getValue(prevSiblingId);
        const currentIcon = document.querySelector('.show-password');
        const duplicatedIcon = currentIcon.cloneNode(true);

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

            txtInputWrap.querySelector('.input-text').addEventListener("change", function () {
                self.setValue(this);
            });

            txtInputWrap.querySelector('.show-password').addEventListener("click", function () {
                self.removeEl(this);
            });
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
    const newShowHideControl = Object.create(showHideControl);
    showHideControl.init();
});
