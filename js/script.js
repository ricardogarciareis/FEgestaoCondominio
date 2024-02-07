//window.alert("teste");

//document.getElementById("demo").innerHTML = "My First JavaScript";


function filtrosQuotas() {
    // Declare variables
    var table, tr, i;
    var inputFracao, inputAno;
    var filterFracao, filterAno;
    var tdFracao, tdAno;
    var txtValueFracao, txtValueAno;
    inputFracao = document.getElementById("src-fracao");
    inputAno = document.getElementById("src-ano");
    filterFracao = inputFracao.value.toUpperCase();
    filterAno = inputAno.value.toUpperCase();
    table = document.getElementById("lista-quotas");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tdFracao = tr[i].getElementsByTagName("td")[0];
        tdAno = tr[i].getElementsByTagName("td")[1];
        if (tdFracao && tdAno) {
            txtValueFracao = tdFracao.textContent || tdFracao.innerText;
            txtValueAno = tdAno.textContent || tdAno.innerText; 
            if (txtValueFracao.toUpperCase().indexOf(filterFracao) > -1 && txtValueAno.toUpperCase().indexOf(filterAno) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function limparFiltrosQuotas() {
    var inputFracao, inputAno;
    inputFracao = document.getElementById("src-fracao");
    inputAno = document.getElementById("src-ano");
    inputFracao.value = "";
    inputAno.value = "";
    filtrosQuotas();
}

function filtrosUtilizadores() { 
    // Declare variables
    var table, tr, i;
    var inputUsername, inputFracao, inputEmail, inputAdmin;
    var filterUsername, filterFracao, filterEmail, filterAdmin;
    var tdUsername, tdFracao, tdEmail, tdAdmin;
    var txtValueUsername, txtValueFracao, txtValueEmail, txtValueAdmin;
    inputUsername = document.getElementById("src-username");
    inputFracao = document.getElementById("src-fracao");
    inputEmail = document.getElementById("src-email");
    inputAdmin = document.getElementById("src-admin");
    filterUsername = inputUsername.value.toUpperCase();
    filterFracao = inputFracao.value.toUpperCase();
    filterEmail = inputEmail.value.toUpperCase();
    filterAdmin = inputAdmin.value.toUpperCase();
    table = document.getElementById("lista-utilizadores");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        tdUsername = tr[i].getElementsByTagName("td")[0];
        tdFracao = tr[i].getElementsByTagName("td")[1];
        tdEmail = tr[i].getElementsByTagName("td")[2];
        tdAdmin = tr[i].getElementsByTagName("td")[4];     
        if (tdUsername && tdFracao && tdEmail && tdAdmin) {
            txtValueUsername = tdUsername.textContent || tdUsername.innerText;
            txtValueFracao = tdFracao.textContent || tdFracao.innerText;
            txtValueEmail = tdEmail.textContent || tdEmail.innerText;
            txtValueAdmin = tdAdmin.firstChild.firstChild.checked.toString();
            if (txtValueUsername.toUpperCase().indexOf(filterUsername) > -1 && 
                txtValueFracao.toUpperCase().indexOf(filterFracao) > -1 && 
                txtValueEmail.toUpperCase().indexOf(filterEmail) > -1 &&
                (txtValueAdmin.toUpperCase().indexOf(filterAdmin) > -1 || filterAdmin == "ESCOLHA...")) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function limparFiltrosUtilizadores() {
    var inputUsername, inputFracao, inputEmail, inputAdmin;
    inputUsername = document.getElementById("src-username");
    inputFracao = document.getElementById("src-fracao");
    inputEmail = document.getElementById("src-email");
    inputAdmin = document.getElementById("src-admin");
    inputUsername.value = "";
    inputFracao.value = "";
    inputEmail.value = "";
    inputAdmin.value = "Escolha...";
    filtrosUtilizadores();
}