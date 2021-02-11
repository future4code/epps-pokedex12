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
          fontSize: "4xl",
        },
        h4: {
          fontSize: "2xl",
        },
      },
    },
    fonts: {
      heading: {
        fontFamily: "Cutive Mono",
        fontSize: 20,
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
