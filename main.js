

//VARIABLES
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnEvent = document.querySelector("#btn1")
const btnReset = document.querySelector("#btn2")

//EVENTS
  btnEvent.addEventListener('click', choosingTheMessage)
  btnReset.addEventListener('click', deliveringResetClick)

// AUXILIARY FUNCTIONS
  function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
  }

// BOSS FUNCTIONS (WITH CALLBACK)
  function choosingTheMessage (){
    let randomNumber = Math.round(Math.random() * 10)
    toggleScreen()
  
    switch (randomNumber.toString()) { 
      case '0':
        screen2.querySelector("h2").innerText = ` A melhor maneira de descrever uma mãe \né através da soma de tudo de bom \nque existe na vida \ncom o melhor que podemos oferecer. `
         break;

      case '1':
        screen2.querySelector("h2").innerText = `O amor de mãe pode ser traduzido em uma palavra: doação! \nFalar desse sentimento é entender que ele é a mais completa forma de amor. `      
        break;
  
      case '2':
        screen2.querySelector("h2").innerText = `Mãe: o amor mais bonito que existe! \nFeliz Dia das Mães para todas aquelas que fazem desse sentimento o mais belo do universo.`;
        break;
  
      case '3':
        screen2.querySelector("h2").innerText = `Ser mãe é descobrir que a maior alegria da vida é partilhar todo o seu amor. \nGraças a ele, eu sei que tenho um porto seguro onde posso sempre voltar. Parabéns pelo seu dia!`;
        break;
      
      case '4':
        screen2.querySelector("h2").innerText = `Seus braços sempre se abrem quando preciso de um abraço. \nSua força e seu amor me dirigiram pela vida e me deram as asas que precisava para voar.`;
        break;
      
      case '5':
        screen2.querySelector("h2").innerText = `A mais bela obra-prima do coração de Deus é o coração de uma Mãe”, \nainda mais se for a minha!`;
        break;
  
      case '6':
        screen2.querySelector("h2").innerText = `Mãe não tem limite, é tempo sem hora, luz que não apaga quando sopra o vento e a chuva desaba. É um anjo em \nnossas vidas. \nParabéns pelo seu dia! `;
        break;
        
      case '7':
        screen2.querySelector("h2").innerText = `Todos os dias celebro o privilégio de ter a melhor mãe do mundo, \nmas hoje ainda mais.`;
        break;
      
      case '8':
        screen2.querySelector("h2").innerText = `Ser mãe é carregar dentro de si o futuro em forma de gente. \nVocê é minha inspiração e o meu orgulho, e o amor que sinto por você é eterno!`;
        break;
  
      case '9':
        screen2.querySelector("h2").innerText = `Mãe, a vida nos presenteia com pessoas \nmaravilhosas \ncomo você, que ensinam pelo saber, pelo exemplo e pelo amor incondicional. Parabéns pelo sei dia!`;
        break;
        
      case '10':
        screen2.querySelector("h2").innerText = `Um amor mais forte que tudo, mais obstinado que tudo, mais duradouro que tudo, é somente o amor de Mãe.`;
        break;       
    }
    console.log(randomNumber)
  }

  function deliveringResetClick(){
    toggleScreen()
  }