//THIS IS FOR THE NEWSLETTER SUBSCRIPTION

function subscribe() {
    var emailInput = document.getElementById('email');

    if (email === '') {
        alert("Please enter an email address.");
        return;
    }


    if (!emailInput.checkValidity()) {
        alert("Please enter a valid email address.");
        return;
    }

    var email = emailInput.value;

    var messageDiv = document.getElementById('thanks-message');
    messageDiv.innerHTML = "Thank you for subscribing! You will receive our newsletter at " + email + ".";
    
    messageDiv.style.display = 'block';

    setTimeout(function() {
        messageDiv.innerHTML = '';
        messageDiv.style.display = 'none'
    }, 5000);
    emailInput.value = '';
}


//THIS IS FOR THE MAP API

document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([45.40657, -73.94201], 15);

    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([45.40657, -73.94201]).addTo(map);
});

//CONTACT US CONFIRMATION BOX
document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('overlay');
    var confirmationBox = document.getElementById('confirmationBox');
    var submitBtn = document.getElementById('submitBtn');

    function showConfirmationBox() {
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var inquiryInput = document.getElementById('inquiry');

        if (!nameInput.checkValidity() || !inquiryInput.checkValidity()) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        overlay.style.display = 'block';
        overlay.style.opacity = '0.5'; 
        confirmationBox.style.display = 'block';
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function hideConfirmationBox() {
        overlay.style.display = 'none';
        confirmationBox.style.display = 'none';
    
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var inquiryInput = document.getElementById('inquiry');

        nameInput.value = '';
        emailInput.value = '';
        inquiryInput.value = '';
    }

    
    submitBtn.addEventListener('click', showConfirmationBox);

    overlay.addEventListener('click', hideConfirmationBox);
});

//VIDEO EMBED IN A LOOP
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('loopingVideo');
  
    const videoSources = ['./videos/dog_-_77623 (360p).mp4', './videos/animal_-_111254 (720p).mp4', './videos/puppy_-_4740 (360p).mp4'];
  
    let currentIndex = 0;
  
    video.addEventListener('ended', function () {
  
      currentIndex = (currentIndex + 1) % videoSources.length;
  
      video.src = videoSources[currentIndex];
  
      video.load();
      video.play();
    });
  
  
    video.src = videoSources[currentIndex];
    video.load();
    video.play();
  });

  //LOGIN INPUT
  function validateLogin() {
    var email = document.querySelector("input[type='email']").value;
    var password = document.querySelector("input[type='password']").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }
       
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
    
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return false;
        }
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.querySelector("input[type='button']");
    if (submitButton) {
      submitButton.addEventListener("click", function () {
        if (validateLogin()) {
          alert("Login successful!");
        window.location.href = 'index.html';
     }
         
    });
    }
  });
  
  //SIGN UP INPUT
  document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.querySelector("input[type='button']");
    submitButton.addEventListener("click", validateForm);
});

function validateForm() {
    var firstName = document.querySelector("input[name='first_name']").value;
    var lastName = document.querySelector("input[name='last_name']").value;
    var email = document.querySelector("input[name='email']").value;
    var petsName = document.querySelector("input[name='pets_name']").value;
    var petsBreed = document.querySelector("select[name='pets_breed']").value;
    var petsAge = document.querySelector("select[name='pets_age']").value;
    var password = document.querySelector("input[name='password']").value;
    var confirmPassword = document.querySelector("input[name='confirm_password']").value;

    var isValid = validateInputs(firstName, lastName, email, petsName, petsBreed, petsAge, password, confirmPassword);

    if (isValid) {
        if (!localStorage.getItem('signupAlertShown')) {
            alert("Success!");
            localStorage.setItem('signupAlertShown', 'true');
        }
        window.location.href = 'homepage.html';
    }
}

function validateInputs(firstName, lastName, email, petsName, petsBreed, petsAge, password, confirmPassword) {
    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        petsName === "" ||
        petsBreed === "" ||
        petsAge === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill in all fields");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    } else if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('pets_breed').addEventListener('change', function () {
        var customInput = document.getElementById('custom_pets_breed');
        customInput.style.display = (this.value === 'custom') ? 'block' : 'none';
    });

    document.getElementById('pets_age').addEventListener('change', function () {
        var customInput = document.getElementById('custom_pets_age');
        customInput.style.display = (this.value === 'custom') ? 'block' : 'none';
    });
});

//CART FUNCTIONS
const addToCartBtn = document.getElementsByClassName('fas fa-cart-shopping');

let items = JSON.parse(localStorage.getItem('items')) || [];

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", function(e) {
        if (typeof Storage !== 'undefined') {
            let item = {
                id: i + 1,
                img: e.target.parentElement.parentElement.parentElement.children[0].src,
                name: e.target.parentElement.parentElement.children[1].textContent,
                price: e.target.parentElement.parentElement.parentElement.children[2].children[0].textContent,
                no: 1
            };
            console.log(e.target.parentElement.parentElement.parentElement.children[0].src)

            const existingItemIndex = items.findIndex(data => data.id === item.id);

            if (existingItemIndex !== -1) {
                items[existingItemIndex].no++;
            } else {
                items.push(item);
            }

            localStorage.setItem("items", JSON.stringify(items));
        } else {
            console.log('Storage not working');
        }
    });
}

const iconShoppingP = document.querySelector('.cartAmount');
let no = 0;


const storedItem = JSON.parse(localStorage.getItem('items')) || [];

storedItem.forEach(data => {
    no += data.no;
});

iconShoppingP.textContent = no.toString();

let cartItems = JSON.parse(localStorage.getItem('items')) || [];

function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('items')) || [];
    cartItems.forEach(item => {
        let row = `
        <tr class="cart-row">
            <td><a href="#"><i class="fa-solid fa-trash"></i></a></td>
            <td><img src="${item.img}" alt="model"></td>
            <td>${item.name}</td>
            <td class="price">${item.price}</td>
            <td><input class="cart-quantity" type="number" value="${item.no}" data-id="${item.id}"></td>
        </tr>
        `;
        document.getElementById('cart-contents').innerHTML += row;
    });
}

displayCartItems();

var removeItem = document.getElementsByClassName("fa-solid fa-trash");

for (var i = 0; i < removeItem.length; i++) {
    var button = removeItem[i];
    button.addEventListener("click", function (event) {
        var buttonClicked = event.target;
        var rowToRemove = buttonClicked.parentElement.parentElement.parentElement;

        let itemIdToRemove = rowToRemove.querySelector('.cart-quantity').getAttribute('data-id');
        console.log('Removing item with ID:', itemIdToRemove);

        cartItems = cartItems.filter(item => item.id != itemIdToRemove);
        console.log('Updated cartItems:', cartItems);

        localStorage.setItem("items", JSON.stringify(cartItems));

        rowToRemove.remove();
        updateCartTotal();
    });
}


function updateCartTotal(){
    var cartItemContainer = document.getElementById('cart')
    var cartRows  = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    for (var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace ('$', '')); 
    var quantity = quantityElement.value
    total = total + (price * quantity)
}
total = Math.round(total *100) /100; 
document.getElementById('Subtotal').innerText = '$' +total;
}

var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

function quantityChanged(event){
   var input = event.target
   if(isNaN(input.value) || input.value <= 0){ 
    input.value = 1
   }
   updateCartTotal();
}

