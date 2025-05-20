
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Statistics = () => {
  const [selectedMetric, setSelectedMetric] = useState("Users");
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium">Statistics</h1>
        <div className="text-sm text-blue-600 hover:underline cursor-pointer">Saved reports</div>
      </div>
      
      <div className="text-gray-600 text-sm">
        See detailed, customizable reports about the performance of your app and peers. <span className="text-blue-600 hover:underline cursor-pointer">Show more</span>
      </div>
      
      <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start gap-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <div className="text-red-700">We will soon take action because your app does not adhere to Google Play Developer Program policies. Fix violations as soon as possible.</div>
          <button className="mt-2 text-blue-600 hover:underline text-sm">Go to Policy status</button>
        </div>
      </div>
      
      <div className="border-b">
        <div className="flex">
          <button className="px-4 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">App statistics</button>
          <button className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">Compare to peers</button>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex gap-4">
            <div className="relative">
              <button className="px-4 py-2 border rounded-md flex items-center gap-2 text-sm">
                <span className="text-gray-700">Configure report</span>
              </button>
            </div>
            
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-md text-sm text-gray-700">Save this report</button>
              <div className="relative">
                <button className="px-4 py-2 border rounded-md flex items-center gap-2 text-sm">
                  <span className="text-gray-700">Export report</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <button className="px-4 py-2 border rounded-md flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-700">{selectedPeriod}</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="relative">
            <button className="px-4 py-2 border rounded-md flex items-center gap-2 text-sm">
              <span className="text-gray-700">Installed audience</span>
              <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="text-sm text-gray-700">
            Unique users, Per interval, Daily
            <span className="ml-2 text-blue-600 hover:underline cursor-pointer">Edit</span>
          </div>
          
          <div className="relative">
            <button className="px-4 py-2 border rounded-md flex items-center gap-2 text-sm text-blue-600">
              Select another metric
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <button className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-l-md flex items-center gap-1 text-sm text-blue-700">
              View by: Country / region
              <ChevronDown size={16} />
            </button>
            
            <div className="flex">
              <div className="px-3 py-2 bg-blue-100 text-blue-700 text-sm flex items-center gap-1">
                All countries / regions
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="px-3 py-2 bg-blue-100 text-blue-700 text-sm flex items-center gap-1 ml-1">
                India
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="px-3 py-2 bg-blue-100 text-blue-700 text-sm flex items-center gap-1 ml-1">
                Israel
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="px-3 py-2 bg-blue-100 text-blue-700 text-sm flex items-center gap-1 ml-1">
                Brazil
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="px-3 py-2 bg-blue-100 text-blue-700 text-sm flex items-center gap-1 ml-1">
                Germany
                <button className="ml-1 text-gray-500 hover:text-gray-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <button className="px-3 py-2 bg-white border text-blue-700 text-sm flex items-center gap-1 ml-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Country / region
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Time series</h3>
            
            <div className="mt-6 border rounded-lg p-6 h-64 flex items-center justify-center">
              <div className="w-full h-full">
                <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <path d="M0,150 L50,130 L100,140 L150,120 L200,125 L250,115 L300,120 L350,100 L400,110 L450,90 L500,100 L550,80 L600,90 L650,70 L700,80 L750,60 L800,70" fill="none" stroke="#3B82F6" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
