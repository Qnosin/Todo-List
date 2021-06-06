const addButton = document.querySelector('.plus');
const inputText = document.querySelector('.input-text');
const blockofTasks = document.querySelector('.whatToDo');
let counter = 0;

addButton.addEventListener('click', function() {
    if (inputText.value == '') {

    } else {
        const newDiv = document.createElement('div');
        const minusButon = document.createElement('div');
        const checkButon = document.createElement('input');
        minusButon.classList.add('newBackground');
        checkButon.classList.add('newCheckButton')
        checkButon.setAttribute('type', 'checkbox');
        newDiv.append(checkButon, inputText.value, minusButon);
        inputText.value = '';
        newDiv.classList.add('animationTask')
        if (counter < 5) {
            blockofTasks.append(newDiv);
            counter++;
        } else {
            alert('too many Tasks')
        }

        minusButon.addEventListener('click', function() {
            newDiv.style.display = 'none';
            blockofTasks.removeChild(newDiv);
            counter--;
        })
    }

});