import React, { useEffect, useState } from "react";
import comillas from "../assets/comillas.png";

export const Quote_machine = () => {
  const [frases, setFrases] = useState([
    {
      id: 1,
      autor: "Albert Einstein",
      frase: "La imaginación es más importante que el conocimiento.",
      color: "#FFE4B5",
    },
    {
      id: 2,
      autor: "Isaac Newton",
      frase: "Lo que sabemos es una gota, lo que ignoramos es un océano.",
      color: "#4287f5",
    },
    {
      id: 3,
      autor: "Mahatma Gandhi",
      frase: "Sé el cambio que quieres ver en el mundo.",
      color: "#d93054",
    },
    {
      id: 4,
      autor: "Nelson Mandela",
      frase:
        "Después de subir una gran colina, uno se encuentra solo que hay muchas más colinas por subir.",
      color: "#e0ae38",
    },
    {
      id: 5,
      autor: "Leonardo da Vinci",
      frase: "Simplicidad es la máxima sofisticación.",
      color: "#26f0d8",
    },
    {
      id: 6,
      autor: "Pablo Picasso",
      frase: "Todo lo que puedas imaginar es real.",
      color: "#576de6",
    },
    {
      id: 7,
      autor: "Stephen Hawking",
      frase: "La inteligencia es la habilidad de adaptarse a los cambios.",
      color: "#681a9c",
    },
    {
      id: 8,
      autor: "Charles Darwin",
      frase:
        "No es la especie más fuerte la que sobrevive, ni la más inteligente, sino la que mejor se adapta a los cambios.",
      color: "#c310cc",
    },
    {
      id: 9,
      autor: "Jane Austen",
      frase:
        "La felicidad en el matrimonio es una cuestión de pura casualidad.",
      color: "#8a1339",
    },
    {
      id: 10,
      autor: "Mark Twain",
      frase:
        "La edad es una cuestión de mente sobre la materia. Si no te importa, no importa.",
      color: "#7ee83c",
    },
    {
      id: 11,
      autor: "Maya Angelou",
      frase:
        "La belleza de las cosas viejas, como de las personas de edad, es que tienen pasado y han vivido una vida rica y significativa.",
      color: "#FFE4B5",
    },
    {
      id: 12,
      autor: "Winston Churchill",
      frase: "El éxito es ir de fracaso en fracaso sin perder entusiasmo.",
      color: "#FFE4B5",
    },
    {
      id: 13,
      autor: "J.K. Rowling",
      frase:
        "La verdadera amistad significa aceptar a tus amigos sin importar sus defectos.",
      color: "#7ee83c",
    },
    {
      id: 14,
      autor: "Steve Jobs",
      frase:
        "Tu trabajo va a llenar gran parte de tu vida, y la única manera de estar realmente satisfecho es hacer lo que creas es un gran trabajo.",
      color: "#7ee83c",
    },
    {
      id: 15,
      autor: "Marie Curie",
      frase:
        "Nada en la vida debe ser temido, solo debe ser entendido. Ahora es el momento de entender más, para que podamos temer menos.",
      color: "#FFE4B5",
    },
    {
      id: 16,
      autor: "Vincent van Gogh",
      frase:
        "La emoción y el amor son los secretos principales de las obras de arte.",
      color: "#FFE4B5",
    },
    {
      id: 17,
      autor: "Helen Keller",
      frase: "La vida es una aventura atrevida o no es nada en absoluto.",
      color: "#FFE4B5",
    },
    {
      id: 18,
      autor: "Frida Kahlo",
      frase: "Pies, ¿para qué los quiero si tengo alas para volar?",
      color: "#FFE4B5",
    },
    {
      id: 19,
      autor: "Aristóteles",
      frase: "La educación es el mejor provisionamiento para la vejez.",
      color: "#c310cc",
    },
    {
      id: 20,
      autor: "Oscar Wilde",
      frase:
        "Ser natural es simplemente una pose, y la pose es la cosa más difícil del mundo de mantener.",
      color: "#FFE4B5",
    },
    {
      id: 21,
      autor: "George Orwell",
      frase:
        "La libertad es el derecho a decirle a la gente lo que no quiere oír.",
      color: "#c310cc",
    },
    {
      id: 22,
      autor: "Friedrich Nietzsche",
      frase:
        "El que lucha con monstruos debe tener cuidado de no convertirse en uno.",
      color: "#c310cc",
    },
    {
      id: 23,
      autor: "Emily Dickinson",
      frase: "La esperanza es esa cosa con plumas que se posa en el alma.",
      color: "#FFE4B5",
    },
    {
      id: 24,
      autor: "Pablo Neruda",
      frase: "Puedo escribir los versos más tristes esta noche.",
      color: "#FFE4B5",
    },
    {
      id: 25,
      autor: "Haruki Murakami",
      frase:
        "La soledad no es algo que nos hace desgraciados, es lo que nos hace grandes.",
      color: "#FFE4B5",
    },
    {
      id: 26,
      autor: "Ernest Hemingway",
      frase:
        "La mejor manera de averiguar si puedes confiar en alguien es confiar en ellos.",
      color: "#FFE4B5",
    },
    {
      id: 27,
      autor: "Leo Tolstoy",
      frase: "La verdadera felicidad es imposible sin la verdad.",
      color: "#FFE4B5",
    },
  ]);
  const [numero, setNumero] = useState(0);

  const handleChange = () => {
    let random = Math.floor(Math.random() * 27);
    while (numero === random) {
      random = Math.floor(Math.random() * 27);
    }

    setNumero(random);
  };

  useEffect(() => {
    console.log(numero);
  }, [numero]);

  return (
    <div
      style={{
        background: frases[numero].color,
        height: "100vh",
        transition: "ease 0.9s all",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            minHeight: "300px",
            height: "auto",
            width: "550px",
            background: "#FFFFFF",
            padding: "40px 50px",
            borderRadius: "17px",
          }}
        >
          <div style={{ display: "flex", height: "40%" }}>
            <img src={comillas} alt="comillas" height={26} width={27} />
            <h2
              style={{
                fontSize: "28px",
                color: "rgb(22, 160, 133)",
                marginLeft: "15px",
                transition: "ease 0.9s all",
              }}
            >
              {frases[numero].frase}
            </h2>
          </div>

          <div
            style={{
              marginTop: "14px",
              height: "30%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <span
              style={{
                color: "rgb(22, 160, 133)",
                fontSize: "1rem",
                transition: "ease 0.9s all",
              }}
            >
              - {frases[numero].autor}
            </span>
          </div>

          <div
            style={{
              marginTop: "16px",
              height: "30%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: 'bottom',
            }}
          >
            <div>
              <a
                href="https://www.odilmartinez.com"
                target="_blank"
                style={{
                  border: "none",
                  padding: "13px",
                  background: "rgb(22, 160, 133)",
                  borderRadius: "7px",
                  color: "#FFF",
                  textDecoration: "none",
                  fontSize: "19px",
                  marginRight: '15px'
                }}
              >
                Twiter
              </a>

              <a
                href="https://www.odilmartinez.com"
                target="_blank"
                style={{
                  border: "none",
                  padding: "13px",
                  background: "rgb(22, 160, 133)",
                  borderRadius: "7px",
                  color: "#FFF",
                  textDecoration: "none",
                  fontSize: "19px",
                }}
              >
                Facebook
              </a>
            </div>
            <div>
              <button
                style={{
                  border: "none",
                  padding: "13px",
                  background: "rgb(22, 160, 133)",
                  borderRadius: "7px",
                  color: "#FFF",
                }}
                onClick={handleChange}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
