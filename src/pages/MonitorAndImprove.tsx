
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MonitorAndImprove = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Monitor and improve</h1>

      <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start gap-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="flex-1">
          <div className="text-red-700">Policy status</div>
          <div className="text-sm text-red-700 mt-1">Your app has policy issues that may affect the availability of your app</div>
        </div>
        <Link to="/policy-status" className="google-btn bg-red-600">
          View issues
          <ChevronRight size={16} />
        </Link>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Android vitals</h2>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Last 28 days
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <MetricCard
            title="User-perceived crash rate"
            value="-"
            linkTo="/android-vitals/crash-rate"
          />
          <MetricCard
            title="User-perceived ANR rate"
            value="-"
            linkTo="/android-vitals/anr-rate"
          />
          <MetricCard
            title="Slow cold start rate"
            value="-"
            linkTo="/android-vitals/cold-start-rate"
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Ratings and reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-500">Average rating (last 28 days)</div>
            <div className="flex items-center mt-2">
              <span className="text-xl font-medium">-</span>
              <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-500">Total users</div>
            <div className="text-xl font-medium mt-2">84</div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="text-sm text-gray-500">Ratings with reviews</div>
            <div className="text-xl font-medium mt-2">17</div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="font-medium text-red-700">Take action</div>
        </div>

        <div className="flex items-start gap-4 bg-red-50 p-4 rounded-md border border-red-100">
          <div className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded">Needs attention</div>
          <div>
            <div className="font-medium">Your app uses an SDK version with a critical note</div>
            <div className="text-sm text-gray-700 mt-1">GMA SDK (com.google.android.gms.play-services-ads) has added a note to version 20.5.0.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  linkTo: string;
}

const MetricCard = ({ title, value, linkTo }: MetricCardProps) => {
  return (
    <Link to={linkTo} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-xl font-medium mt-1">{value}</div>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>

      <div className="mt-8 flex items-center justify-center text-gray-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19H20M4 5V15H20V5H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 15V9M12 15V12M17 15V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="text-sm ml-2">Data unavailable</div>
      </div>
    </Link>
  );
};

export default MonitorAndImprove;
