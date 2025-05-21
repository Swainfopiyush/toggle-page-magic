
import { Bell } from "lucide-react";
import GooglePlayLogo from "./GooglePlayLogo";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="border-b bg-white flex items-center h-14 px-4 sticky top-0 z-10">
      <button 
        onClick={toggleSidebar}
        className="mr-4 text-gray-500 hover:bg-gray-100 p-2 rounded-full"
        aria-label="Toggle sidebar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M3 12h18M3 6h18M3 18h18" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </button>
      
      <Link to="/dashboard" className="flex items-center">
        <GooglePlayLogo />
        <span className="ml-2 text-xl font-medium text-[#5f6368]">Console</span>
      </Link>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
          <Bell size={18} />
          <span>Notifications</span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">Weather Forecast</span>
            <span className="text-xs text-gray-500">com.weather.liveweather.storm</span>
          </div>
          <div className="bg-[#4285f4] w-8 h-8 rounded-md flex items-center justify-center text-white font-medium">
            26°
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
