function resume() {
    var content = document.getElementById("content");
    if (content.style.display === "block") {
      content.style.display = "none";
      document.getElementById("resume").innerHTML="View CV";
    } else {
      content.style.display = "block";
      document.getElementById("resume").innerHTML="Hide";
    }
  }
