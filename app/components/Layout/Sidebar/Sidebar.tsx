import { NavLink, useLocation } from "react-router";
import { useAuth } from "~/hooks/useAuth";
import { useState } from "react";

import { CgNotes } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { FaNeos } from "react-icons/fa6";

import logo from "~/assets/logo.svg";
import defaultAvatar from "~/assets/default-avatar.svg";
import chevronLeft from "./icons/chevron-left.svg";
import chevronRight from "./icons/chevron-right.svg";
import UserInfo from "./UserInfo";

interface SubMenuItem {
  name: string;
  path: string;
  badge?: number;
}

interface MenuItem {
  name: string;
  icon?: React.ElementType;
  path: string;
  subItems?: SubMenuItem[];
  badge?: number;
}

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems: MenuItem[] = [
    {
      name: "Neo Analytics",
      icon: HiOutlineChartSquareBar,
      path: "/home",
      subItems: [{ name: "Dashboard", path: "/dashboard" }],
    },
    {
      name: "Supervisor",
      icon: CgNotes,
      path: "/supervisor",
      subItems: [
        { name: "All Autotask", path: "/supervisor/all-autotask" },
        { name: "L1 Queue", path: "/supervisor/l1-queue" },
        { name: "L2 Queue", path: "/supervisor/l2-queue" },
        { name: "Azure", path: "/supervisor/azure" },
      ],
    },
    {
      name: "Neo AI",
      icon: FaNeos,
      path: "/neo-ai",
      subItems: [
        { name: "Chat Assistant", path: "/neo-ai/chat-assistant" },
        { name: "Knowledge Base", path: "/neo-ai/knowledge-base" },
        { name: "Skills", path: "/neo-ai/skills" },
        { name: "Workflows", path: "/neo-ai/workflows", badge: 10 },
      ],
    },
    {
      name: "Accounts",
      icon: GrUserSettings,
      path: "/accounts",
      subItems: [
        { name: "Customers", path: "/accounts/customers" },
        { name: "Integrations", path: "/accounts/integrations" },
      ],
    },
  ];

  // Check if a path is active
  const isActive = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };

  return (
    <aside
      className={`flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? "w-20" : "max-w-[320px]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-gray-200 h-18 px-4 relative">
        <div
          className={`flex items-center ${
            isCollapsed ? "w-full justify-center" : ""
          }`}
        >
          <img
            src={logo}
            alt="Neo Logo"
            className={`${isCollapsed ? "w-10" : "w-12"}`}
          />
          {!isCollapsed && (
            <span className="ml-2 text-3xl font-bold text-gray-800">Neo</span>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 bottom-4 p-1.5 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50"
        >
          <img
            src={chevronLeft}
            alt={isCollapsed ? "Expand" : "Collapse"}
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.name} className="mb-4">
            <NavLink
              to={item.path}
              className={`flex items-center px-4 py-2 text-sm ${
                isActive(item.path)
                  ? "text-gray-900 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              title={isCollapsed ? item.name : undefined}
            >
              {item.icon && <item.icon className="w-5 h-5 mr-3" />}
              {!isCollapsed && <span className="font-bold">{item.name}</span>}
            </NavLink>

            {!isCollapsed && item.subItems && (
              <div className="pl-12 mt-1">
                {item.subItems.map((subItem) => (
                  <NavLink
                    key={subItem.path}
                    to={subItem.path}
                    className={({ isActive }: { isActive: boolean }) =>
                      `flex items-center py-2 text-sm ${
                        isActive
                          ? "text-gray-900 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      }`
                    }
                  >
                    <span>{subItem.name}</span>
                    {subItem.badge && (
                      <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs text-white bg-orange-300 rounded-full">
                        {subItem.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        {!isCollapsed ? (
          <UserInfo
            name={user?.name || ""}
            email={user?.email || ""}
            imageUrl={user?.picture || ""}
            role="Help Desk Technician"
          />
        ) : (
          <img
            src={user?.picture || ""}
            alt={user?.name || ""}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = defaultAvatar;
            }}
          />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
