// CityDropdown.tsx
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface CityDropdownProps {
    selectedCity: string;
    onChange: (city: string) => void;
    cities: string[];
}

export const CityDropdown: React.FC<CityDropdownProps> = ({ selectedCity, onChange, cities }) => (
    <div className="relative">
        <select
            value={selectedCity}
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out text-gray-900"
        >
            <option value="">Select City</option>
            {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
        </div>
    </div>
);

// DatePicker.tsx\
import { FaCalendar } from 'react-icons/fa';

interface DatePickerProps {
    selectedDate: string;
    onChange: (date: string) => void;
    isWeekendSelected: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, isWeekendSelected }) => (
    <div className="relative">
        <input
            type="date"
            value={selectedDate}
            onChange={(e) => onChange(e.target.value)}
            className={`appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out text-gray-900 ${isWeekendSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isWeekendSelected}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaCalendar className="h-4 w-4" />
        </div>
    </div>
);

interface Tag {
    name: string;
    icon: React.ComponentType;
}

interface TagSelectorProps {
    tags: Tag[];
    selectedTag: string;
    onSelect: (tag: string) => void;
}

export const TagSelector: React.FC<TagSelectorProps> = ({ tags, selectedTag, onSelect }) => (
    <div className="overflow-x-auto pb-2">
        <div className="flex space-x-4">
            {tags.map((tag) => (
                <button
                    key={tag.name}
                    onClick={() => onSelect(selectedTag === tag.name ? '' : tag.name)}
                    className={`flex flex-col items-center p-2 rounded-md transition duration-150 ease-in-out ${selectedTag === tag.name ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
                        }`}
                >
                    <div className="text-2xl mb-1">

                        <tag.icon />
                    </div>
                    <span className="text-xs">{tag.name}</span>
                </button>
            ))}
        </div>
    </div>
);

// QuickDateSelector.tsx

interface QuickDateSelectorProps {
    onSelect: (option: string) => void;
    isWeekendSelected: boolean;
}

export const QuickDateSelector: React.FC<QuickDateSelectorProps> = ({ onSelect, isWeekendSelected }) => (
    <div className="flex space-x-2">
        {['Today', 'Tomorrow'].map((option) => (
            <button
                key={option}
                onClick={() => onSelect(option.toLowerCase())}
                className={`px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out ${isWeekendSelected ? '' : 'bg-white'}`}
            >
                {option}
            </button>
        ))}
        <button
            onClick={() => onSelect('weekend')}
            className={`px-3 py-2 border border-gray-300 rounded-md text-sm font-medium ${isWeekendSelected ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out`}
        >
            Weekend
        </button>
    </div>
);