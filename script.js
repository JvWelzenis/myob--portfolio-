function verhaalGenereren() {
    alert("Klaar voor het verhaal?");
    let hoofdrolspeler = document.getElementById('hoofdrolspeler').value;

    let karakter1 = document.getElementById('karakter1').value;
    let karakter2 = document.getElementById('karakter2').value;

    let locatie1 = document.getElementById('locatie1').value;
    let locatie2 = document.getElementById('locatie2').value;

    let object1 = document.getElementById('object1').value;
    let object2 = document.getElementById('object2').value;
    let  object3 = document.getElementById('object3').value;
   
    let bijvn1 = document.getElementById('bijvn1').value;
    let bijvn2 = document.getElementById('bijvn2').value;
    let  bijvn3 = document.getElementById('bijvn3').value;
    let bijvn4 = document.getElementById('bijvn4').value;
    let bijvn5 = document.getElementById('bijvn5').value;
    let  bijvn6 = document.getElementById('bijvn6').value;

    let benadrukken1 = document.getElementById('benadrukken1').value;
    let benadrukken2 = document.getElementById('benadrukken2').value;

    let verhaalKeuze = document.querySelector('input[name="verhaal"]:checked').value;
    console.log(verhaalKeuze);

    if (verhaalKeuze === "grappig") {
        document.getElementById('het-verhaal').innerHTML = 
        `
        <h1>${hoofdrolspeler}: de ${bijvn1} Boeddha</h1>

        <p>
        
        Er bestaat een japans verhaal over de ${bijvn1} Boeddha. Zijn hele leer bestond uit lachen en hij riep vaak ${benadrukken1}! 
        
        Hij ging vaak midden op de ${locatie1} staan en begon dan ${bijvn3} te lachen. Vaak nam hij zijn ${object1} mee en liep er vrolijk mee rond. Hij had een grote ${bijvn2} kop.
        
        Als de Boeddha lachte schudde zijn ${bijvn3} ronde buik heen en weer! 
        
        <br><br>
        
        De ${bijvn1} Boeddha had twee kale ${bijvn4} monniken in de leer. 1 van de monniken is nog aan de start van de training, hij heeft nogal moeite met lachen! ${karakter1} de ${bijvn5} monnik.
        
        De andere monnik heet ${karakter2} de ${bijvn6}. Beiden kijken ze erg op tegen de ${bijvn1} Boeddha en zijn graag in zijn aanwezigheid. 
        
        <br><br>
        
        De lessen van de ${bijvn1} Boeddha zijn altijd kort maar krachtig. Hij sprak geen woord en beantwoorde alles met een lach!! 
        
        Zelfs zei hij niks toen de ${bijvn5} monnik perongeluk de ${object2} kapot had gemaakt! Hij keek even verbaasd en begon te lachen. Als je de Boeddha vraagt over verlichting, dan antwoord hij met een lach.
        
        Als je hem vraagt over de waarheden van het universum dan ook beantwoord hij met een ${bijvn1} lach!
        
        <br><br>
        
        Vandaag zijn ze alle drie op de ${locatie2} te vinden. En lopen ze lachend rond zelfs ${karakter1} de ${bijvn5} monnik lukt het vandaag aardig om een beetje mee te lachen! Hij heeft veel geleerd de afgelopen weken!
        
        De mensen op de ${locatie2} zijn bekend met de ${bijvn3} lach van de ${bijvn1} Boeddha en kijken vrolijk toe! Het hele dorp is hierdoor altijd vrolijk! Veel mensen lachen mee en roepen de Boeddha en monnik na met
        
        ${benadrukken1} en ${benadrukken2}!
        
        <br><br>
        
        Lachen is belangrijk!
        
        </p>
        `
    } else  {
        document.getElementById('het-verhaal').innerHTML = " nog geen verhaal gemaakt voor dit genre";
    }
}

