import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen === 1);

  useEffect(() => {
    setIsOpen(item.isOpen === 1);
  }, [item.isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (item.childrens) {
    return (
      <div className={`sidebar-item ${isOpen ? "open" : ""}`}>
        <div className="sidebar-title" onClick={toggleOpen}>
          <span>
            {item.icon && <i className={item.icon}></i>}
            <span className="ms-2">{item.title}</span>
          </span>
          <i className={`bi-chevron-${isOpen ? "down" : "left"} toggle-btn icon-item`}></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        <span className="ms-2">{item.title}</span>
      </a>
    );
  }
};

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SidebarItem;