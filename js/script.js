//Challenge 1: Your age in Days

function ageInDays(){
    var birthYear = prompt("Hi, what Year were you born....good friend?");
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement(h1);
    var textAnswer = document.createTextNode('You are '+ ageInDayss + 'Days Old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
    
}

function reset(){
    
    document.getElementById('ageInDays').remove();
}
