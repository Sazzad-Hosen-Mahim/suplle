import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
