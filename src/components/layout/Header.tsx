import * as elements from "typed-html";

const Header = () => {
  console.log("Header called");
  return (
    <header class="p-2 w-full max-w-6xl mx-auto">
      <div
        id="template-menu"
        hx-get="/menuItems"
        hx-swap="innerHTML"
        hx-trigger="load"
        hx-target="#template-menu"
        class="text-center my-8"
      ></div>
    </header>
  );
};

export default Header;
