// Import React
import React from "react";

// Import Spectacle Core tags
import {
  S,
  Deck,
  Slide,
  Image,
  Heading,
  Link,
  Text,
  BlockQuote,
  Quote,
  Cite,
  List,
  ListItem,
  Appear,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

const images = {
  odessajsLogo: require("../assets/odessajs-logo.svg"),
  denysdovhan: require("../assets/denysdovhan.png"),
  chernivtsijsBg: require("../assets/chernivtsijs-bg.jpg"),
  chernivtsijs: require("../assets/chernivtsijs-logo.png"),
  lambdabooks: require("../assets/lambdabooks-logo.png"),
  titleBg: require("../assets/adventure.gif"),
  bashPrompt: require("../assets/bash-prompt.gif"),
  robbyrussell: require("../assets/robbyrussell.png"),
  powerlevel9k: require("../assets/powerlevel9k.gif"),
  pure: require("../assets/pure.png"),
  madRick: require("../assets/mad-rick.gif"),
  spaceship: require("../assets/spaceship-logo.svg"),
  spaceshipPreview: require("../assets/spaceship-preview.gif"),
  summerRainbow: require("../assets/summer-rainbow.gif"),
  boredMorty: require("../assets/bored-morty.gif"),
  brokenEscaping: require("../assets/broken-escaping.gif"),
  evilRick: require("../assets/evil-rick.gif"),
  tweet: require("../assets/tweet.png"),
  dubdub: require("../assets/dubdub.gif")
};

Object.keys(images).forEach((image) => {
  images[image] = images[image].replace("/", "");
});

preloader(images);

const colors = {
  primary: "white",
  secondary: "#3F4042",
  tertiary: "#35C9DD",
  quartenary: "#97CE4C",
  // Rick and Morty colors
  blue: "#35C9DD",
  yellow: "#F0E14A",
  green: "#97CE4C",
  pink: "#E89AC7"
};

const fonts = {
  primary: { name: "Open Sans", googleFont: true, styles: ["300", "700"] },
  secondary: "Helvetica"
};

const theme = createTheme(colors, fonts);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} progress="none">
        <Slide>
          <Image src={images.odessajsLogo} width="50%"/>
          <Heading margin=".2em auto 0" textColor="secondary">
            Hello, Odessa!
          </Heading>
        </Slide>

        <Slide>
          <Link href="https://github.com/denysdovhan" target="_blank">
            <Image src={images.denysdovhan} width="100%" margin="-250px" />
          </Link>
        </Slide>

        <Slide bgImage={images.chernivtsijsBg} bgDarken={0.5}>
          <Link href="https://chernivtsi.js.org/" target="_blank">
            <Image src={images.chernivtsijs} width="80%" margin="5rem auto 0" />
            <Text textColor="white" margin="7rem 0 0">
              chernivtsi.js.org
            </Text>
          </Link>
        </Slide>

        <Slide bgColor="#EAF0CE">
          <Image src={images.lambdabooks} width="300px" />
          <Heading size={2} textColor="#3F334D">LambdaBooks</Heading>
          <Text textColor="#3F334D" margin="5rem 0 0">
            github.com/LambdaBooks
          </Text>
        </Slide>

        <Slide bgImage={images.titleBg} bgDarken={0.75}>
          <Heading size={2} fit caps textColor="green">
            Cross-shell
          </Heading>
          <Heading size={1} fit caps textColor="blue">
            Prompts
          </Heading>
          <Heading size={3} fit caps textColor="yellow">
            in JavaScript
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2}>Що таке <span style={{ color: colors.green }}>prompt</span>?</Heading>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote>
              <span style={{ color: colors.green }}>prompt</span> —
              a word or symbol to show that the system is waiting for input.
            </Quote>
            <Cite>English Oxford Living Dictionaries</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading textSize="20em">$</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="yellow">Промпти в шелах</Heading>
          <List>
            <ListItem><S type="bold">$PS1</S> — bash</ListItem>
            <ListItem><S type="bold">$PS1</S> — ksh</ListItem>
            <ListItem><S type="bold">$PROMPT</S> — zsh</ListItem>
            <ListItem><S type="bold">fish_prompt</S> — fish</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={images.bashPrompt} width="100%"/>
        </Slide>

        <Slide>
          <Heading size={2}><span style={{ color: colors.blue }}>$</span> може бути кориснішим</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">Що може бути корисним?</Heading>
          <Appear>
          <List>
            <ListItem><S type="bold">$PWD</S> — директорія</ListItem>
            <ListItem><S type="bold">$USER</S> — користувач</ListItem>
            <ListItem><S type="bold">$HOST</S> — машина</ListItem>
            <ListItem><S type="bold">$?</S> — код виходу</ListItem>
            <Appear>
              <ListItem><S type="bold">git branch</S> — гілка репозиторію</ListItem>
            </Appear>
            <Appear>
              <ListItem><S type="bold">git status</S> — стан репозиторію</ListItem>
            </Appear>
            <Appear>
              <ListItem bold>…</ListItem>
            </Appear>
          </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} textColor="pink">Готові промпти</Heading>
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary">robbyrussell</Heading>
          <Image src={images.robbyrussell} width="100%" />
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary">powerlevel9k</Heading>
          <Image src={images.powerlevel9k} width="100%" margin="2em auto" />
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary">pure</Heading>
          <Image src={images.pure} width="100%" />
        </Slide>

        <Slide bgImage={images.madRick} bgDarken={0.7}>
          <Heading size={2} caps fit textColor="green">Хочу</Heading>
          <Heading size={2} caps fit textColor="blue">Більше</Heading>
        </Slide>

        <Slide>
          <Image src={images.spaceship} width="70%" />
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary">spaceship-zsh-theme</Heading>
          <Image src={images.spaceshipPreview} width="80%" />
        </Slide>

        <Slide>
          <Text lineHeight={1.6}>
            Git • Node.js • Ruby • Python • Swift • Xcode • PHP • Mercurial • Elixir • Go • Haskell • Julia • Docker • .Net • Ember.js • Vi-mode
          </Text>
        </Slide>

        <Slide bgImage={images.summerRainbow} bgDarken={0.3}>
          {/* Empty slide */}
        </Slide>

        <Slide>
          <Heading size={2}>Але не все так райдужно</Heading>
        </Slide>

        <Slide>
          <Heading size={1}>Проблеми</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">Тести</Heading>
          <Text margin="1rem auto">Практично всі промпти не тестуються</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="yellow">zsh складний</Heading>
          <Text margin="1rem auto">Штука без сумніву крута, але не для програмування</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="pink">Конфігурування</Heading>
          <Text margin="1rem auto">Опції можна передавати лише як змінні оточення</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="blue">Портабельність</Heading>
          <Text margin="1rem auto">Синтаксиси шелів не сумісні</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">Керування залежностями</Heading>
          <Text margin="1rem auto">Немає ніяких пакетних менеджерів</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="yellow">Проблеми з інсталяцією</Heading>
          <Text margin="1rem auto">Складно автоматизувати інсталяцію</Text>
        </Slide>

        <Slide bgImage={images.boredMorty} bgDarken={0.3}>
          {/* Everyone is bored. */}
        </Slide>

        <Slide>
          <Heading size={2} textColor="blue">Єдина кодова база</Heading>
          <Text margin="1rem auto">Написана на нормальній мові</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">Адаптери</Heading>
          <Text margin="1rem auto">Скрипти під кожен з шелів, які згладжуватимуть їх гострі кути</Text>
        </Slide>

        <Slide>
          <Heading size={1} textColor="yellow">
            До чого тут JavaScript?
          </Heading>
        </Slide>

        <Slide bgImage={images.evilRick} bgDarken={0.3}>
          {/* Давате перепишемо все на JavaScript! */}
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">
            Node.js теж має обмеження
          </Heading>
          <Text margin="1rem auto">На щастя, їх легше вирішувати</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="pink">
            process.env
          </Heading>
          <Text margin="1rem auto">Лише експортовані змінні оточення і лише на читання</Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="yellow">
            Коди виходу
          </Heading>
          <Text margin="1rem auto">З Node.js не вийде дістати код виходу $?</Text>
        </Slide>

        <Slide>
          <Image src={images.brokenEscaping} width="100%" />
        </Slide>

        <Slide bgColor="#2D2D2D">
          <CodePane
            lang="js"
            textSize="1.25rem"
            source={`
/**
 * Escape non-printable characters
 * Otherwise readline cannot keep track of the cursor position correctly
 *
 * Related issues:
 *  @link: http://stackoverflow.com/a/19501528/5508862
 *  @link: http://stackoverflow.com/a/30581694/5508862
 */
function escapeNonPrintable(shell) {
  return (ansiCode) => {
    switch (shell) {
      case 'sh'  :
      case 'bash': return '\\001' + ansiCode + '\\002';
      case 'zsh' : return   '%{' + ansiCode + '%}'  ;
      case 'fish': return          ansiCode         ;
      default    : return          ansiCode         ;
    }
  };
}
            `}
          />
        </Slide>

        <Slide>
          <Heading size={2} textColor="pink">Адаптер</Heading>
        </Slide>

        <Slide bgColor="#2D2D2D">
          <CodePane
            lang="js"
            textSize="1.5rem"
            source={`
# BASH-specific adapter
prompt_bash_atapter() {
  prompt_previous_exit_code="$?"
  prompt 'bash' $prompt_previous_exit_code
}

# set prompt
PS1='$(prompt_bash_atapter)'
            `}
          />
        </Slide>

        <Slide>
          <Link href="htts://github.com/denysdovhan/robbyrussell">
            <Heading fit>
              <S type="underline">
                denysdovhan/robbyrussell
              </S>
            </Heading>
          </Link>
        </Slide>

        <Slide>
          <Heading size={1}>Переваги</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">Високорівнева мова</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            Легше організувати код
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="yellow">Один код для всього</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            Ядро одне і для всіх шелів.<br />
            Для підтримки нового шелу потрібно лише написати адаптер.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="pink">Кросплатформно</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            Можна зібрати через
            {" "}
            <Link href="https://github.com/zeit/pkg" textColor="blue">
              <S type="bold underline">zeit/pkg</S>
            </Link>
            {" "}
            і виконувати на всіх платформах
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="pink">Тестується</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            Можна тестувати на звичних зручних інструментах
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="blue">Конфігурування</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            Можна завантажувати конфігурацію з окремого файлу
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">Пакетні менеджери</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
             Можна користуватись пакетами з npm.<br />
             Поширювати сам промпт можна там же
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="yellow">Асинхронність</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            Можна виконувати перевірки асинхронно через <S type="bold">async/await</S> або <S type="bold">Promise.all()</S>
          </Text>
        </Slide>

        <Slide>
          <Heading size={1}>Недолік</Heading>
          <Text margin="1rem auto" lineHeight={1.2}>
            Запуск Node.js для рендерингу кожного промпту → просідання по швидкодії.
          </Text>
        </Slide>

        <Slide>
          <Heading size={2} textColor="pink">Проксі-шел</Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="green">С імплементація</Heading>
        </Slide>

        <Slide>
          <Image src={images.tweet} width="75%" />
        </Slide>

        <Slide>
          <Heading size={2} textColor="yellow">Матеріали</Heading>
          <List>
            <ListItem textSize="2.5rem">
              <Link href="#" textColor="secondary">
                denysdovhan.com/slides-cross-shell-promps
              </Link>
            </ListItem>
            <ListItem textSize="2.5rem">
              <Link href="https://github.com/denysdovhan/spaceship-zsh-theme" textColor="secondary">
                denysdovhan/spaceship-zsh-theme
              </Link>
            </ListItem>
            <ListItem textSize="2.5rem">
              <Link href="https://github.com/denysdovhan/robbyrussell" textColor="secondary">
                denysdovhan/robbyrussell
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Link href="https://twitter.com/denysdovhan">
            <Heading>
              <S type="underline">
                @denysdovhan
              </S>
            </Heading>
          </Link>
        </Slide>

        <Slide bgImage={images.dubdub} bgDarken={0.7}>
          <Heading textColor="blue">
            Дякую за увагу!
          </Heading>
          <Text margin="1rem auto" lineHeight={1.2} textColor="white">1–2 Jul 2017</Text>
          <Link href="#">
            <Text margin="6em auto" textSize="2rem" textColor="white">
              Slides: denysdovhan.com/slides-cross-shell-promps
            </Text>
          </Link>
        </Slide>

        <Slide>
          <Heading>Питання?</Heading>
        </Slide>

        <Slide>
          <Heading>У мене є стікери! 😃</Heading>
        </Slide>

      </Deck>
    );
  }
}
