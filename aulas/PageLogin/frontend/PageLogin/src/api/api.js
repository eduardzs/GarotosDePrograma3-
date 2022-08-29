const fazerLoginAPI = async(login, senha) => {
    var myHeaders = new Headers();
    myHeaders.append("token", "tdfdhdtrsh");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "login": login,
        "senha": senha
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response = await fetch("http://localhost:3350/fazerLogin", requestOptions)
        let responseTxt = await response.text()
        let txtTrans = JSON.parse(responseTxt)
        return txtTrans
}

export default fazerLoginAPI;