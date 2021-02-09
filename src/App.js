import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Router from "./routes/Router";

const App = () => {
  const pokeTheme = extendTheme({
    styles: {
      global: {
        "html, body": {
          margin: 0,
          padding: 0,
          borderBox: "box-sizing",
          fontFamily: "Helvetica, sans-serif",
        },
      },
    },
  });

  return (
    <ChakraProvider theme={pokeTheme}>
      <Router />
    </ChakraProvider>
  );
};

export default App;
