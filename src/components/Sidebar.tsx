
import { NavLink, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarProps {
  collapsed: boolean;
}

interface SubItem {
  name: string;
  path: string;
}

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  subItems?: SubItem[];
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Track expanded state for items with subitems
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
    '/test-and-release': true,
    '/testing': false,
    '/setup': false,
  });

  // Define sidebar items with their icons and sub-items
  const sidebarItems: SidebarItem[] = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Statistics",
      path: "/statistics",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 19H20M4 5V15H20V5H4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 15V9M12 15V12M17 15V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Publishing overview",
      path: "/publishing-overview",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11.5L11 13L15.5 8.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Test and release",
      path: "/test-and-release",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 15L12 17M12 7L12 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      subItems: [
        { name: "Latest releases", path: "/latest-releases" },
        { name: "Production", path: "/production" },
        { name: "Testing", path: "/testing" },
        { name: "Pre-registration", path: "/pre-registration" },
        { name: "App integrity", path: "/app-integrity" },
        { name: "App bundle explorer", path: "/app-bundle-explorer" },
        { name: "App signing", path: "/app-signing" },
        { name: "Advanced settings", path: "/advanced-settings" },
      ]
    },
    {
      name: "Monitor and improve",
      path: "/monitor-and-improve",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M19.07 19.07L16.24 16.24M4.93 4.93L7.76 7.76M4.93 19.07L7.76 16.24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Grow users",
      path: "/grow-users",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 6.5L12 2L7 6.5M12 22V2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      subItems: [
        { name: "Store presence", path: "/store-presence" },
        { name: "Store performance", path: "/store-performance" },
        { name: "Deep links", path: "/deep-links" },
      ]
    },
    {
      name: "Monetize with Play",
      path: "/monetize-with-play",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  // Function to check if a path is active
  const isPathActive = (path: string) => {
    return currentPath === path || 
           currentPath.startsWith(`${path}/`) || 
           (path !== "/dashboard" && currentPath.includes(path));
  };
  
  // Function to toggle subitems visibility
  const toggleSubItems = (path: string) => {
    if (collapsed) return;
    setExpandedItems(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  // Function to determine if we should show sub-items
  const shouldShowSubItems = (item: SidebarItem) => {
    return !collapsed && item.subItems && (expandedItems[item.path] || isPathActive(item.path));
  };

  return (
    <aside
      className={cn(
        "border-r bg-[#f8f9fa] transition-all duration-300 overflow-hidden h-[calc(100vh-3.5rem)]",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-3 border-b">
        <NavLink
          to="/all-apps"
          className="flex items-center text-[#5f6368] hover:bg-gray-100 rounded-md p-2"
        >
          <ChevronLeft size={16} />
          {!collapsed && <span className="ml-2 text-sm">All apps</span>}
        </NavLink>
      </div>

      <nav className="overflow-y-auto h-full">
        <ul className="py-2">
          {sidebarItems.map((item) => (
            <li key={item.name} className="px-2 mb-1">
              <div className="flex flex-col">
                <div 
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md cursor-pointer",
                    isPathActive(item.path)
                      ? "bg-[#e8f0fe] text-[#1a73e8]"
                      : "text-[#5f6368] hover:bg-gray-100",
                  )}
                  onClick={() => {
                    if (item.subItems?.length) {
                      toggleSubItems(item.path);
                    }
                  }}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  
                  {!collapsed && (
                    <>
                      <span className="ml-3 text-sm font-medium flex-1">{item.name}</span>
                      
                      {item.subItems?.length && (
                        <button 
                          className="p-1 rounded-full hover:bg-gray-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubItems(item.path);
                          }}
                        >
                          {expandedItems[item.path] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </button>
                      )}
                    </>
                  )}
                </div>
                
                {shouldShowSubItems(item) && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.subItems?.map((subItem) => (
                      <li key={subItem.name}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) => cn(
                            "block py-1.5 px-2 text-sm rounded-md",
                            isActive
                              ? "bg-[#e8f0fe] text-[#1a73e8]"
                              : "text-[#5f6368] hover:bg-gray-100",
                          )}
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
