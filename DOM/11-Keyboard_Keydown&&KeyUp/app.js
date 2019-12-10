kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;
let keydown = document.querySelector('input')

let lastTime = Date.now(); // we use it as a counter

function handle(e) {
    console.log(keydown.checked)
    if (form.elements[e.type + 'Ignore'].checked) return;//return is a break/ignore

    let text = e.type +
        ' key=' + e.key +
        ' code=' + e.code +
        (e.shiftKey ? ' shiftKey' : '') +
        (e.ctrlKey ? ' ctrlKey' : '') +
        (e.altKey ? ' altKey' : '') +
        (e.metaKey ? ' metaKey' : '') +
        (e.repeat ? ' (repeat)' : '') +
        "\n";

    if (area.value && Date.now() - lastTime > 250) {
        area.value += new Array(81).join('-') + '\n';
    }
    lastTime = Date.now();

    area.value += text;

    if (form.elements[e.type + 'Stop'].checked) {
        e.preventDefault();
    }
}