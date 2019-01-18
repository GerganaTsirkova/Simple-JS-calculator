function startApp() {
    let inputField = $('.screen');
    let operation = '';
    let operationEntered = false;
    let memoryFirst = ''; //the first number typed before one of the operation buttons is pressed
    let memorySecond = ''; //the second number typed after one of the operation buttons is pressed
    // attach events to all the buttons of the calculator

    $('.clear').on('click', function () {
        inputField.val('');
        memoryFirst = '';
        memorySecond = '';
        operationEntered = false;
        operation = '';
    })

    $('.number').click(function () {

        if (operationEntered === false) {
            //here we check if there is a number typed on the screen of the calculator
            if (memoryFirst === '') {
                memoryFirst = $(this).val();
                inputField.val(memoryFirst)
            } else { //we add the digit next to the other digits on the screen
                if ((memoryFirst !== '0.') && (memoryFirst !== '-')) { //if the pointer is pressed before:
                    memoryFirst = inputField.val() + $(this).val();
                    inputField.val(memoryFirst);
                } else {
                    memoryFirst += $(this).val();
                    inputField.val(memoryFirst);
                }
            }
        } else {
            //here we check if there is a second number typed on the screen of the calculator
            if (memorySecond === '') {
                memorySecond = $(this).val();
                inputField.val(memorySecond)
            } else { //we add the digit next to the other digits on the screen
                if ((memorySecond !== '0.') && (memorySecond !== '-')) { //if the pointer is pressed before:
                    memorySecond = inputField.val() + $(this).val();
                    inputField.val(memorySecond);
                } else {
                    memorySecond += $(this).val();
                    inputField.val(memorySecond);
                }
            }
        }
    })

    $('.point').on('click', function () {
        let str = inputField.val();
            if (operationEntered === false) {
                if (!str.includes('.')) {  //check if we have number pressed before the point is press
                    if (str === '') {
                        memoryFirst = '0.'; //there is no pressed number so we just save the 0. in the memory number
                    } else {
                        memoryFirst = inputField.val() + $(this).val();
                        inputField.val(memoryFirst);
                    }
                }
            } else {
                if (!str.includes('.')) {  //check if we have number pressed before the point is press
                    if (str === '') {
                        memorySecond = '0.'; //there is no pressed number so we just save the 0. in the memory number
                    } else {
                        memorySecond = inputField.val() + $(this).val();
                        inputField.val(memorySecond);
                    }
                }
            }
    })

    $('.equals').on('click', function () {
        //if there is nothing to calculate we do nothing, but if there is we calculate:
        if ((memoryFirst !== '') && (memorySecond !== '')) {
            if (operation === '+') {
                inputField.val(Number(memoryFirst) + Number(memorySecond));
            } else if (operation === '-') {
                inputField.val(Number(memoryFirst) - Number(memorySecond));
            } else if (operation === '*') {
                inputField.val(Number(memoryFirst) * Number(memorySecond));
            } else if (operation === '/') {
                inputField.val(Number(memoryFirst) / Number(memorySecond));
            }

            memoryFirst = Number(inputField.val());
            memorySecond = '';
            operation = '';
            operationEntered = false;
        }
    })

    $('.plusmn').on('click', function () {
        if(operation === ''){
            if (operationEntered === false) {
                if (memoryFirst !== '') { //if no digit is pressed before we do nothing, else:
                    let str = inputField.val();
                    if (!str.startsWith('-')) { //if the number is positive we make it negative:
                        inputField.val('-' + str)
                    } else { //if the number is negative we make it positive:
                        str = str.substring(1);
                        inputField.val(str);
                    }
                } else {
                    memoryFirst = '-';
                }
            } else {
                if (memorySecond !== '') { //same for the second number
                    let str = inputField.val();
                    if (!str.startsWith('-')) {
                        inputField.val('-' + str)
                    } else {
                        str = str.substring(1);
                        inputField.val(str);
                    }
                } else {
                    memorySecond = '-';
                }
            }
        }
    })

    $('.twoSquared').on('click', function () {
        if (inputField.val() !== '') {
            let num = Number(inputField.val()) * Number(inputField.val());
            inputField.val(num);
        }
    })

    $('.plus').on('click', function () {
        if (operation !== '+' && operation !== '') {
            $('.equals').trigger('click');
            memoryFirst = inputField.val();
            operationEntered = true;
        } else {
            if (operationEntered === false) {
                if (inputField.val() !== '') { // if we have a number on the screen or memoried number
                    memoryFirst = Number(inputField.val());
                    operationEntered = true;
                }
            } else { //we treat the plus like equals
                inputField.val(Number(memoryFirst) + Number(memorySecond));
                memoryFirst = inputField.val();
                memorySecond = '';
            }
        }
        operation='+';
    })

    $('.minus').on('click', function () {
        if (operation !== '-' && operation !== '') {
            $('.equals').trigger('click');
            memoryFirst = inputField.val();
            operationEntered = true;
        } else {
            if (operationEntered === false) {
                if (inputField.val() !== '') { // if we have a number on the screen or memoried number
                    memoryFirst = Number(inputField.val());
                    operationEntered = true;
                }
            } else { //we treat the plus like equals
                inputField.val(Number(memoryFirst) - Number(memorySecond));
                memoryFirst = inputField.val();
                memorySecond = '';
            }
        }
        operation = '-';
    })

    $('.multiplication').on('click', function () {
        if (operation !== '*' && operation !== '') {
            $('.equals').trigger('click');
            memoryFirst = inputField.val();
            operationEntered = true;
        } else {
            if (operationEntered === false) {
                if (inputField.val() !== '') { // if we have a number on the screen or memoried number
                    memoryFirst = Number(inputField.val());
                    operationEntered = true;
                }
            } else { //we treat the plus like equals
                inputField.val(Number(memoryFirst) * Number(memorySecond));
                memoryFirst = inputField.val();
                memorySecond = '';
            }
        }
        operation = '*'
    })

    $('.division').on('click', function () {
        if (operation !== '/' && operation !== '') {
            $('.equals').trigger('click');
            memoryFirst = inputField.val();
            operationEntered = true;
        } else {
            if (operationEntered === false) {
                if (inputField.val() !== '') { // if we have a number on the screen or memoried number
                    memoryFirst = Number(inputField.val());
                    operationEntered = true; 
                }
            } else { //we treat the plus like equals
                inputField.val(Number(memoryFirst) / Number(memorySecond));
                memoryFirst = inputField.val();
                memorySecond = '';
            }
        }
        operation = '/';
    })
}

