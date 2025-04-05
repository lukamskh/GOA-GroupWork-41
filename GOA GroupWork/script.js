function rollDice() {
  let images = [
    `https://media.discordapp.net/attachments/1264476393144848415/1354147418249101322/dice1.png?ex=67ec248f&is=67ead30f&hm=e86715e8b0a4c867748b5c2a26892b342bcbfae5f1a7c1a88f05f7211e02ff30&=&format=webp&quality=lossless&width=160&height=160`,
    `https://media.discordapp.net/attachments/1264476393144848415/1354147418488180756/dice2.png?ex=67ec248f&is=67ead30f&hm=5d5845ad49beb3c61e0151f4c1b515cdf6636a2e7a7d6c5693dd7682d13e9c69&=&format=webp&quality=lossless&width=160&height=160`,
    `https://media.discordapp.net/attachments/1264476393144848415/1354147418949685391/dice3.png?ex=67ec248f&is=67ead30f&hm=59900caf287a39bf1fca5f6528d33dc0270486d4bbea0df5bfb79597fab05c85&=&format=webp&quality=lossless&width=160&height=160`,
    `https://media.discordapp.net/attachments/1264476393144848415/1354147419230830745/dice4.png?ex=67ec248f&is=67ead30f&hm=83501d1d2ed2fa4d14ee9fb7636c042d15d07a0810799e1e3a71c84431d5b7c1&=&format=webp&quality=lossless&width=160&height=160`,
    `https://media.discordapp.net/attachments/1264476393144848415/1354147419516047481/dice5.png?ex=67ec248f&is=67ead30f&hm=b5702e270109d5f4f3eef4c278ed1a9b858427c819baa22546fec2bc435b4e6d&=&format=webp&quality=lossless&width=160&height=160`,
    `https://media.discordapp.net/attachments/1264476393144848415/1354147419750797342/dice6.png?ex=67ec248f&is=67ead30f&hm=a7adfe929bff166bd272cf1b34f9ce7a59f5e587c412b4870507b2aa32f8241e&=&format=webp&quality=lossless&width=160&height=160`,
  ];
  const randomNumber1 = Math.floor(Math.random() * images.length);
  const randomNumber2 = Math.floor(Math.random() * images.length);

  const randomDice1 = images[randomNumber1];
  const randomDice2 = images[randomNumber2];

  let input1 = document.querySelector("#input1").value;
  let input2 = document.querySelector("#input2").value;

  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");

  dice1.classList.add("rotate");
  dice2.classList.add("rotate");

  setTimeout(() => {
    dice1.src = randomDice1;
    dice2.src = randomDice2;

    dice1.classList.remove("rotate");
    dice2.classList.remove("rotate");

    const resultElement = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
      if (input1 === "" || input1 === null || input1 === undefined) {
        resultElement.innerHTML = `Player 1 Wins`;
      } else {
        resultElement.innerHTML = `${input1} Wins`;
      }
    } else if (randomNumber2 > randomNumber1) {
      if (input2 === "" || input2 === null || input2 === undefined) {
        resultElement.innerHTML = `Player 2 Wins`;
      } else {
        resultElement.innerHTML = `${input2} Wins`;
      }
    } else {
      resultElement.innerHTML = "Draw!";
    }
  }, 400);
}
