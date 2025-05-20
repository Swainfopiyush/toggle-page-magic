
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <header className="mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 w-16 h-16 rounded-md flex items-center justify-center text-white text-2xl font-medium">
            26°
          </div>
          <div>
            <h1 className="text-2xl font-medium">Weather Forecast</h1>
            <div className="text-gray-500 text-sm">com.weather.liveweather.storm • <a href="#" className="text-blue-500 hover:underline">View on Play</a></div>
          </div>
        </div>
      </header>

      <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start gap-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="flex-1">
          <div className="font-medium text-red-700">Publishing overview</div>
          <div className="text-sm text-red-700 mt-1">Some of your changes have been rejected</div>
        </div>
        <Link to="/publishing-overview" className="google-btn bg-red-600">
          View issues
          <ChevronRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard
          title="Test and release"
          content={
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium">Latest production release</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  100%
                  <span>•</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 11H9V17H7V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 9H13V17H11V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 13H17V17H15V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Phones and tablets
                  <span>+2 more</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Released on</div>
                  <div className="font-medium">Dec 15, 2021</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Installs</div>
                  <div className="font-medium">59</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Install base</div>
                  <div className="font-medium">100%</div>
                </div>
              </div>
            </div>
          }
          linkTo="/test-and-release"
        />

        <DashboardCard
          title="Monitor and improve"
          content={
            <div className="space-y-4">
              <div className="text-sm text-gray-500">Last 28 days, compared to previous 28 days</div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Crash rate</div>
                  <div className="font-medium">-</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">ANR rate</div>
                  <div className="font-medium">-</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Average rating</div>
                  <div className="font-medium">-</div>
                </div>
              </div>
            </div>
          }
          linkTo="/monitor-and-improve"
        />

        <DashboardCard
          title="Grow users"
          content={
            <div className="space-y-4">
              <div className="text-sm text-gray-500">Last 28 days, compared to previous year</div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Device acquisitions</div>
                  <div className="flex items-center">
                    <span className="font-medium">3</span>
                    <span className="ml-2 text-xs text-red-500">-81%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">MAU</div>
                  <div className="font-medium">-</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">DAU</div>
                  <div className="font-medium">-</div>
                </div>
              </div>
            </div>
          }
          linkTo="/grow-users"
        />

        <DashboardCard
          title="Monetize with Play"
          content={
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div>To monetize this app, set up a merchant account</div>
                <button className="google-btn mt-2">
                  Get started
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          }
          linkTo="/monetize-with-play"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Latest from Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="flex">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-24 h-24 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="white" strokeWidth="2"/>
                  <path d="M10 12H12M14 12H12M12 12V10M12 12V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Get ready for Google I/O, May 20-21</h3>
                <p className="text-sm text-gray-600 mt-1">Join us online as we share our vision for the future of technology, along with announcements across Android, AI, web, cloud, and more</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="flex">
              <div className="bg-blue-500 w-24 h-24 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="12" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Scan to download the new Play Console mobile app</h3>
                <p className="text-sm text-gray-600 mt-1">Use our new app to monitor metrics, review orders, and reply to reviews on the go</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  content: React.ReactNode;
  linkTo: string;
}

const DashboardCard = ({ title, content, linkTo }: DashboardCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-gray-50 p-4 border-b">
        <h2 className="font-medium">{title}</h2>
        <Link to={linkTo} className="text-blue-600 hover:bg-blue-50 p-1 rounded-full">
          <ChevronRight size={20} />
        </Link>
      </div>
      <div className="p-4">{content}</div>
    </div>
  );
};

export default Dashboard;
