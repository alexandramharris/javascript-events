//First event

const image = document.querySelector('img');

let leaf = "images/leaf-icon.svg";
let tree = "images/tree.jpg";

// when we use e.target it means "the target
// of the event" - the event here is the
// onmouseenter or the onmouseleave, and the
// target is the element preceding the dot -
// in this case, the variable image

image.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', tree);
};

image.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', leaf);
};


// Second event
