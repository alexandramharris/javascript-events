//First event
const image = document.querySelector('img');

let tree = "images/tree.jpg";
let trees = "images/trees.jpg";

// when we use e.target it means "the target
// of the event" - the event here is the
// onmouseenter or the onmouseleave, and the
// target is the element preceding the dot -
// in this case, the variable image

image.onclick = (e) => {
	// change image
   e.target.setAttribute('src', tree);
};

image.onclick = (e) => {
// change image
   e.target.setAttribute('src', trees);
};


// Second event
const image2 = document.querySelector('#special');

let tu = "images/tu.jpg";
let dogs = "images/dogs.jpg";

// when we use e.target it means "the target
// of the event" - the event here is the
// onmouseenter or the onmouseleave, and the
// target is the element preceding the dot -
// in this case, the variable image

image2.onmouseover = (e) => {
	// change image
   e.target.setAttribute('src', dogs);
};

image2.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', tu);
};
