const data = {
  client_id: "adalovelace",
  client_secret: "1234d4",
  audience: "https://escalab.academy",
  grant_type: "client_credentials",
};
let urlToken = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/oauth/token';

    const repsonse = fetch(urlToken, {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
       },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then( (data) => {
        const resultadoTipo = data.token_type;
        const resultadoToken = data.access_token;
        const accesoToken = resultadoTipo + " " + resultadoToken;
        console.log("El access token es :", resultadoToken);
        console.log("El token type es :", resultadoTipo);
        console.log("El resultado del ejercicio es :", accesoToken);
      })
      .catch((error) => {console.error('Error:', error);
      })
