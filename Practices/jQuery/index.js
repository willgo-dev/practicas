// // Do something when click
// $("button").click(function () { // .click method
//   $("h1").css("color", "blue");
// });

// $("button").on("click", function () { //.on method
//   $("h1").css("color", "blue");
// });

// // Do something when press a key on the keyboard
// $(document).keydown(function (event) { // .keydown method
//   $("h1").html(event.key);
// });

// $(document).on("keydown", function (event) { // .on method
//   //.on method
//   $("h1").text(event.key);
// });

// // Do something when the mouse is over
// $("h1").mouseover(function () { // .mouseover method
//     $("h1").css("color", "red");
//   });

// $("h1").on("mouseover", function () { // .on method
//   $("h1").css("color", "red");
// });


// Animations

// $("button").on("click", function () {
//     $("h1").hide()
//   });

// $("button").on("click", function () {
//     $("h1").show()
//   });

// $("button").on("click", function () {
//     $("h1").toggle()
// });

// $("button").on("click", function () {
//     $("h1").fadeOut()
// });

// $("button").on("click", function () {
//     $("h1").fadeIn()
// });

// $("button").on("click", function () {
//     $("h1").fadeToggle()
// });

// $("button").on("click", function () {
//     $("h1").slideUp()
// });

// $("button").on("click", function () {
//     $("h1").slideDown()
// });

// $("button").on("click", function () {
//     $("h1").slideToggle()
// });

// $("button").on("click", function () {
//     $("h1").animate({opacity: 0.5}) // This method only run styles of the CSS with a numerical value
// });


// Chain animations

// $("button").on("click", function () {
//     $("h1").slideUp().slideDown().animate({opacity: 0.5})
// });