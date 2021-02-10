import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
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
        <Header />
        <Router />
      </ChakraProvider>
    </PokeProvider>
  );
};

export default App;
