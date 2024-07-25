import AddTodo from "./AddTodo";
import ModeToggle from "./modetoggle/ModeToggle";

function Navbar() {
  return (
    <header className="flex justify-between items-center max-w-[64rem] border-b border-border m-auto p-3">
      <div>
        <ModeToggle />
      </div>
      <nav>
        <AddTodo />
      </nav>
    </header>
  );
}

export default Navbar;
