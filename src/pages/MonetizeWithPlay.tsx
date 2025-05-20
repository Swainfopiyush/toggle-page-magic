
import { ChevronRight } from "lucide-react";

const MonetizeWithPlay = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Monetize with Play</h1>
      
      <div className="border rounded-lg p-6">
        <div className="flex items-start gap-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-4">Set up a merchant account to monetize your app</h2>
            <p className="text-gray-600 mb-6">Monetize your app with in-app purchases, subscriptions, or paid apps on Google Play.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" stroke="#3B82F6" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Complete verification</h3>
                <p className="text-sm text-gray-500">Verify your business details</p>
              </div>
              
              <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H21V19H3V5Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Add payment profile</h3>
                <p className="text-sm text-gray-500">Set up your payment method</p>
              </div>
              
              <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-medium mb-1">Complete tax info</h3>
                <p className="text-sm text-gray-500">Submit tax information</p>
              </div>
            </div>
            
            <button className="google-btn mt-6">
              Get started
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
            <h2 className="font-medium">In-app products</h2>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200">
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8V5C16 3.34315 14.6569 2 13 2H11C9.34315 2 8 3.34315 8 5V8H5C3.34315 8 2 9.34315 2 11V13C2 14.6569 3.34315 16 5 16H8V19C8 20.6569 9.34315 22 11 22H13C14.6569 22 16 20.6569 16 19V16H19C20.6569 16 22 14.6569 22 13V11C22 9.34315 20.6569 8 19 8H16Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Monetize with in-app products</h3>
              <p className="text-gray-500 mb-4">Create one-time purchases or subscriptions</p>
              <button className="google-btn bg-opacity-50 pointer-events-none">
                Create in-app product
                <ChevronRight size={16} />
              </button>
              <div className="mt-2 text-sm text-gray-500">Complete merchant setup first</div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
            <h2 className="font-medium">Custom offers</h2>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200">
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-amber-100 p-3 rounded-full inline-block mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 14L15 8M9.5 8.5H9.51M14.5 13.5H14.51M19 21L17.5 19.5M5 21L19 7L17 5L3 19L5 21Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Create special promotional offers</h3>
              <p className="text-gray-500 mb-4">Target special offers to specific user groups</p>
              <button className="google-btn bg-opacity-50 pointer-events-none">
                Create custom offer
                <ChevronRight size={16} />
              </button>
              <div className="mt-2 text-sm text-gray-500">Complete merchant setup first</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b">
          <h2 className="font-medium">Reports</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-500">Estimated earnings</div>
            <div className="text-2xl font-medium mt-2">$0.00</div>
            <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-500">Buyers</div>
            <div className="text-2xl font-medium mt-2">0</div>
            <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-500">Average revenue per user</div>
            <div className="text-2xl font-medium mt-2">$0.00</div>
            <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
          </div>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b">
          <h2 className="font-medium">Resources</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-full h-fit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-1">Play Academy</h3>
              <p className="text-sm text-gray-500 mb-2">Learn about Play Commerce with free online courses designed for app developers.</p>
              <button className="text-blue-600 hover:underline text-sm font-medium">Browse courses</button>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-violet-100 p-3 rounded-full h-fit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M12 9V15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-1">Developer help</h3>
              <p className="text-sm text-gray-500 mb-2">Find resources to help you implement monetization in your app.</p>
              <button className="text-blue-600 hover:underline text-sm font-medium">View documentation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizeWithPlay;
