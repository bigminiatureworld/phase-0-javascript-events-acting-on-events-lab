// Your code here
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });




  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  } 

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        const rightNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(rightNumbers, 10);
    
        dodger.style.left = `${left + 1}px`;
      }
    });