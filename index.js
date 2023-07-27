var m_pos;
function resizeRight(e) {
  var rightParent = resizeElementright.parentNode;
  var dx = m_pos - e.x;
  m_pos = e.x;
  rightParent.style.width =
    parseInt(getComputedStyle(rightParent, "").width) + dx + "px";
}

var resizeElementright = document.getElementById("resize");
resizeElementright.addEventListener(
  "mousedown",
  function (e) {
    m_pos = e.x;
    document.addEventListener("mousemove", resizeRight, false);
  },
  false
);
document.addEventListener(
  "mouseup",
  function () {
    document.removeEventListener("mousemove", resizeRight, false);
  },
  false
);

var topMousepos;
function resize(e) {
  var parentDown = resize_element.parentNode;

  var dx = topMousepos - e.y;
  topMousepos = e.y;
  parentDown.style.height =
    parseInt(getComputedStyle(parentDown, "").height) + dx + "px";
}

var resize_element = document.getElementById("resizeDown");
resize_element.addEventListener(
  "mousedown",
  function (e) {
    topMousepos = e.y;
    document.addEventListener("mousemove", resize, false);
  },
  false
);
document.addEventListener(
  "mouseup",
  function () {
    document.removeEventListener("mousemove", resize, false);
  },
  false
);
