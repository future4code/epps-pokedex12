import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PokeProvider from "./context/pokeProvider";
import Router from "./routes/Router";

const App = () => {
  const pokeTheme = extendTheme({
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
          fontSize: "xl",
        },
        h2: {
          fontSize: "6xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "xl",
        },
      },
    },
    fonts: {
      heading: {
        fontFamily: "Cutive Mono",
      },
    },
  });

  return (
    <PokeProvider>
      <ChakraProvider theme={pokeTheme}>
        <Router />
      </ChakraProvider>
    </PokeProvider>
  );
};

export default App;
