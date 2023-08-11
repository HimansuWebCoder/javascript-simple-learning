//? reduce activity in loops 
//? Bad
// for (let i = 0; i < arr.length; i++) {

//? Better code
// let l = arr.length;
// for (let i = 0; i < l; i++) {

//? reduce DOM Access 
// const obj = document.getElementById("demo");
// obj.innerHTML = "Hello";

//? Reduce DOM size
//? Avoid Unnecessary Variables 
// let fullName = firstName + " " + lastName;
// document.getElementById("demo").innerHTML = fullName;

//? with this 
// document.getElementById("demo").innerHTML = firstName + " " + lastName;

//? Delay JS Loading 
// defer = "true"
{/* <script>
window.onload = function() {
  const element = document.createElement("script");
  element.src = "myScript.js";
  document.body.appendChild(element);
};
</script> */}

//? Avoid using with 