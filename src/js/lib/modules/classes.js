import $ from '../core';

$.prototype.addClass = function (...classNames) { // тут рест оператор
    for (let i = 0; i < this.length; i++){
        this[i].classList.add(...classNames); // тут вже спред оператор 
    }  

    return this;
};

$.prototype.removeClass = function (...classNames) { 
    for (let i = 0; i < this.length; i++){
        this[i].classList.remove(...classNames); 
    }  

    return this;
};

$.prototype.toggleClass = function (classNames) { 
    for (let i = 0; i < this.length; i++){
        this[i].classList.toggle(classNames); 
    }  

    return this;
};