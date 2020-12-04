//Define your variables by selecting the DOM elements that the user will interact with. 
//This is where your jQuery skills can come into play! For instance, the submit button, the table,
// and the color picker need to be accessed. The value of the color selected needs to be stored as well,
// since the clicked cell in the table needs to be set to the selected color.
$(document).ready(function(){

let width = $("#inputWidth");
let height = $("#inputHeight");
let sizePicker = $("#sizePicker");
let color = $("#colorPicker");
let grid = $("#pixelCanvas");
//Add event listeners to the relevant DOM elements,
//so that user input can be color values and table sizes can be dynamically set by the user.

//Set the size of the cross stitch canvas as an _N_ by _M_ grid with the makeGrid() function.
// Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. 
//Each cell should have an event listener that sets the background color of the cell to the selected color.


// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

sizePicker.submit(function(event){
    //prevents page fom refreshing
    event.preventDefault();
    grid.children().remove();
    let h = height.val();
    let w = width.val();
    makeGrid(h,w);
})
// Your code goes here!
 function makeGrid(h,w) {
    for(let i = 1; i <= h; i++) {
        grid.append("<tr></tr>");
        let j = 1;
        while (j <= w){
            $("tr")
            .last()
            .append("<td></td>");
            j++;
        }
    }      
}
//color cells on click
grid.on("click", "td", function(){
      let chosenColor = color.val();
    $(this).css("background-color", chosenColor);
})

//clear the color on double click
grid.on("dblclick", "td", function(){
    $(this).css("background-color", "transparent");
})

//colors cells on click and drag
grid.on("mousedown mouseover", "td", function(event){
    if(event.buttons === 1){
        let chosenColor = color.val();
        $(this).css("background-color", chosenColor);
    }
})
//clear the canvas on licking the Clear Canvas button
let clear = $("#clearButton");
clear.on("click", function(){
    $("td").removeAttr("style");
})
})
