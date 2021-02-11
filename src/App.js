import {
  Box,
  ChakraProvider,
  extendTheme,
  useStyleConfig,
} from "@chakra-ui/react";
import PokeProvider from "./context/pokeProvider";
import Router from "./routes/Router";

const components = {
  PokemonCard: {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === "light" ? "red.400" : "green.400",
    }),
  },
};

const CustomCard = (props) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("CustomCard", { size, variant });

  return <Box sx={styles} {...rest} />;
};

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
    components,
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
        {/* <CustomCard>testando</CustomCard> */}
        <Router />
      </ChakraProvider>
    </PokeProvider>
  );
};

export default App;
