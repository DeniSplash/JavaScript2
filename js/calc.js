'use strict';

document.querySelector('.btn-all').addEventListener('click', () => {
    //alert('hidden');
    const t2 = document.querySelector(".card-text-all");

    var regexp = /'/g;
    let str = t2.firstChild.nodeValue;

    t2.firstChild.nodeValue = str.replace(regexp, '"');
});

document.querySelector('.btn-one').addEventListener('click', () => {
    //alert('hidden');
    const t2 = document.querySelector(".card-text-one");

    var regexp = /\b'\b/gi;
    var regexp2 = /'/gi;
    var regexp3 = /\|\|/gi;
    let str = t2.firstChild.nodeValue;

    // var regexp = /\w'\w/gi;

    // str = str.replace(regexp, '||');
    // str = str.replace("'", '"');
    // str = str.replace("||", ''');

    str = str.replace(regexp, "||");
    str = str.replace(regexp2, '"');
    t2.firstChild.nodeValue = str.replace(regexp3, "'");
});


document.querySelector('.btn-valid').addEventListener('click', () => {
    //alert('hidden');
    let name = document.querySelector(".name");
    let tel = document.querySelector(".tel");
    let mail = document.querySelector(".mail");

    const regexp1 = /[a-zA-Zа-яА-Я]+/gi;
    const regexp2 = /(\+7){1}(\(\d{3}\)){1}\d{3}-\d{4}/;
    const regexp3 = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

    if (name.value.length > 0 && name.value.match(regexp1) !== null) {
        if (name.value.match(regexp1)[0] !== name.value) {
            name.style.borderColor = "red";
        } else {
            name.style.borderColor = "black";
        }
    } else {
        name.style.borderColor = "red";
    }

    if (tel.value.length > 0 && tel.value.match(regexp2) !== null) {
        if (tel.value.match(regexp2)[0] !== tel.value) {
            tel.style.borderColor = "red";
        } else {
            tel.style.borderColor = "black";
        }
    } else {
        tel.style.borderColor = "red";
    }

    if (mail.value.length > 0 && mail.value.match(regexp3) !== null) {
        if (mail.value.match(regexp3)[0] !== mail.value) {
            mail.style.borderColor = "red";
        } else {
            mail.style.borderColor = "black";
        }
    } else {
        mail.style.borderColor = "red";
    }

});