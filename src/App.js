import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import PokeProvider from "./context/pokeProvider";
import Router from "./routes/Router";

const components = {
  CardPokemon: {
    variants: {
      "poke-type": {
        bgColor: ({ pokeType }) => {
          switch (pokeType) {
            case "water":
              return "blue.00";
            case "fire":
              return "red.400";
            case "grass":
              return "green.300";
            default:
              return "white";
          }
        },
      },
    },
  },
};

const App = () => {
  const pokeTheme = extendTheme({
    components,
    styles: {
      global: {
        "html, body": {
          margin: 0,
          padding: 0,
          borderBox: "box-sizing",
          fontFamily: "Cutive Mono",
        },
        p: {
          padding: 2,
          fontSize: "md",
        },
        h2: {
          fontSize: "6xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "md",
        },
      },
    },
    fonts: {
      heading: {
        fontFamily: "Cutive Mono",
      },
    },
    fontSizes: {
      md: "18px",
      xl: "72px",
      "6xl": "72px",
    },
  });

  return (
    <PokeProvider>
      <ChakraProvider theme={pokeTheme}>
        <CSSReset />
        <Router />
      </ChakraProvider>
    </PokeProvider>
  );
};

export default App;
