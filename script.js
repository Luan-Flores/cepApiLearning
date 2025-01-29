const cep = document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        let condition = document.querySelector(`#${campo}`);
        if(condition){
            console.log(campo);
            condition.value = result[campo];
        }else{
            console.log(campo + " Não encontrado");
        }
    }
}








cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    if(cep.value === ""){
        console.log("vazio");
        return;
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response=>{response.json()
        .then( data => showData(data))
        })
    .catch(e => console.log('Deu erro: ' + e))
    

})