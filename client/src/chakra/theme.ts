import { createSystem, defaultConfig, type SystemConfig } from "@chakra-ui/react";

const config: SystemConfig = {
  globalCss: {
    body: {
      bg: {
        _light: "gray.500",
        _dark: "gray.900",
      },
    },
  },
};

const system = createSystem(defaultConfig, config);

export default system;