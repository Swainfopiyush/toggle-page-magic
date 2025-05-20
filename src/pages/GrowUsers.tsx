
import { ChevronRight } from "lucide-react";

const GrowUsers = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Grow users</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg">
          <div className="bg-gray-50 border-b px-4 py-3">
            <h2 className="font-medium">User acquisition</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="text-gray-600 text-sm">Last 28 days, compared to previous year</div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-500">Device acquisitions</div>
                <div className="flex items-center">
                  <span className="text-xl font-medium">3</span>
                  <span className="ml-2 text-xs text-red-500">-81%</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">User conversion rate</div>
                <div className="text-xl font-medium">-</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Average revenue</div>
                <div className="text-xl font-medium">$0.00</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg">
          <div className="bg-gray-50 border-b px-4 py-3">
            <h2 className="font-medium">User engagement</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="text-gray-600 text-sm">Last 28 days, compared to previous year</div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-500">MAU</div>
                <div className="text-xl font-medium">-</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">DAU</div>
                <div className="text-xl font-medium">-</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">DAU/MAU</div>
                <div className="text-xl font-medium">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-medium mb-4">App marketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg">
            <div className="bg-gray-50 border-b px-4 py-3 flex items-center justify-between">
              <h3 className="font-medium">Google Ads campaigns</h3>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="p-6 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 inline-block mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 8M12 8L15 11M12 8V16M7 3H17L21 7V17L17 21H7L3 17V7L7 3Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-lg font-medium mb-2">Drive installs with Google Ads</div>
                <p className="text-gray-500 mb-4">Create ads that appear on Google Search, YouTube, and more</p>
                <button className="google-btn">
                  Create campaign
                </button>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg">
            <div className="bg-gray-50 border-b px-4 py-3 flex items-center justify-between">
              <h3 className="font-medium">Pre-registration</h3>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="p-6 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 inline-block mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21L8.5 19.5L12 21L15.5 19.5L19 21Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7H15" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11H15" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H13" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-lg font-medium mb-2">Build excitement before launch</div>
                <p className="text-gray-500 mb-4">Allow users to register interest in your app before it's released</p>
                <button className="google-btn">
                  Set up pre-registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-medium mb-4">Promotional content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg">
            <div className="bg-gray-50 border-b px-4 py-3 flex items-center justify-between">
              <h3 className="font-medium">Custom store listing</h3>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="p-6 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" stroke="#10B981" strokeWidth="2"/>
                    <path d="M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V13Z" stroke="#10B981" strokeWidth="2"/>
                    <path d="M16 13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V13Z" stroke="#10B981" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="text-lg font-medium mb-2">Create custom store listings</div>
                <p className="text-gray-500 mb-4">Customize your store listing for different countries and regions</p>
                <button className="google-btn">
                  Create custom store listing
                </button>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg">
            <div className="bg-gray-50 border-b px-4 py-3 flex items-center justify-between">
              <h3 className="font-medium">In-app promotions</h3>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="p-6 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-3 inline-block mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-lg font-medium mb-2">Showcase features and promotions</div>
                <p className="text-gray-500 mb-4">Highlight new features or special offers in your store listing</p>
                <button className="google-btn">
                  Add promotion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowUsers;
