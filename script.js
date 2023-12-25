// Todo: Make M+ M- and MC functional
let string = ""; // create a blank string
let buttons = document.querySelectorAll('.button'); // select all button
Array.from(buttons).forEach((item) => {// make a array from button and add foreach
    item.addEventListener('click', (e) => {
        console.log("clicked")
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string; // they use for store value in input field
        }
    })
})
