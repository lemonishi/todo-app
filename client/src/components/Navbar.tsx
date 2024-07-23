import ModeToggle from "./ModeToggle/ModeToggle";

function Navbar() {
  return (
    <header className="flex justify-between items-center max-w-[64rem] border-b border-border m-auto p-2">
      <div>
        <ModeToggle />
      </div>
      <nav>Items</nav>
    </header>
  );
}

export default Navbar;
