import Index from "./layouts";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Index />
    </MantineProvider>
  );
}
