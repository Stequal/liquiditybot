import React from "react";

const Nav = ({ isWalletConnected }) => {
  //   isWalletConnected = true;
  const walletConnectionBox = isWalletConnected ? (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        disabled
        className="bg-green-700 pl-5 pr-5 pt-1 pb-1 rounded text-white focus:outline-none"
      >
        Connected
      </button>
    </div>
  ) : (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button className="bg-red-500 pl-5 pr-5 pt-1 pb-1 rounded text-white hover:bg-green-700 focus:outline-none">
        Connect Wallet
      </button>
    </div>
  );

  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
              </div>
            </div>
          </div>
          {walletConnectionBox}
        </div>
      </div>
    </div>
  );
};

export default Nav;
