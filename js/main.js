// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
	console.log('It works');

	e.preventDefault();
}