mouse.tabIndex = 0; // the element will never get clickable if I don't add this line
    
mouse.onclick = function() {
  //getBoundingClientRect().left does not position the element but just corrects the style.left to the current position
  this.style.left = this.getBoundingClientRect().left + 'px';
  // console.log(this.getBoundingClientRect())
  this.style.top = this.getBoundingClientRect().top + 'px';
  this.style.position = 'fixed';
};


mouse.onkeydown = function(e) {
  switch (e.key) {
    case 'ArrowLeft':
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
      return false; //don't use break in the switch here because it is in a function
    case 'ArrowUp':
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 'ArrowRight':
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 'ArrowDown':
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
  }
};
