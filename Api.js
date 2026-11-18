
const container = document.getElementById("times")
const mensagem = document.getElementById("mensagem")



async function Buscatime() {
    try{

        const responsda = await fetch("https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Brazilian%20Serie%20A")
        const dados = await responsda.json()
        
      const teste=  dados.teams.map(function(time){
          if(time.strTeam =="Athletico Paranaense"|| time.strTeam == "Coritiba"){
            return container.innerHTML = `
             <div class="card">
        <img src="${time.strBadge}" alt="NOME DO TIME">
        <h2>NOME DO TIME:time vei</h2>
        <p>Estádio: NOME DO ESTÁDIO:${time.strStadium}</p>
        <p>Fundado em: ${time.intFormedYear}</p>
        </div>
            `
          }
          else{
    return `
        <div class="card">
        <img src="${time.strBadge}" alt="NOME DO TIME">
        <h2>NOME DO TIME:${time.strTeam}</h2>
        <p>Estádio: NOME DO ESTÁDIO:${time.strStadium}</p>
        <p>Fundado em: ${time.intFormedYear}</p>
        </div>
          `
          }

      
    
    
        })
        container.innerHTML = teste.join("")
    }
    catch{
        
        mensagem.innerText = "Não está funcionando no momento"
    }


}
Buscatime()    
//com if else
//try