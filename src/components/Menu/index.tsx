import * as elements from "typed-html";

export type MenuItem = {
  name: string;
  description: string;
};

export function Menu({ items }: { items: MenuItem[] }) {
  return (
    <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      {items.map((item) => (
        <li>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
