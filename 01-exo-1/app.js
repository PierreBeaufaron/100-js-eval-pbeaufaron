const loginForm = document.querySelector('#register-form');
const successMsg = document.querySelector('#toast-success');
const closeSuccessMsg = document.querySelector('#close-success');

closeSuccessMsg.addEventListener('click', () => successMsg.classList.add('hidden'));

loginForm.addEventListener('submit', async (event) => {
    
    event.preventDefault();
    
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const confPassword = formData.get('confirm-password');
    const errorLenght = document.querySelector('#error-message p');
    const errorSame = document.querySelector('#error-message-2 p')
    const loadingSpinner = document.querySelector('#loading-spinner');

    if(password.length < 8) {
        if (password == confPassword) {
            errorSame.style.display = "none";
        }
        errorLenght.style.display = "block";
        return;
    }

    if (password !== confPassword) {
        errorLenght.style.display = "none";
        errorSame.style.display = "block";
        return;
    }

    loadingSpinner.classList.remove('hidden');
    errorLenght.style.display = "none";
    errorSame.style.display = "none";

    try {
        const res = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password})
        });
        // Ici on pourrait gérer toutes les erreurs en fonction de leur code   
        if(!res.ok) {
            console.error('Erreur survenue lors de l\'authentification');
            return;
        }
        // Ici on gère ce qu'il se passe après le succès
        loadingSpinner.classList.add('hidden');
        successMsg.classList.remove('hidden')
        // il faudrait ausi vider les champs mais je n'ai pas le temps.

    } catch (err) {
        console.error('Erreur CATCH : ', err);
    }

});

