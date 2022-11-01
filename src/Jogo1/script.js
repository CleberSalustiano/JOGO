const fills = document.querySelectorAll(".fill");
const empties = document.querySelectorAll(".empty");
const emptiesWithFIll = document.querySelectorAll("#options .empty")
let pontuação;

for (const empty of emptiesWithFIll) {
  empty.className = "withFill";
}

// Fill listeners
for (const fill of fills) {
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);

  // Loop through empty boxes and add listeners
  for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
  }

  function dragDrop() {
    if (fill.className === "invisible") {
      if (this.className !== "withFill" && this.children[0] === undefined) {
        this.className = "withFill";
        fill.className = "fillIn";
        this.append(fill);
      }
    }

    const withFills = document.querySelectorAll(".withFill");
    for (const withFill of withFills) {
      if (withFill.children[0] === undefined) {
        withFill.className = "empty";
      }
    }
  }
}
// Drag Functions
function dragStart() {
  if (this.className !== "fillIn") {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
  }
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  if (this.className !== "withFill") {
    this.className += " hovered";
  }
}

function dragLeave() {
  if (this.className.split(" ")[0] == "withFill") {
    this.className = "withFill";
  } else {
    this.className = "empty";
  }
}
