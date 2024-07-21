import {
  useMantineColorScheme,
  Button,
  useComputedColorScheme,
} from "@mantine/core";

function ThemeToggler() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("dark");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return <Button onClick={toggleColorScheme}>{colorScheme}</Button>;
}

export default ThemeToggler;
