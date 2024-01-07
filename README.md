## **Intro**

Välkomna till ett spännande och praktiskt uppdrag där vi ska skapa en enkel men funktionell webbshop! I detta projekt kommer ni att bygga en webbplats för en fiktiv butik som säljer ett urval av produkter. Målet är att ge er praktisk erfarenhet av webbutveckling och att använda JavaScript för att manipulera data och skapa en interaktiv användarupplevelse.

![](https://github.com/chasacademy-sandra-larsson/boilerroom-webshoppen/blob/main/inspo.png)

## **Instruktioner** 👋

*Teamet:*
* Ni bestämmer själva hur många ni vill vara i ert team.
* Utse en lagkapten som koordinerar gruppens arbete och säkerställer att projektet blir klart i tid.
* Diskutera och fördela roller inom gruppen i början av projektet för att säkerställa en effektiv arbetsfördelning.

*Vad ni ska göra:*
- Utveckla en enkel webbshop där besökarna kan se och interagera med ett urval av produkter. Den behöver bara innehålla en HTML-sida men får innehålla fler.
- Använd arraymetoder som **`map`**, **`filter`**, och **`reduce`** för att hantera produktdatan.
- Ni ska visa produkter baserat på produktdata, det ska gå att filtrera mellan kategorier, det ska gå att lägga till produkter i en varukorg och även beräkna totalpriset av produkterna som lagts till i varukorgen. Ni får addera mer funktionalitet om ni hinner.
    - **`map`:** för att rendera ut produkterna från början och i kundvagnen.
    - **`filter`:** för att filtrera kategorierna.
    - **`reduce`:** för att slå ihop totalpriset.
- Byt ut varukorgen till en separat sida och använd **`localStorage`** för att spara innehållet i varukorgen över sessioner.
- Använd regelbunden versionshantering och tydliga commitmeddelanden. 
- Prioritera funktionalitet, men glöm inte att webbplatsen ska vara responsiv och användarvänlig.
- Ni får utgå från exemplen nedan eller koda allt från scratch!

*Exempel på HTML och JS*
```
/* 
Ni väljer om ni använder produktdatan i js eller json och om ni vill lägga till 
fler properties som bilder etc.

Ni får också använda ett api som t.ex. https://fakestoreapi.com/ för att generara
ut fiktiva produkter därifrån istället för från en lokal js/json.
*/

const products = [
    { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
    { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
    { id: 3, name: 'Keps', category: 'kläder', price: 50 },
    { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
];

const cart = [];
```
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Enkel Webbshop</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>Välkommen till vår Webbshop!</h1>
	  
  <h2>Våra produkter</h2>
  <!-- filter knappar för produkt kategorier här -->
  <!-- Visa era produkter innuti product-container -->
  <div id="product-container"></div>

  <h2>Din Varukorg</h2>
  <!-- visa produkter som lagts till i kundvagnen och totalsumman innuti cart -->
  <div id="cart"></div>
	
  <!-- alert, eller sida som säger produkterna är på väg -->
  <button id="checkout">Gå till kassan</button>
	
  <script src="script.js"></script>
</body>

</html>
```
## **Inspiration för Design**

Ni har full kreativ frihet att designa webbshoppen, men kom ihåg att enkelhet ofta är nyckeln till användarvänlighet. För inspiration, ta en titt på bilden nedan eller några befintliga e-handelsplattformar. *Observera bilden är med för inspiration ni måste inte följa den designen.*

![](https://github.com/chasacademy-sandra-larsson/boilerroom-webshoppen/blob/main/inspo2.png)
![](https://github.com/chasacademy-sandra-larsson/boilerroom-webshoppen/blob/main/inspo3.png)

## **Inlämning**

Inlämningen sker i canvas där ni hittade denna instruktion. Inkludera en GitHub-länk, närvarolista och en reflektion över uppdraget. Reflektera över de tekniker ni använt, hur ni fördelade arbetet inom gruppen, och vilka lärdomar ni dragit av projektet. Deadline är kl. 13:00.

Kom ihåg, även om ni inte hinner klart skickar ni in det ni har. Det viktigaste är att ni lär er och samlar erfarenhet. Vi är här för att utforska och utvecklas tillsammans! 💫🚀
