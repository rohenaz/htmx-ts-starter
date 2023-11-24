import * as elements from "typed-html";
import Footer from "./Footer";
import Header from "./Header";

export function Body({ children }: elements.Children) {
  return (
    <body class="flex flex-col w-full h-screen justify-center items-center">
      <Header />
      <main class="h-full">{children}</main>
      <Footer />
    </body>
  );
}
