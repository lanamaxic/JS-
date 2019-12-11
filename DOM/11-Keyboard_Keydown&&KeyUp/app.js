kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;
let keydown = document.querySelector('input')

let lastTime = Date.now(); // we use it as a counter

function handle(e) {
    console.log(keydown.checked)
    //form.elements['keydownIgnore'].checked && form.elements['keyupIgnore'].checked
    if (form.elements[e.type + 'Ignore'].checked) return//return is a break/ignore and it returns a value

    let text = e.type +
        ' key=' + e.key +
        ' code=' + e.code +
        //e.shiftKey: it's a property of keyboard event returns true or false when shiftKey is pressed
        (e.shiftKey ? ' shiftKey' : '') +
        (e.ctrlKey ? ' ctrlKey' : '') +
        (e.altKey ? ' altKey' : '') +
        (e.metaKey ? ' metaKey' : '') +
        //e.repeat: it's a property of keyboard event returns true or false when the key is holded down
        (e.repeat ? ' (repeat)' : '') +
        "\n";

    if (area.value && Date.now() - lastTime > 250) {
        area.value += new Array(81).join('-') + '\n';
    }
    lastTime = Date.now();
    //adding the text
    area.value += text; //area.value = area.value + text

    if (form.elements[e.type + 'Stop'].checked) { //property of the element(predefined)
        e.preventDefault();
    }
}