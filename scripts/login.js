function checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
        if (radioButton.checked === false) {
            counter++;
        }
    }

    return counter !== list.length;
}

function cadastrar() {
    // Checa se alguma role foi checada.
    if (checkIfAnyRoleIsChecked() === false) {
        alert('Marque alguma role!');
        return;
    }

    // Inicia a massa de dados (payload)
    let payload = {
        role: document.getElementsByName("role")[0].checked == true ? 'dev' : 'cliente',
        fullName: document.querySelector("#fullName").value,
        birthdate: document.querySelector("#birthdate").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    // Enviar para API
    fetch("https://65c3809e39055e7482c10aa8.mockapi.io/api/users", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            alert('Cadastrado com sucesso');
        })

}