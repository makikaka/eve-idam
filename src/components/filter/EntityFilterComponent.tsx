import React from 'react';
import { BaseFilters, EventFilters } from '@/types/EventFilters';
import { CityDropdown, DatePicker, QuickDateSelector, TagSelector } from './ReusableFilterComponents';

interface EntityFiltersProps<T extends BaseFilters> {
  filters: T;
  setFilters: (newFilters: T) => void;
  cities: string[];
  tags: { name: string; icon: React.ComponentType }[];
  showDateFilter: boolean;
}

// Type guard to check if filters is of type EventFilters
const isEventFilters = (filters: BaseFilters): filters is EventFilters => {
  return (filters as EventFilters).selectedDate !== undefined && (filters as EventFilters).isWeekendSelected !== undefined;
};

export const EntityFilters = <T extends BaseFilters>({
  filters,
  setFilters,
  cities,
  tags,
  showDateFilter
}: EntityFiltersProps<T>) => {
  const handleCityChange = (city: string) => {
    setFilters({ ...filters, selectedCity: city });
  };
  
  const handleDateChange = (date: string) => {
    setFilters({ ...filters, selectedDate: date, isWeekendSelected: false });
  };

  const handleQuickDateSelect = (option: string) => {
    const today = new Date();
    let newDate;

    switch (option) {
      case 'today':
        newDate = today;
        setFilters({ ...filters, selectedDate: newDate.toISOString().split('T')[0], isWeekendSelected: false });
        break;
      case 'tomorrow':
        newDate = new Date(today.setDate(today.getDate() + 1));
        setFilters({ ...filters, selectedDate: newDate.toISOString().split('T')[0], isWeekendSelected: false });
        break;
      case 'weekend':
        setFilters({ ...filters, isWeekendSelected: true, selectedDate: '' });
        break;
      default:
        newDate = today;
        setFilters({ ...filters, selectedDate: newDate.toISOString().split('T')[0], isWeekendSelected: false });
    }
  };

  const handleTagSelect = (tag: string) => {
    setFilters({ ...filters, selectedTag: tag });
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <CityDropdown
          selectedCity={filters.selectedCity}
          onChange={handleCityChange}
          cities={cities}
        />
        {showDateFilter && isEventFilters(filters) && ( // Use the type guard here
          <>
            <DatePicker
              selectedDate={filters.selectedDate}
              onChange={handleDateChange}
              isWeekendSelected={filters.isWeekendSelected}
            />
            <QuickDateSelector
              onSelect={handleQuickDateSelect}
              isWeekendSelected={filters.isWeekendSelected}
            />
          </>
        )}
      </div>
      <TagSelector
        tags={tags}
        selectedTag={filters.selectedTag}
        onSelect={handleTagSelect}
      />
    </div>
  );
};

export default EntityFilters;