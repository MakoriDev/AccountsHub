document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formbold-form-wrapper form');
    const accountList = document.getElementById('accountList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const accountName = document.getElementById('firstname').value;
        const price = document.getElementById('phone').value;
        const description = document.getElementById('message').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h5>${accountName}</h5>
            <p>Price: $${price}</p>
            <p>Description: ${description}</p>
        `;

        accountList.appendChild(listItem);

        // Reset form fields
        form.reset();
    });
});
