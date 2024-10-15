import React, { useEffect, useRef, useState } from 'react';
import { Event } from '@/types/dtos/EventDB';
interface EventModalProps {
  eventId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ eventId, isOpen, onClose }) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      if (!eventId) return;
      setIsLoading(true);
      try {
        const response = await fetch(`/api/events/${eventId}`);
        const eventData = await response.json();
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen && eventId) {
      fetchEventData();
    } else {
      setEvent(null);
    }
  }, [isOpen, eventId]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
          </div>
        ) : event ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{event.name}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src={event.image} alt={event.name} className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500 mb-4">{event.location}, {event.city}</p>
                  <div className="mb-4">
                    {event.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-700">
                    {event.isWeekend ? "This event is on the weekend." : "This event is on a weekday."}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-700">Event not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventModal;