function resume() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
      content.style.display = "block";
      document.getElementById("resume").innerHTML="Hide";
    } else {
      content.style.display = "none";
      document.getElementById("resume").innerHTML="View CV";
    }
  }