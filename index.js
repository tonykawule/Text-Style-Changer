// Selecting Elements
let fontSize = document.getElementById("fontSize");
let fontColor = document.getElementById("fontColor");
let fontFamily = document.getElementById("fontFamily");
let textBlock = document.getElementById("textBlock");

// Change Font Size
fontSize.addEventListener("change", function () {
  textBlock.style.fontSize = fontSize.value;
});

// Change Font Color
fontColor.addEventListener("change", function () {
  textBlock.style.color = fontColor.value;
});

// Change Font Family
fontFamily.addEventListener("change", function () {
  textBlock.style.fontFamily = fontFamily.value;
});