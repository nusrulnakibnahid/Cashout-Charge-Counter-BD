// Language switcher function
function switchLanguage(language) {
    if (language === 'en') {
        document.getElementById('header').textContent = 'Cashout Express BD';
        document.getElementById('home-description').textContent = 'Cashout Charge for Bkash, Nagad, Rocket, and Upay in Bangladesh.';
        document.getElementById('bkash-title').textContent = 'Bkash Cashout Calculator';
        document.getElementById('bkash-description').textContent = 'Cashing out from:';

        // Add similar updates for other sections
        document.getElementById('nagad-title').textContent = 'Nagad Cashout Calculator';
        document.getElementById('rocket-title').textContent = 'Rocket Cashout Calculator';
        document.getElementById('upay-title').textContent = 'Upay Cashout Calculator';
    } else if (language === 'bn') {
        document.getElementById('header').textContent = 'ক্যাশ আউট এক্সপ্রেস BD';
        document.getElementById('home-description').textContent = 'বিকাশ, নগদ, রকেট, এবং উপায় থেকে ক্যাশ আউট চার্জ।';
        document.getElementById('bkash-title').textContent = 'বিকাশ ক্যাশ আউট ক্যালকুলেটর';
        document.getElementById('bkash-description').textContent = 'ক্যাশ আউট করার জায়গা:';

        // Add similar updates for other sections
        document.getElementById('nagad-title').textContent = 'নগদ ক্যাশ আউট ক্যালকুলেটর';
        document.getElementById('rocket-title').textContent = 'রকেট ক্যাশ আউট ক্যালকুলেটর';
        document.getElementById('upay-title').textContent = 'উপায় ক্যাশ আউট ক্যালকুলেটর';
    }
}

// Show content by ID
function showContent(contentId) {
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(element => {
        if (element.id === contentId) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

// Calculate function (same as original but fixed for correct calculation)
function calculate(service) {
    let amount = parseFloat(document.getElementById(`amount-${service}`).value);
    let rate = parseFloat(document.getElementById(`source-${service}`).value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById(`result-${service}`).textContent = "Please enter a valid amount.";
        return;
    }

    let result = amount * rate / 100;
    document.getElementById(`result-${service}`).textContent = `Cashout Charge: ৳${result.toFixed(2)}`;
}
