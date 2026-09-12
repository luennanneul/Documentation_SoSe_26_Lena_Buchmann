imageMapResize();

document.addEventListener('DOMContentLoaded', function () {
  var bg = document.getElementById('background_normal');
  var button = document.getElementById('searchButton');

  if (!bg || !button) return;

  button.addEventListener('click', function () {
    if (bg.src.includes('bunt.png')) {
      bg.src = 'grafiken/beleuchtet.png';
    }
    else if (bg.src.includes('beleuchtet.png')) {
      bg.src = 'grafiken/bunt.png';
    }
    else {
      bg.src = 'grafiken/beleuchtet.png';
    }
  });
});

const areas = document.querySelectorAll("area");
const display = document.getElementById("nameDisplay");
const image = document.getElementById("background_normal");

let timeout;

function showName(area) {

    if (area.shape !== "rect") {
    return;
    }
    clearTimeout(timeout);

    const coords = area.coords.split(",").map(Number);

    const x = (coords[0] + coords[2]) / 2;
    const y = (coords[1] + coords[3]) / 2;

    display.textContent = area.alt;

    display.style.left = x + "px";
    display.style.top = y + "px";

    display.style.display = "block";

    timeout = setTimeout(() => {
        display.style.display = "none";
    }, 3000);
}

areas.forEach(area => {

    area.addEventListener("mouseenter", () => {
        showName(area);
    });

    area.addEventListener("click", (event) => {
         if (!area.href) {
        event.preventDefault();
        showName(area);
    }
    
    });

});

const circles = document.querySelectorAll('area[shape="circle"]');

const popupOverlay = document.getElementById("popupOverlay");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const closeButton = document.getElementById("closeButton");
const popupAreas = document.querySelectorAll('map[name="popup"] area');
const popupPhoto = document.getElementById("popupPhoto");
const popupVideo = document.getElementById("popupVideo");
const popupDatum = document.getElementById("popupDatum");
const popuppreDatum = document.getElementById("popuppreDatum");
const popupLink = document.getElementById("popupLink");
const popupAudio = new Audio();


let aktuellerPunkt = null;
let aktuelleSeite = 0;

const popupContent = {

    jelly: {
        pages: [
            {
                image: "grafiken/block1.png",
                title: "Jelly Workshop",
                datum: "20/04/26",
                description: "Beim Jelly Workshop mit Lila Steinkampf haben wir aus Agar Agar Gelee hergestellt, um damit dreidimensionale Skulpturen zu machen. Dabei hatten wir Formen, Farb- und Duftstoffe zur Verfügung!",
                photo: "bilder/table_links.jpg",
                photoAlt: "Alle Jellos"
            },
              {
                image: "grafiken/block2.png",
                title: "Jelly Workshop",
                description: "Zusammen mit Nils habe ich einen Froschteich gebaut. Der Froschlaich ist aus gequollenen Basilikumsamen (lecker!) und der Schaum oben auf dem Teich ist eigentlich ein Abfallprodukt beim Jelly kochen. Man schöpft ihn ab, damit das Gelee möglichst klar wird. ",
                photo: "bilder/froggo.jpg",
                photoAlt: "Froschteich aus Jelly."
            }, 
                          {
                image: "grafiken/block2.png",
                title: "Jelly Workshop",
                description: "Der Frosch fand sogar eine Freundin. Nils hat sich gefragt, ob wir es wohl schaffen würden, eine Sphäre aus Jelly zu machen. Es wäre fast nicht fest geworden, aber es geht! Und wir haben sogar Goldfische im Teich! ",
                photo: "bilder/froglove.jpg",
                photoAlt: "Froschteich aus Jelly mit zwei Fröschen in Love."
            },   
            {
                image: "grafiken/block2.png",
                title: "Eat the Rich!",
                description: "Entstanden aus einem Klecks Jelly, der mich an eine Erdbeere erinnert hat. Dazu noch eine Schnecke mit Himbeere als Haus und ein paar Ketten drapiert - fertig!"
                ,photo: "bilder/eattherich.jpg",
                photoAlt: "eattherich."
            },   
            {
                image: "grafiken/block2_ende.png",
                title: "Jelly Workshop",
                description: "Mein Favorit: Dieses Werk von Mia und Jana. Ich liebe die Nippelpiercings aus Blaubeeren!"
                ,photo: "bilder/fuckoff.jpg",
                photoAlt: "fuckoff."
            }]},
    schreiben: {
        pages: [
            {image: "grafiken/block1.png",
                title: "Schreibworkshop",
                datum:"01/06/26",
                description:"Bei diesem Schreibworkshop haben wir mit Sophie Florian und Hanako Emden zu unseren Audiowalkthemen, ich also zu Wunderlauch geschrieben. Die beiden haben uns auch ihre Projekte vorgestellt. Besonders gefallen haben mir ihre Briefwechsel und die fiktiven, feministischen Briefwechsel der Motte Gritli mit bekannten Kinderserienheldinnen.",
                photo: "bilder/florianemden.jpg",
        }, 
            {image: "grafiken/block2.png",
                title: "Schreibworkshop",
                description: "<3",
                photo: "bilder/poetry.jpg",
        }, 
        {image:"grafiken/block2.png",
            title: "Wunderlauch (Teil 1)",
            description: "Der Geruch nach Regen klingt tief. Die Erde ist feucht und riecht warm. Der Geruch von Regen schmeckt schwer und leicht zugleich. Rollt von der Zunge und fällt wie ein Tropfen. Viele Tropfen fallen und prasseln aufs Blattwerk. Ein undichtes Dach, das niemand reparieren muss.",
            photo: "bilder/wunderlauchstelle.jpg",
        },
                {image:"grafiken/block2_ende.png",
            title: "Wunderlauch (Teil 2)",
            description: "Kühle Klarheit spült alle anderen Gerüche aus der Luft. Von unten dünstet die Erde. Von unten dünstet der Lauch. Niemals ohne Wunden riecht er scharf und weil er leidet, weinen wir, weint der Himmel, bis kaum noch ein Zeuge seines Schmerzes übrig bleibt, doch von unten dünstet er und spricht davon, was ungeschehen nicht mehr gemacht werden kann. Beißen. Treten. Knabbern. Reißen. Pflücken. Legen. Werfen. Rupfen. Schwaden wabern. Schreiben ihren Namen in den Wind. Streck die Zunge aus. Schlangen riechen mit der Zunge. Fang die Tropfen auf. Leg ein Blatt darauf. Nur einen Salat und ein Wasser bitte. Nein, ich bin auch gar nicht so hungrig heute. Es donnert. Gewitter im Himmel. Gewitter auf den Gleisen. Gewitter im Magen. Was hast du gewittert? Petrichor. Bariton. Ein Freund sagt, er könne Gewitter riechen, bevor sie ausgebrochen sind. Der Geruch nach Gewitter bitzelt auf der Zunge. loop.",

        }]}, 
        justin: {pages: [{image:"grafiken/block1_ende.png", 
                title: "Show you off <3",
                datum: "12/07/26",
                description: "Mia, Nils, Luisa, Nastie, Lena, Flo ft. Windmaschine.",
                video: "bilder/justin.mp4",

        }]},
        polyphem: {pages:
            [{image: "grafiken/block1_ende.png",
            title: "Polyphem",
            predatum: "Bremen, 09/06/26",
            description: "",
            photo:"bilder/Postkarte.png"
        }]},
        artfight: {pages:
            [{
            image: "grafiken/block1.png",
            title: "Artfight",
            datum: "21/04/26",
            description: "Die Aufgabe war es, Zeit auf einer Comfort-Webseite zu verbringen. Oliver zeigt und erklärt mir Artfight. Ich bin hyped. Im Juli wird es losgehen und bis dahin motivieren wir sämtliche Kommilitonen (und Ute!) auch mitzumachen.",
            photo:"bilder/was_ist_artfight.jpg"
            }, 
            {
            image: "grafiken/block2.png",
            title: "Artfight",
            description: "Bis Juli ist noch Zeit und währenddessen, kann man Charaktere hochladen und sich die Charaktere von anderen angucken. Vorbereitungen werden getroffen. Außerdem organisieren wir ein Event, bei dem wir uns im Grundlagenraum zum gemeinsamen Artfighten treffen! Es folgen einige Impressionen.",
            photo:"bilder/attack_me.png"
            },

            {
            image: "grafiken/block2.png",
            title: "Artfight",
            description: "Posterdesign von Janne <3"
            ,photo:"bilder/artfight_poster.jpg"
            },
            {
            image: "grafiken/block2.png",
            title: "Artfight",
            datum:"02/07/26",
            description: "Hier greifen wir alle zusammen den Character Persephone an! Dafür hatten wir 10 Minuten Zeit!",
            photo:"bilder/persephone_zeichnen.jpg"
            },
            {
            image: "grafiken/block2.png",
            title: "Artfight",
            description: "Das ist mein Ergebnis, wobei ich eher so 5 Minuten gezeichnet und 5 Minuten telefoniert habe. Wie passend.",
            photo:"bilder/persephone.jpg"
            },
            {
            image: "grafiken/block2.png",
            title: "Artfight",
            description: "Hier haben wir die Namen von uns in einen Hut geschmissen und dann jeder jemand anderen gezogen, den wir angreifen. Dafür gab es ein gemeinsames großes Blatt. Ich habe Olivers Charakter Levi Luis angegriffen und Mia meine Droplet! Ich liebs total! Das Ergebnis gibts auf der nächsten Seite!",
            photo:"bilder/massattack.jpg"
            },
            {
            image: "grafiken/block2_ende.png",
            title: "Artfight",
            photo:"bilder/mias_droplet.jpg"
            }
        ]},
        brm: {
    pages: [
        {
            image: "grafiken/block1.png",
            title: "Bremen Diaries",
            predatum: "08-10/06/26",
            description: "Auf nach Bremen zur Exkursion. Los ging es direkt mit einem weiteren Typowalk, diesmal sollten wir Buchstaben suchen, die tatsächlich schon Buchstaben waren.",
            photo: "bilder/1.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Nils und ich beim Typowalk, überrascht von so viel Zufall.",
            photo: "bilder/2.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "In Gruppen bereiten wir die Siebdruckdesigns vor. Auf unserem mein Polyphemgedicht, das ich am Deich schrieb und die Fenster der alten Speicher, in denen sich die HfK Bremen befindet.",
            photo: "bilder/12.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Zwei weitere Designs anderer Gruppen.",
            photo: "bilder/26.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "So sah dann das belichtete Sieb aus.",
            photo: "bilder/24.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Und so unsere gesiebdruckten Umschläge.",
            photo: "bilder/umschlag.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Jana und ich waren bei Greta untergebracht, die sich richtig süß um uns gekümmert hat. Hier bin ich beim Frühstück.",
            photo: "bilder/28.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Und das ist eine von Gretas tollen rollschuhfahrenden Schnecken.",
            photo: "bilder/13.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Am nächsten Tag wurden einige Texte von uns verschönert, während eine andere Gruppe aus den gefundenen Buchstaben Schriften erstellte und die dritte Gruppe mit Siebdruck beschäftigt war.",
            photo: "bilder/17.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Hier malt Mia gerade einen Kopf für Scylla - eine Collab, die ich gestartet habe :)",
            photo: "bilder/18.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: "Und so ist das Endergebnis geworden. Der Siebdruck wurde als Umschlag gefaltet und in die Innenseite kamen dann die umgestalteten Texte. Die Schriften wurden außen hineingesteckt. Am besten hat mir die Schrift HelloKittyIsPunk gefallen.",
            photo: "bilder/hellokittyispunk.jpg"
        },
        {
            image: "grafiken/block2.png",
            title: "Bremen Diaries",
            description: ":)",
            photo: "bilder/inhaltpublikation.png"
        },
        {
            image: "grafiken/block2_ende.png",
            title: "Bremen Diaries",
            description: ":P",
            photo: "bilder/brm_publikation.jpg"
        }]},
        audiowalk: {pages: [{image: "grafiken/block1_ende.png",
            title: "Audiowalk",
            datum: "04/05/26",
            link: "https://izi.travel/en/browse/17fa7470-1504-4a46-b3f2-69e5fe9d5bc8?passcode=ikhbzq",
            description: "Anfang des Semesters ging es für uns auf einen feministischen Audiospaziergang durch Braunschweig, um uns auf das Thema des Semesters einzustimmen. In einem Track ging es um die Darstellung weiblicher Körper als Statuen im Stadtbild.",
            photo: "bilder/she.jpg",
            linkText: "Hier geht's zum feministischen Audiowalk!"
        }]},

        semesterprojekt: {
    pages: [
        {
            image: "grafiken/block1.png",
            title: "BSides",
            description: "Hier kommt das Semesterprojekt - BSides, unser Audiowalk ist endlich fertig. Dafür haben wir viel recherchiert und gearbeitet.",
            photo: "bilder/bsides.png",
            link: "https://bsides-vk.org",
            linkText: "Hier könnt ihr in unseren Audiowalk reinhören!"
        
        },
        {
            image: "grafiken/block2.png",
            title: "Themenauswahl",
            description: "Zuerst mussten wir uns für einen Ort entscheiden, den wir behandeln wollten. Meine Wahl fiel auf einen der Wunderlauchstandorte. Es wurde recherchiert, ein Text geschrieben und aufgenommen. Pauls Protip: Aufnahme mit Decke über den Kopf macht gute Soundqualität.",
            photo: "bilder/skizzenbuch.png",
            link: "https://bsides-vk.org/wunderlauch-und-andere-wunder/index.html",
            linkText: "Shortcut: Wunderlauch und andere Wunder!"


        },
        {
            image: "grafiken/block2.png",
            title: "Wunderlauch dokumentieren",
            description: "Zum Glück habe ich frühzeitig ein paar Fotos vom Wunderlauch geschossen, da er bald darauf schon total verblüht war. Das ist zwar eine andere Stelle als die, über die ich am Ende rede, aber das fällt sowieso niemandem auf...",
            photo: "bilder/stelle.jpg"
        },

          {
            image: "grafiken/block2.png",
            title: "Wunderlauch zeichnen",
            description: "Für die Webseite habe ich einige Wunderlauchzeichnungen mit Wachskreide angefertigt. Diese habe ich dann am Computer ausgeschnitten und auf der Webseite einzeln animiert.",
            photo: "bilder/wachslauch.png"
        },


        {
            image: "grafiken/block2.png",
            title: "Pflanzenkalender Teil 1",
            description: "Ich habe mich dann außerdem entschieden, einen Kalender mit den essbaren Pflanzen des Prinzenparks zu zeichnen. Hier sieht man die ersten Skizzen.",
            photo: "bilder/pflanzkalender.jpg"
        },
        {
            image: "grafiken/block2_ende.png",
            title: "Pflanzenkalender Teil 2",
            description: "Für den Pflanzenkalender bin ich dann auch extra nochmal mit meinem pflanzenkundigen Freund Fynn durch den Prinzenpark gelaufen und habe alle essbaren Pflanzen fotografiert, die mir dort aufgefallen sind.",
            photo: "bilder/fotos.jpg"
        }]},

        funganza: {
    pages: [
        {
            image: "grafiken/block1.png",
            photo: "bilder/dokumentation.png"
        },
        {
            image: "grafiken/block2.png",
            title: "Funganza",
            photo: "/bilder/meandfun.jpg",
            description: "Im Dezember 2025 hatten wir die Idee, gemeinsam ein Spiel umzugestalten. In diesem Semester haben Flo und ich das dann zusammen angepackt und ein großártiges Ergebnis erzielt. Ich bin sehr stolz auf die Funganzaspiele, es ist auch wirklich viel Arbeit und Herzblut hineingeflossen."
        
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation2.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation3.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation4.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation5.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation6.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation7.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation8.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation9.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation10.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation11.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation12.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation13.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation14.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation15.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation16.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation17.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation18.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation19.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation20.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation21.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation22.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation23.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation24.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation25.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation26.png"
        },
        {
            image: "grafiken/block2.png",
            
            photo: "bilder/dokumentation27.png"
        },
        {
            image: "grafiken/block2_ende.png",
            
            photo: "bilder/dokumentation28.png"
        }
    ]
},

rundgang: {
    pages: [
        {
            image: "grafiken/block1.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/rg1.jpg", 
            description:"Für den diesjährigen Rundgang haben wir die Arbeiten der letzten beiden Semester in unserem Raum ausgestellt."
        },
        {
            image: "grafiken/block2.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/rg2.jpg", 
            description:"Mia und Jana hängen hier gerade gemeinsam die Aktzeichenbilder auf, die Zeichnungen wachsen vom Boden bis unter die Decke."
        },
        {
            image: "grafiken/block2.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/rg3.jpg", 
            description:"Die Skizzenbücher und Dokus des Wintersemesters wurden an die Decke gehängt. Die Dokus von Oliver und Liz sind einfach geklaut worden. :("
        },
        {
            image: "grafiken/block2.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/rg4.jpg", 
            description:"Beim Sommerfest haben wir dank Mias Mama mit einem Rosentee-Guaven-Cocktail den Mocktailwettbewerb gewonnen und den gab es dann auch bei uns an der Bar zu kaufen! Auf dem Bild feiern wir gerade mit dem Pokal von Charlotte!"
        },
        {
            image: "grafiken/block2.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/rg5.jpg", 
            description:"Damit der Weg zu uns gefunden wird, haben wir einige Hinweisschilder gesprüht!"
        },
        {
            image: "grafiken/block2.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/rg6.jpg", 
            description:"Das waren die wunderschönen Ergebnisse!"
        },
        {
            image: "grafiken/block2.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/rg7.jpg", 
            description:"Beim Rundgang wurde dann auch das VK-Institut beerdigt. Wir haben unsere guten Hoffnungen und die Satzung(?) verbrannt. Das lustigste waren die betroffenen Gesichter zufälliger Passanten. Eigentlich war der Anlass ja aber ein tragischer und ich glaube für mich war es nochmal ein guter offizieller Abschied? Verrückt, was so Rituale uns geben können. "
        },
        {
            image: "grafiken/block2_ende.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/tischbreit.jpg", 
            description:"Für den Rundgang habe ich auch noch zwei Tische bekleistert. Das ist der erste, mit Brementyposkizzen."
        },
         {
            image: "grafiken/block2.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/tischschmal.jpg", 
            description:"Das ist der andere mit Zeichnungen aus unseren Skizzenbüchern!"
        }, 
        {
            image: "grafiken/block2_ende.png",
            title: "✨Rundgangimpressionen✨",
            photo: "bilder/modelz.jpg", 
            description:"Diese Tische ins Fotostudio zu schleppen war ja vielleicht kacke..."
        }

    ]
}, 
loewe: {
    sound: "sound/real-lion-roars.mp3",
    pages:[
        {
            image: "grafiken/block1_ende.png", 
            photo: "bilder/raw.jpg", 
            description: "Das ist die Löwenstadt! Kommt schon: mehr mehr mehr Liebe! Love is Love! Wer das anders sieht wird gefressen! Raww, ihr Semmellutscher! - übersetzt mit Luisas Katzenübersetzungstool, Zeichnung nicht von mir :P"
        }
    ]
},
typowalk: {pages: [{
            image: "grafiken/block1.png",
            title: "Typowalk Braunschweig",
            datum: "11/05/26",
            photo: "bilder/typomikanils.jpg",
            description:"Gemeinsam mit Nils und Mika bin ich auf einen Typowalk aufgebrochen, bei dem wir Buchstaben sehen sollten, wo eigentlich keine sind. Daraus sollten wir dann ein Alphabet erstellen. ",
},

        {   image: "grafiken/block2.png",
            title: "Typowalk Braunschweig",
            photo: "bilder/regeln.png",
            description: "Für den Spaziergang sollten wir uns Regeln überlegen, z.B. wir folgen immer der Person mit dem schönsten Regenschirm. Wir haben beschlossen, dass wir bis zur Endhaltestelle fahren wollen und dann von da aus zurücklaufen wollen. ",
            }, 

            {   image: "grafiken/block2.png",
            title: "Typowalk Braunschweig",
            photo: "bilder/alphabeet_karte.png",
            description: "Hier ist eine Karte unserer gefundenen Buchstaben.",
            }, 
            {   image: "grafiken/block2.png",
            title: "Typowalk Braunschweig",
            photo: "bilder/alphabeet_bunt.png",
            description: "Hier das Alphabet aus einigen freigestellten Buchstaben. Wir haben aber noch vieeel mehr gefunden. ",
            }, 
            {   image: "grafiken/block2.png",
            title: "Typowalk Braunschweig",
            photo: "bilder/alphabeet_sw.png",
            description: "Hier das Alphabet aus ihren Silhouetten. ",
            }, 
            {   image: "grafiken/block2.png",
            title: "Typowalk Braunschweig",
            photo: "bilder/alphabeet_skizzen.png",
            description: "Wir haben auch einige der Buchstaben gezeichnet.",
            }, 

            {   image: "grafiken/block2.png",
            title: "Typowalk Braunschweig",
            photo: "bilder/quadrat.png",
            description: "Und noch eine Frage: Was ist die Klimapolitik von Friedrich Merz?",
            }, 

            {   image: "grafiken/block2_ende.png",
            title: "Typowalk Braunschweig",
            photo: "bilder/einwitz.png",
            description: "genau.",
            }, 

    
    


    ]},
bib: {pages: [{
            image: "grafiken/block1_ende.png",
            predatum: "24/07/26",
            photo: "bilder/reflexion.png"
            }]},
spaziergangimweb: {
    pages: [
        {
            image: "grafiken/block1.png",
            title: "Spaziergang im Web",
            datum:"22/04/26",
            description: "Wir surfen im Netz. Comfort Places. Neue Webseiten. Screenwalk einer Wandertourplanung ist erstaunlich mesmerizing. arena ist ein bisschen wie pinterest. aber ich habe oft das Gefühl mich online zu verlaufen und dann meine Interessen nicht mehr wirklich repräsentiert zu sehen. Alles ist vernetzt. Alles Karten. Wanderkarten, Karten des Webspaziergangs. Wir surfen, der Artfightcharakter surft. Und frage ich, wohin der Weg gehen soll, kehre ich für die Antwort immer wieder zur Frage zurück, wer ich eigentlich bin und was ich mag. ",
            photo: "bilder/arena.png"
        },
        {
            image: "grafiken/block2.png",
            title: "Spaziergang im Web",
            description: "Wanderungen planen ist ein Coping Mechanismus und nicht mal ein schlechter. Aber es fühlt sich auch ein bisschen verboten an, das während der Unizeit zu machen. Darf arbeiten Spaß machen? Darf meine Freizeitbeschäftigung Arbeit sein? Darf Arbeit meine Freizeitbeschäftigung sein?",
            photo:"bilder/wandern.png"
        },
        {
            image: "grafiken/block2.png",
            title: "Spaziergang im Web",
            datum: "22/07/26",
            description: "Oliver fühlt sich auf Artfight wohl. Das kann ich verstehen. Einfach wholesome diese Bubble.",
            photo: "bilder/attack.png"
        },
        {
            image: "grafiken/block2.png",
            title: "Spaziergang im Web",
            description: "Mein Tag als Art Adventskalender, man kann die Türchen öffnen und sehen, was sich dahinter verbirgt.",
            photo: "bilder/spaziergangimweb.png"
        },
        {
            image: "grafiken/block2_ende.png",
            title: "Spaziergang im Web",
            description: "Ein Full Circle Moment, weil diese Doku ja auch irgendwie wie ein Adventskalender ist. Jetzt denke ich, dass es gar nicht so schwer wäre, einen digitalen Adventskalender zu programmieren. Man müsste ja nur eine Datumsabfrage für jedes Popup einbauen... ",
            photo: "bilder/spaziergangimweb2.png"
        }
    ]
},
briefe: {
    pages: [
        {
            image:"grafiken/block1.png",
            title:"Briefe",
            description:"Briefe schreiben ist mein Hobby. Thematisch dachte ich dieses Semester oft, dass ihr die Themen auf mich zuschneidet. ",
            photo:"bilder/briefumschlaege1.png"
        },
           {
            image:"grafiken/block2.png",
            title:"Briefe",
            description:"Funfact: Der Stil dieser Doku ist angelehnt an das Brettspiel Next Station London, den ich zuerst in meinem Tagebuch und dann auf diesem Brief an eine Freundin imitiert habe und dann hat er mir so viel Spaß gemacht, dass ich dachte: Jetzt die ganze Doku so.",
            photo:"bilder/lilli_zensiert.png"
        },
              {
            image:"grafiken/block2.png",
            title:"Briefe",
            description:"Briefumschläge aus alten Papieren schneiden ist mein Hobby. Es ist weird meinem Hobby nachgehen zu müssen. Parallel mit dem Gefühl, eigentlich gar keine Zeit dafür zu haben. ",
            photo:"bilder/briefumschlaege2.png"
        },
                      {
            image:"grafiken/block2.png",
            title:"Briefe",
            photo:"bilder/briefe.png"
        },
                      {
            image:"grafiken/block2.png",
            title:"Briefe",
            description:"Lieber Nils! Es ist ein bisschen weird jemandem zu schreiben, dem man nicht sein Innerstes anvertrauen würde, aber mehr als Oberflächlichkeiten. Das ist kein Mix mit dem ich vertraut bin. Ich glaube, Schreibmaschine schreiben ist mein Hobby. Es klackert so schön. Ich mag monospace. Es ist so fehlerhaft und endgültig.",
        },
                      {
            image:"grafiken/block2.png",
            title:"Erster Brief (A)",
            photo:"bilder/A.jpg"
        },              {
            image:"grafiken/block2_ende.png",
            title:"Erster Brief (B)",
            photo:"bilder/B.jpg"
        }]},
wasser: {
    pages: [
        {
            image:"grafiken/block1.png",
            title:"Wasserprojekt",
            photo:"bilder/chimaere.png",
            description:"In den Semesterferien sollten wir uns ein Projekt zum Thema Wasser überlegen und umsetzen. Das fand ich eine schwierige Aufgabe, weil es so viele Möglichkeiten gab. "},
        {
            image:"grafiken/block2.png",
            title:"Wasserprojekt",
            photo:"bilder/wasser1.png",
            description:"Im Interviewformat haben wir versucht, einander auf Ideen zu bringen. Ich mag Meermenschwesen, deshalb dachte ich es wäre lustig Meerjungfrauen mit verschiedenen Fischschwänzen zu entwerfen und habe einen Wattwurm und eine Seekuhmeerjungfrau entworfen.Ich habe auch mit Rettungsschwimmen als Thematik gespielt."},
        {
            image:"grafiken/block2.png",
            title:"Wasserprojekt",
            photo:"bilder/wasser2.png",
            description:"Interessiert hat mich auch der Begriff des Monsters und wer das Monster ist. Ich bin dann gedanklich zu bösen Sirenen abgebogen. Außerdem habe ich über Wortspiele mit Wasserbezug nachgedacht, wie z.B. Seestärke und Sehstärke, mehr und Meer, Sirenen und Sirenen, Schuppen und Schuppen. "},
             {
            image:"grafiken/block2.png",
            title:"Wasserprojekt",
            photo:"bilder/cutepostkarten.png",
            description:"Eine weitere Idee war ein Anziehspiel für Meerjungfrauen oder etwas über Selkies, also Frauen, die sich, wenn sie ihren Robbenpelz anziehen, in eine Robbe verwandeln. Ich habe auch über Wasser als Designelement, z.B. in Form von Wasserrändern auf dem Papier, nachgedacht. Schließlich bin ich auf Postcrossing gekommen. Das ist eine Webseite, auf der man fremden Menschen aus anderen Ländern Postkarten schreiben kann. Wenn deine Postkarte ankommt, wird deine Adresse freigegeben und du kriegst eine Postkarte."},
             {
            image:"grafiken/block2.png",
            title:"Wasserprojekt",
            photo:"bilder/walkarte.png",
            description:"Ich wollte den ganzen März jeden Tag eine Postkarte schreiben und dann eine Infografik zu erstellen, wie viele Kilometer über Wasser die Karten insgesamt zurückgelegt haben. Jedoch haben sich die Karten zu viel Zeit gelassen und so musste ich die Idee verwerfen. "},
             {
            image:"grafiken/block2.png",
            title:"Wasserprojekt",
            photo:"bilder/excel.png",
            description:"Ich hatte jedoch schon ein bisschen mit der Auswertung angefangen. "},
               {
            image:"grafiken/block2.png",
            title:"Wasserprojekt",
            photo:"bilder/pässe.jpg",
            description:"Dann habe ich mit meinen Mitbewohnis über Schwimmabzeichen gesprochen. In der Schweiz gibt es ziemlich viele, viel mehr als nur Seepferdchen. Da kam mir die Idee, mir eigene Spaßschwimmabzeichen auszudenken, die man dann mit seinen Freunden machen und sammeln kann. Ich habe mit Skizzen möglicher Tiere angefangen. "},
             {
            image:"grafiken/block2.png",
            title:"Wasserprojekt",
            photo:"bilder/mitstickern.jpg",
            description:"So entstand der pinke Schwimmpass. Er ist vom Design an deutsche Schwimmpässe angelehnt. Die Aufgaben haben meist einen Bezug zum Verhalten oder Leben der Tiere, die das Abzeichen darstellt. Wenn man alle Aufgaben geschafft hat, bekommt man einen Sticker für seinen Pass. "},
             {
            image:"grafiken/block2_ende.png",
            title:"Wasserprojekt",
            photo:"bilder/schwimmpaessemitstickern.jpg",
            description:"Hat man alle Sticker, erhält man die Chimäre, die eine Kombination aus all den Abzeichentieren ist. "},
        ]}

    // Weitere Punkte:
    //
    // andererpunkt: {
    //     pages: [
    //         {
    //             image: "grafiken/block1.png",
    //             title: "...",
    //             description: "..."
    //         },
    //         {
    //             image: "grafiken/block2.png",
    //             title: "...",
    //             description: "..."
    //         }
    //     ]
    // }

};

function ladePopupSeite() {


    const seite = aktuellerPunkt.pages[aktuelleSeite];

    popupImage.src = seite.image;
    popupTitle.textContent = seite.title;
    popuppreDatum.textContent = seite.predatum;
    popupDescription.textContent = seite.description;
    popupDatum.textContent = seite.datum;

    if (seite.link) {

    popupLink.href = seite.link;
    popupLink.textContent = seite.linkText || "Hier geht's zur Webseite!";
    popupLink.style.display = "block";

} else {

    popupLink.style.display = "none";

}    

    if (seite.photo) {
        popupPhoto.src = seite.photo;
        popupPhoto.alt = seite.photoAlt || "";
        popupPhoto.style.display = "block";
    } else {
        popupPhoto.style.display = "none";
    }
    
// Video
if (seite.video) {
    popupVideo.src = seite.video;
    popupVideo.style.display = "block";
} else {
    popupVideo.pause();
    popupVideo.removeAttribute("src");
    popupVideo.load();
    popupVideo.style.display = "none";


}}





function navigierePopup(action) {

    if (!aktuellerPunkt) return;

    if (action === "next") {

        if (aktuelleSeite < aktuellerPunkt.pages.length - 1) {
            aktuelleSeite++;
            ladePopupSeite();
        }

    }

    if (action === "back") {

        if (aktuelleSeite > 0) {
            aktuelleSeite--;
            ladePopupSeite();
        }

    }

}

circles.forEach(circle => {

    circle.addEventListener("click", function(event){

        aktuellerPunkt = popupContent[this.id];

        if (!aktuellerPunkt) return;

        aktuelleSeite = 0;

        if (aktuellerPunkt.sound) {
            popupAudio.src = aktuellerPunkt.sound;
            popupAudio.currentTime = 0;
            popupAudio.play();
        }

        ladePopupSeite();

        popupOverlay.style.display = "block";

    });

});

closeButton.addEventListener("click", function(){

    popupOverlay.style.display = "none";

});

popupAreas.forEach(area => {

    area.addEventListener("click", function(event){

        // event.preventDefault();
        navigierePopup(area.dataset.action);

    });

});

popupImage.addEventListener("click", function(event) {

    if (!aktuellerPunkt) return;

    const rect = popupImage.getBoundingClientRect();
    const naturalWidth = popupImage.naturalWidth || popupImage.clientWidth;
    const naturalHeight = popupImage.naturalHeight || popupImage.clientHeight;

    if (naturalWidth === 0 || naturalHeight === 0) return;

    const scaleX = rect.width / naturalWidth;
    const scaleY = rect.height / naturalHeight;

    const clickX = (event.clientX - rect.left) / scaleX;
    const clickY = (event.clientY - rect.top) / scaleY;

    popupAreas.forEach(area => {

        const coords = area.coords.split(",").map(Number);
        const [x1, y1, x2, y2] = coords;

        if (clickX >= x1 && clickX <= x2 && clickY >= y1 && clickY <= y2) {
            event.preventDefault();
            navigierePopup(area.dataset.action);
        }

    });

});