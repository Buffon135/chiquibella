import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

import mixpanel from './lib/mixpanel';

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [valueSi, setValueSi] = useState(false);

  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [position, setPosition] = useState('relative');

  let random = [
    {
      id: 1,
      description: 'Di si por favor',
      img: '<div class="tenor-gif-embed" data-postid="9687596934282441288" data-share-method="host" data-aspect-ratio="1.04667" data-width="100%"><a href="https://tenor.com/view/hello-kitty-gif-9687596934282441288">Hello Kitty Sticker</a>from <a href="https://tenor.com/search/hello+kitty-stickers">Hello Kitty Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 1,
      description: 'Piénsalo de nuevo.',
      img: '<div class="tenor-gif-embed" data-postid="12839460080773207053" data-share-method="host" data-aspect-ratio="1.37569" data-width="100%"><a href="https://tenor.com/view/kedikizx-sanrio-hello-kitty-love-hearts-gif-12839460080773207053">Kedikizx Sanrio GIF</a>from <a href="https://tenor.com/search/kedikizx-gifs">Kedikizx GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 2,
      description: 'Vamos, atrévete a decir que sí.',
      img: '<div class="tenor-gif-embed" data-postid="16969081933146884134" data-share-method="host" data-aspect-ratio="1.09211" data-width="100%"><a href="https://tenor.com/view/kitty-gif-16969081933146884134">Kitty GIF</a>from <a href="https://tenor.com/search/kitty-gifs">Kitty GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 3,
      description: 'Confía en mí, será divertido.',
      img: '<div class="tenor-gif-embed" data-postid="11458646006449185996" data-share-method="host" data-aspect-ratio="1.2378" data-width="100%"><a href="https://tenor.com/view/love-you-bear-hello-kitty-cute-pink-gif-11458646006449185996">Love You Bear GIF</a>from <a href="https://tenor.com/search/love+you-gifs">Love You GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 4,
      description: 'No tengas dudas, te hará sonreír.',
      img: '<div class="tenor-gif-embed" data-postid="9418957212397105135" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/huna04-gif-9418957212397105135">Huna04 GIF</a>from <a href="https://tenor.com/search/huna04-gifs">Huna04 GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 5,
      description: 'Te prometo que será inolvidable.',
      img: '<div class="tenor-gif-embed" data-postid="11550066762008846847" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/huna04-gif-11550066762008846847">Huna04 GIF</a>from <a href="https://tenor.com/search/huna04-gifs">Huna04 GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 6,
      description: 'No dejes que el miedo te detenga.',
      img: '<div class="tenor-gif-embed" data-postid="13861341" data-share-method="host" data-aspect-ratio="1.21769" data-width="100%"><a href="https://tenor.com/view/hello-kitty-love-hearts-gif-13861341">Hello Kitty Love Sticker</a>from <a href="https://tenor.com/search/hello+kitty-stickers">Hello Kitty Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 7,
      description: 'Confía en el destino, nos está dando una señal.',
      img: '<div class="tenor-gif-embed" data-postid="3289489037792454675" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/huna04-gif-3289489037792454675">Huna04 GIF</a>from <a href="https://tenor.com/search/huna04-gifs">Huna04 GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 8,
      description: 'Confía en mí.',
      img: '<div class="tenor-gif-embed" data-postid="9511155908388886303" data-share-method="host" data-aspect-ratio="1.23333" data-width="100%"><a href="https://tenor.com/view/blowing-kisses-kisses-love-you-gif-9511155908388886303">Blowing Kisses Love You Sticker</a>from <a href="https://tenor.com/search/blowing+kisses-stickers">Blowing Kisses Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 9,
      description: 'Ya pon que siiii',
      img: '<div class="tenor-gif-embed" data-postid="16659791079022898901" data-share-method="host" data-aspect-ratio="1.44355" data-width="100%"><a href="https://tenor.com/view/july-4th-gif-16659791079022898901">July 4th Sticker</a>from <a href="https://tenor.com/search/july+4th-stickers">July 4th Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
    {
      id: 10,
      description: 'ya mi amor, dale a que si',
      img: '<div class="tenor-gif-embed" data-postid="1522749976194054860" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/huna04-gif-1522749976194054860">Huna04 GIF</a>from <a href="https://tenor.com/search/huna04-gifs">Huna04 GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        ',
    },
  ];

  const randomResponse = () => {
    mixpanel.track('Boton No Clickeado');

    let randX = Math.random() * 70;
    let randY = Math.random() * 80;

    let index = Math.floor(Math.random() * random.length);
    setPosition('absolute');
    setButtonPosition({ top: randY, left: randX });
    setRandomValor(random[index]);
  };

  useEffect(() => {
    mixpanel.track('Pagina Cargada');
  }, []);

  return (
    <main
      id="canvas"
      className="w-screen relative h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center "
    >
      {!valueSi ? (
        <div className="p-5">
          <h1 className="font-bold text-5xl text-center">
            ¿Quieres ser mi San Valentin?
          </h1>
          <img
            src={
              Object.keys(randomValor).length === 0
                ? '<div class="tenor-gif-embed" data-postid="6460213459165930031" data-share-method="host" data-aspect-ratio="1.57895" data-width="100%"><a href="https://tenor.com/view/hi-hello-kitty-wink-hello-gif-6460213459165930031">Hi Hello Kitty GIF</a>from <a href="https://tenor.com/search/hi-gifs">Hi GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
              '
                : randomValor.img
            }
            alt="San Valentin"
            className="mx-auto object-cover h-[200px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
            <button
              onClick={() => {
                mixpanel.track('Boton Si Clickeado');

                setValueSi(true);

                jsConfetti.addConfetti({
                  emojis: ['🌹', '💌', '❤️', '💝'],
                  emojiSize: 70,
                  confettiNumber: 200,
                });
              }}
              className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl`}
            >
              Si
            </button>
            <button
              className="bg-red-500 text-white min-w-48 font-bold p-2 rounded-md text-xl"
              onMouseOver={randomResponse}
              style={{
                position: position,
                top: `${buttonPosition.top}%`,
                left: `${buttonPosition.left}%`,
              }}
            >
              {Object.keys(randomValor).length === 0
                ? 'No'
                : randomValor.description}
              <span hidden>
                {
                  (document.title =
                    Object.keys(randomValor).length === 0
                      ? '¿Puedo ser tu San Valentin?'
                      : randomValor.description)
                }
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl font-bold">
            Amor, estás cordialmente invitada a una cena conmigo este domingo 15 de febrero. Te quiero mucho   ❤️!
          </h1>
          <img
            src="<div class="tenor-gif-embed" data-postid="7950328" data-share-method="host" data-aspect-ratio="1.07333" data-width="100%"><a href="https://tenor.com/view/hello-kitty-lean-love-bff-couple-gif-7950328">Hello Kitty Lean GIF</a>from <a href="https://tenor.com/search/hello+kitty-gifs">Hello Kitty GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    "
            alt=""
            className="mx-auto"
          />
          <span hidden>{(document.title = 'Sabia que dirias que si ❤️!')}</span>
        </div>
      )}
    </main>
  );
}

export default App;
