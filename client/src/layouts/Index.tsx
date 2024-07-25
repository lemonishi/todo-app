import Navbar from "../components/Navbar.tsx";
import { ThemeProvider } from "@/components/modetoggle/ThemeProvider.tsx";

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
