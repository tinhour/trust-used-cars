import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'ja', name: t('language.ja') },
    { code: 'th', name: t('language.th') },
    { code: 'vi', name: t('language.vi') },
    { code: 'id', name: t('language.id') },
    { code: 'ms', name: t('language.ms') },
    { code: 'zh', name: t('language.zh') }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
        onClick={toggleDropdown}
      >
        <Globe className="h-4 w-4 mr-1" />
        <span>{languages.find(lang => lang.code === i18n.language)?.name || languages[0].name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
                  i18n.language === language.code ? 'bg-gray-100 font-medium' : ''
                }`}
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;