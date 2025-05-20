
import { ChevronRight } from "lucide-react";

const PublishingOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium">Publishing overview</h1>
        <p className="text-gray-600 text-sm mt-2">
          See an overview of the changes made to your app, and control when changes are sent for review or published. <span className="text-blue-600 hover:underline cursor-pointer">Show more</span>
        </p>
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

      <div className="border-b pb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Managed publishing</h2>
          <button className="google-btn">
            Turn on managed publishing
          </button>
        </div>

        <div className="mt-4 flex items-start gap-3 text-gray-700">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00012 10.9999C9.00012 10.4476 9.44784 9.99988 10.0001 9.99988H14.0001C14.5524 9.99988 15.0001 10.4476 15.0001 10.9999V16.9999C15.0001 17.5522 14.5524 17.9999 14.0001 17.9999H10.0001C9.44784 17.9999 9.00012 17.5522 9.00012 16.9999V10.9999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6001 6.99988C10.6001 6.22668 11.2269 5.59988 12.0001 5.59988C12.7733 5.59988 13.4001 6.22668 13.4001 6.99988C13.4001 7.77308 12.7733 8.39988 12.0001 8.39988C11.2269 8.39988 10.6001 7.77308 10.6001 6.99988Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <div>
            <div className="font-medium">Managed publishing off</div>
            <div className="mt-1 text-sm">When you send your changes to Google for review, they'll be published automatically as soon as they're approved</div>
          </div>
        </div>
      </div>

      <div className="border-b pb-6">
        <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start gap-4 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <div className="text-red-700">Some recent changes were rejected</div>
            <div className="mt-1 text-sm text-red-700">Some changes that you recently sent for review were rejected by Google. Fix the issues and make sure that your app meets all policy requirements before sending changes for review again. Go to Policy status for more details.</div>
            <button className="mt-2 text-blue-600 hover:underline text-sm">Go to Policy status</button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="flex items-center gap-2 text-lg font-medium">
            Changes not yet sent for review
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </h2>
          <div className="flex gap-2">
            <button className="border rounded-md px-4 py-2 text-sm">
              Send 3 changes for review
            </button>
            <button className="text-gray-700 border rounded-md px-4 py-2 text-sm flex items-center gap-1">
              Hide
              <ChevronRight className="rotate-90" size={16} />
            </button>
          </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-red-600 text-white w-6 h-6 rounded-full text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>1 issue found</div>
          </div>
          <button className="google-btn bg-red-600">
            View issues
            <ChevronRight size={16} />
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="py-3 px-4">Item changed</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10V14H17V10H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 4V7M12 17V20M6 8L3 5M18 8L21 5M6 16L3 19M18 16L21 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Default store listing
                </div>
              </td>
              <td className="py-4 px-4">Change app name to 'Weather Forecast'</td>
              <td className="py-4 px-4">
                <button className="ml-auto flex items-center justify-center text-blue-600">
                  <ChevronRight size={20} />
                </button>
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  English (United States) – en-US
                </div>
              </td>
              <td className="py-4 px-4">Change app name to 'Weather Forecast'</td>
              <td className="py-4 px-4">
                <button className="ml-auto flex items-center justify-center text-blue-600">
                  <ChevronRight size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublishingOverview;
