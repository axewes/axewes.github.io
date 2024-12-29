function showPhoneNumber(linkElem) {
    // If the phone number is already shown, do nothing and return
    if (linkElem.querySelector('.shown-phone')) return;

    var part1 = linkElem.getAttribute('data-part1');
    var part2 = linkElem.getAttribute('data-part2');
    var part3 = linkElem.getAttribute('data-part3');
    var countrycode = "+46";
    var phone = countrycode + " " + part1 + " " + part2 + " " + part3;

    // Create a new paragraph element with the phone number
    var phoneElem = document.createElement('p');
    phoneElem.textContent = phone;
    phoneElem.classList.add('shown-phone'); // Add a class to identify the element
    phoneElem.onclick = function(event) {
        navigateToPhone(linkElem);
        event.preventDefault(); // This will prevent the default behavior of moving to the top of the page
        event.stopPropagation(); // To ensure the event doesn't propagate up to parent elements
    };

    // Append this new element after the existing <p> element
    linkElem.appendChild(phoneElem);
}

function navigateToPhone(linkElem) {
    var part1 = linkElem.getAttribute('data-part1');
    var part2 = linkElem.getAttribute('data-part2');
    var part3 = linkElem.getAttribute('data-part3');
    var countrycode = "+46";
    var phone = countrycode + part1 + part2 + part3;

    window.location.href = "tel:" + phone;
}



function showEmail(linkElem) {
    // If the email is already shown, do nothing and return
    if (linkElem.querySelector('.shown-email')) return;

    var user = linkElem.getAttribute('data-user');
    var domain = linkElem.getAttribute('data-domain');
    var tld = linkElem.getAttribute('data-tld');
    var email = user + "@" + domain + "." + tld;

    // Create a new paragraph element with the email
    var emailElem = document.createElement('p');
    emailElem.textContent = email;
    emailElem.classList.add('shown-email'); // Add a class to identify the element
    emailElem.addEventListener('click', function(event) {
        navigateToEmail(linkElem);
        event.preventDefault();
        event.stopPropagation();
    });

    // Append this new element after the existing <p> element
    linkElem.appendChild(emailElem);
}


function navigateToEmail(linkElem) {
    var user = linkElem.getAttribute('data-user');
    var domain = linkElem.getAttribute('data-domain');
    var tld = linkElem.getAttribute('data-tld');
    var email = user + "@" + domain + "." + tld;

    window.location.href = "mailto:" + email;
}


document.querySelector("#phoneLink").addEventListener('click', function(event) {
    // Check if the clicked element is a paragraph
    if (event.target.tagName === 'P') {
        event.preventDefault();
        showPhoneNumber(this);
        event.stopPropagation();
    }
    // Check if the clicked element is an icon
    else if (event.target.tagName === 'I') {
        navigateToPhone(this);
        event.preventDefault();
        event.stopPropagation();
    }
});

document.querySelector("#emailLink").addEventListener('click', function(event) {
    // Check if the clicked element is a paragraph
    if (event.target.tagName === 'P') {
        event.preventDefault();
        showEmail(this);
        event.stopPropagation();
    }
    // Check if the clicked element is an icon
    else if (event.target.tagName === 'I') {
        navigateToEmail(this);
        event.preventDefault();
        event.stopPropagation();
    }
});



window.onload = initializeLanguageToggle;



