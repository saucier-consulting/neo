import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import PlaceHolderCircle from "./PlaceHolderCircle";

interface LanguageOption {
  value: string;
  label: string;
  flag?: string; // Optional flag image path
}

interface LanguageDropdownProps {
  languageOptions: LanguageOption[];
  defaultLanguage: LanguageOption;
  onLanguageSelect?: (selectedLanguage: LanguageOption) => void;
}

const LanguageSelector: React.FC<LanguageDropdownProps> = ({
  languageOptions,
  defaultLanguage,
  onLanguageSelect,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const toggleDropdownVisibility = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelection = (language: LanguageOption) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    if (onLanguageSelect) {
      onLanguageSelect(language);
    }
  };

  return (
    <div className="relative inline-block text-gray-700">
      <button
        onClick={toggleDropdownVisibility}
        className="flex items-center justify-between px-4 py-2 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {selectedLanguage?.flag && (
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.label}
            className="w-5 h-auto mr-2 rounded-full"
          />
        )}
        <span>{selectedLanguage?.label}</span>
        <FaChevronDown
          className={`w-4 h-4 ml-2 text-gray-600 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
          <div className="py-1">
            {languageOptions.map((language) => (
              <button
                key={language.value}
                onClick={() => handleLanguageSelection(language)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900 w-full text-left flex items-center`}
              >
                {language.flag ? (
                  <img
                    src={language.flag}
                    alt={language.label}
                    className="w-5 h-auto mr-2 rounded-full"
                  />
                ) : (
                  <PlaceHolderCircle size={20} />
                )}
                <span>{language.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
