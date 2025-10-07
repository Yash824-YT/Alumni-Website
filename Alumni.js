const texts = [
      "Welcome to Our Alumni Network",
      "Reconnect with Old Friends",
      "Join Alumni Events & Reunions",
      "Support Future Generations"
    ];

    let index = 0;
    const element = document.getElementById("rotating-text");

    function rotateText() {
      element.textContent = texts[index];
      index = (index + 1) % texts.length;
    }

    rotateText(); // Initial text
    setInterval(rotateText, 4000);



function openImage(src) {
    document.getElementById('popup-img').src = src;
    document.getElementById('popup').style.display = 'flex';
  }

  function closeImage() {
    document.getElementById('popup').style.display = 'none';
  }


// function openPDF() {
//   window.open('d:\Yashraj Talekar\Sri Hanuman Chalisa.pdf', '_blank');
// }







// document.getElementById("signin-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();

//   if (!email || !password) {
//     alert("Please enter both email and password.");
//     return;
//   }

//   // You can replace this with actual login logic or API call
//   alert(`Signed in as: ${email}`);
// });

// function signInWithGoogle() {
//   alert("Google Sign-In clicked (you can connect Google Auth here).");
// }
