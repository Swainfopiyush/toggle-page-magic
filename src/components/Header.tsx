
import { Bell } from "lucide-react";
import GooglePlayLogo from "./GooglePlayLogo";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="border-b bg-white flex items-center h-14 px-4">
      <button 
        onClick={toggleSidebar}
        className="mr-4 text-gray-500 hover:bg-gray-100 p-2 rounded-full"
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
      
      <div className="flex items-center">
        <GooglePlayLogo />
        <span className="ml-2 text-xl font-medium text-[#5f6368]">Console</span>
      </div>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">Weather Forecast</span>
            <span className="text-xs text-gray-500">com.weather.liveweather.storm</span>
          </div>
          <div className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center text-white font-medium">
            26°
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
