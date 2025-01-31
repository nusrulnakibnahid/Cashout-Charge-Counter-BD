// Dark Mode Toggle Function
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    
    body.classList.toggle('dark-mode');
    
    // Toggle dark mode icon
    if (body.classList.contains('dark-mode')) {
        icon.textContent = '🌞'; // Change to light mode icon
    } else {
        icon.textContent = '🌙'; // Change to dark mode icon
    }
}


// Language Switcher Function
function switchLanguage(lang) {
    const header = document.getElementById('header');
    const homeDescription = document.getElementById('home-description');
    const bkashTitle = document.getElementById('bkash-title');
    const nagadTitle = document.getElementById('nagad-title');
    const rocketTitle = document.getElementById('rocket-title');
    const upayTitle = document.getElementById('upay-title');
    
    if (lang === 'en') {
        header.textContent = 'Fee Finder Bangladesh';
        homeDescription.textContent = 'Cashout Charge for Bkash, Nagad, Rocket, and Upay in Bangladesh.';
        bkashTitle.textContent = 'Bkash Cashout Calculator';
        nagadTitle.textContent = 'Nagad Cashout Calculator';
        rocketTitle.textContent = 'Rocket Cashout Calculator';
        upayTitle.textContent = 'Upay Cashout Calculator';
    } else if (lang === 'bn') {
        header.textContent = 'ফি ফাইনডার বাংলাদেশ';
        homeDescription.textContent = 'বিকাশ, নগদ, রকেট এবং উপায়ের ক্যাশ আউট চার্জ বাংলাদেশে।';
        bkashTitle.textContent = 'বিকাশ ক্যাশ আউট ক্যালকুলেটর';
        nagadTitle.textContent = 'নগদ ক্যাশ আউট ক্যালকুলেটর';
        rocketTitle.textContent = 'রকেট ক্যাশ আউট ক্যালকুলেটর';
        upayTitle.textContent = 'উপায় ক্যাশ আউট ক্যালকুলেটর';
    }
}

// Cashout Calculation Function
function calculate(type) {
    let amount, rate, result;

    switch(type) {
        case 'bkash':
            amount = document.getElementById('amount-bkash').value;
            rate = parseFloat(document.getElementById('source-bkash').value);
            result = (amount * rate) / 100;
            document.getElementById('result-bkash').textContent = `Cashout charge: ${result.toFixed(2)} BDT`;
            break;
        case 'nagad':
            amount = document.getElementById('amount-nagad').value;
            rate = parseFloat(document.getElementById('source-nagad').value);
            result = (amount * rate) / 100;
            document.getElementById('result-nagad').textContent = `Cashout charge: ${result.toFixed(2)} BDT`;
            break;
        case 'rocket':
            amount = document.getElementById('amount-rocket').value;
            rate = parseFloat(document.getElementById('source-rocket').value);
            result = (amount * rate) / 100;
            document.getElementById('result-rocket').textContent = `Cashout charge: ${result.toFixed(2)} BDT`;
            break;
        case 'upay':
            amount = document.getElementById('amount-upay').value;
            rate = parseFloat(document.getElementById('source-upay').value);
            result = (amount * rate) / 100;
            document.getElementById('result-upay').textContent = `Cashout charge: ${result.toFixed(2)} BDT`;
            break;
    }
}

// Navigation Function
function showContent(section) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    const activeContent = document.getElementById(section);
    activeContent.classList.add('active');
}
