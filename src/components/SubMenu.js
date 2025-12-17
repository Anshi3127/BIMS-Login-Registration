// SubMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SubMenu({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link to={item.path} onClick={() => item.subNav && setOpen(!open)}>
        <div className="menu-item">
          {item.icon}
          <span>{item.title}</span>
          {item.subNav && <span>{open ? '-' : '+'}</span>}
        </div>
      </Link>
      {open && item.subNav && (
        <div className="subnav">
          {item.subNav.map((sub, i) => (
            <Link key={i} to={sub.path} className="sub-item">{sub.title}</Link>
          ))}
        </div>
      )}
    </>
  );
}
