function validateForm() {
    var x = document.forms["contactForm"]["nameContact"].value;

    if (x == "") {

      alert("Please fill out your name.");
      return false;
    }

  }