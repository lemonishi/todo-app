import Navbar from "../components/Navbar.tsx";
import { ThemeProvider } from "@/components/ModeToggle/ThemeProvider.tsx";

function Index() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Navbar />
    </ThemeProvider>
  );
}

export default Index;
