
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const TestAndRelease = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Test and release</h1>

      <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start gap-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <div className="text-red-700">We will soon take action because your app does not adhere to Google Play Developer Program policies. Fix violations as soon as possible.</div>
          <button className="mt-2 text-blue-600 hover:underline text-sm">Go to Policy status</button>
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <div className="border-b px-4 py-3">
          <Link to="/latest-releases" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
            Latest releases
          </Link>
        </div>

        <div className="divide-y">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex gap-1">
              <div className="font-medium">Add filter</div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search releases"
                className="border rounded-md py-2 px-3 pr-8 text-sm"
              />
              <svg
                className="absolute right-3 top-2.5 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="py-3 px-4">Release</th>
                <th className="py-3 px-4">Latest version</th>
                <th className="py-3 px-4">Track</th>
                <th className="py-3 px-4">Release status</th>
                <th className="py-3 px-4">Last updated</th>
                <th className="py-3 px-4">Countries / regions</th>
                <th className="py-3 px-4">Install base</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-4 px-4">11 (1.1)</td>
                <td className="py-4 px-4">11</td>
                <td className="py-4 px-4">Production</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="text-sm">
                      Available on Google Play
                      <div className="text-xs text-gray-500">Full rollout</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>Dec 15, 2021</div>
                  <div className="text-xs text-gray-500">9:01 AM</div>
                </td>
                <td className="py-4 px-4">
                  <div>177</div>
                  <div className="text-xs text-gray-500">of 177</div>
                </td>
                <td className="py-4 px-4">100.00%</td>
                <td className="py-4 px-4">
                  <button className="ml-auto flex items-center justify-center text-blue-600">
                    <ChevronRight size={20} />
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-4">-</td>
                <td className="py-4 px-4">-</td>
                <td className="py-4 px-4">Internal testing</td>
                <td className="py-4 px-4">
                  <div className="text-sm">Draft</div>
                </td>
                <td className="py-4 px-4">-</td>
                <td className="py-4 px-4">-</td>
                <td className="py-4 px-4">-</td>
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

      <div>
        <h2 className="text-lg font-medium mb-4">Latest releases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/production" className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Production</h3>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-gray-600">Create and manage releases for all users</span>
              </div>
              <div className="border-l-4 border-green-500 pl-3 py-1">
                <div className="font-medium">v1.1 - Active</div>
                <div className="text-sm text-gray-500">Dec 15, 2021 • Full rollout to 177 countries</div>
              </div>
            </div>
          </Link>

          <Link to="/testing" className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Testing</h3>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-gray-600">Test your app with a limited audience</span>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="text-sm text-gray-500">Internal testing</div>
                  <div className="font-medium">Draft</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Closed testing</div>
                  <div className="font-medium">No releases</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Open testing</div>
                  <div className="font-medium">No releases</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestAndRelease;
