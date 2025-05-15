import { useState } from "react";
import { HiOutlineBell, HiMenu, HiSearch, HiX } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

import { useAuth } from "~/hooks/useAuth";
import LanguageSelector from "../../LanguageSelector";

export const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-topbar h-18">
      <button
        className="text-gray-600 md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Search */}
      <div className="relative hidden max-w-md mx-4 md:flex md:grow">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <HiSearch className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="p-2 text-gray-600 border border-gray-300 rounded-2xl hover:bg-gray-100 focus:outline-none">
          <HiOutlineBell className="w-6 h-6" />
        </button>

        {/* Settings */}
        <button className="p-2 text-gray-600 border border-gray-300 rounded-2xl hover:bg-gray-100 focus:outline-none">
          <HiOutlineCog6Tooth className="w-6 h-6" />
        </button>

        <LanguageSelector
          languageOptions={[
            {
              value: "en-us",
              label: "English (US)",
              flag: "../../../../united-states.png",
            },
            {
              value: "en-gb",
              label: "English (GB)",
              flag: "../../../../united-kingdom.png",
            },
            { value: "cn", label: "Chinese", flag: "../../../../china.png" },
            { value: "de", label: "German", flag: "../../../../germany.png" },
          ]}
          defaultLanguage={{
            value: "en-us",
            label: "English (US)",
            flag: "../../../../united-states.png",
          }}
          onLanguageSelect={(language) => ""}
        />
      </div>
    </div>
  );
};

export default TopBar;
