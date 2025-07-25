import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.jsx";
import { db } from "./db.js";

const Sidebar = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // ini bisa diambil dari api
    setItems(db);
  }, []);
  return (
    <div className="sidebar shadow-sm bg-body-tertiary">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
