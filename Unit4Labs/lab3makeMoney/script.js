
// const count = document.getElementById('count');
// const makeMoney = document.getElementById('makeMoney');
// const coinInput = document.getElementById('coinTypes');
// let totalMoney = document.getElementById('totalMoney');
// let total = 0.00;

// function makeCoin(coinType) {
//     let newCoin = document.createElement("div");
//     newCoin.classList.add(coinType.toLowerCase());
//     newCoin.innerText=coinType;
//     document.querySelector('main').append(newCoin);
//     switch(coinType) {
//         case 'Penny':
//             total += 0.01;
//             break;
//         case 'Nickel':
//             total += 0.05;
//             break;
//         case 'Dime':
//             total += 0.10;
//             break;
//         case 'Quarter':
//             total += 0.25;
//             break;
//     }
//     totalMoney.innerText = `Total Money: $${(Math.round(total * 100) / 100)}`
//     newCoin.addEventListener('click', function() {
//         document.querySelector('main').removeChild(newCoin);
//         switch(coinType) {
//             case 'Penny':
//                 total -= 0.01;
//                 break;
//             case 'Nickel':
//                 total -= 0.05;
//                 break;
//             case 'Dime':
//                 total -= 0.10;
//                 break;
//             case 'Quarter':
//                 total -= 0.25;
//                 break;
//         }
//         totalMoney.innerText = `Total Money: $${(Math.round(total * 100) / 100)}`
//     });
// }
// makeMoney.addEventListener('click', function(e) {
//     e.preventDefault();
//     for(let i=1; i<= count.value; i++) {
//         makeCoin(coinInput.value);
//     }
// });

  // when we submit the form
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const data = new FormData(e.target); 
    const howMany = data.get('how-many')
    
    const whichCoin = data.get('which-coin')

    for (let i = 0; i < howMany; i++){
        const coin = document.createElement("div")
        coin.classList.add("coin", whichCoin)
        
        document.body.appendChild(coin);
    }
  });
