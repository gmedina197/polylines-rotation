import React from "react";
import { FaFire, FaPoo } from "react-icons/fa";

type SidebarProps = {
  icon: JSX.Element;
  text?: string;
  onClick?: () => void;
};

function Sidebar(): JSX.Element {
  return (
    <div
      className="h-screen w-16 m-0
                flex flex-col bg-gray-700 
                text-white shadow-sm"
    >
      <SideBarIcon icon={<FaFire size="28" />} text="Salvar"/>
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
    </div>
  );
}

const SideBarIcon = ({
  icon,
  text = "tooltip",
  onClick = () => {},
}: SidebarProps): JSX.Element => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;
