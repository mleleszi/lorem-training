// form validation
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birthday = document.getElementById("birthday");
const genderRadios = document.getElementsByName("gender");
const oneGender = document.getElementById("male");
const country = document.getElementById("country");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const birthdayValue = birthday.value;

  const countryValue = country.value.trim();
  const messageValue = message.value.trim();

  console.log(genderRadios[0].checked);

  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be blank");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be blank");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!validateEmail) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone cannot be blank");
  } else {
    setSuccessFor(phone);
  }

  if (birthdayValue === "") {
    setErrorFor(birthday, "Birthday cannot be blank");
  } else if (getAge(birthdayValue) < 18) {
    setErrorFor(birthday, "You must be older than 18");
  } else {
    setSuccessFor(birthday);
  }

  if (countryValue === "") {
    setErrorFor(country, "Country cannot be blank");
  } else {
    setSuccessFor(country);
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
  } else {
    setSuccessFor(message);
  }

  if (!(genderRadios[0].checked || genderRadios[1].checked)) {
    setErrorFor(oneGender, "You must choose a gender");
  } else {
    setSuccessFor(oneGender);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex);
}

function getAge(DOB) {
  let today = new Date();
  let birthDate = new Date(DOB);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Animations

// transparent navbar at top
const navbar = document.getElementById("navbar");

window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
  } else {
    navbar.classList.add("top");
  }
};

$(document).ready(function () {
  // smooth scrolling
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // makes submit button bounce when clicked
  $("#submit").on("click", function (event) {
    for (let i = 0; i < 3; i++) {
      $(this)
        .animate({ marginTop: "-=" + "10px" }, 300)
        .animate({ marginTop: "+=" + "10px" }, 300);
    }
  });

  // navbar link animation
  $("#navbar a").on("click", function (event) {
    $(this)
      .animate({ fontSize: "20px" }, 300)
      .animate({ fontSize: "16px" }, 300);
  });
});

// Table every other row different color

const rows = document.getElementById("main-table").getElementsByTagName("tr");
for (let i = 0; i < rows.length; i++) {
  if (i % 2 != 0) {
    rows[i].style.backgroundColor = "#333";
  }
}
