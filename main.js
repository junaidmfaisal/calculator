//display in calculator screen
function displayContent(content) {
    result.value += content;
}

//clear data
function clearcalcScreen(){
    result.value = '';
}

//backspace
function removecalc() {
    result.value = result.value.slice(0,-1)
}

//evaluation
function calcout(){
    result.value = eval(result.value)
}