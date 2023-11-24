import * as elements from "typed-html";
import { Menu } from "../../components/Menu";

export const menuItemsGet = async () => {
  const items = [
    {
      name: "item 1",
      description: "description 1",
    },
    {
      name: "item 2",
      description: "description 2",
    },
  ];

  return <Menu items={items} />;
};
