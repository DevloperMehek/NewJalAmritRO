"import { createContext, useContext, useState, useCallback, useMemo } from \"react\";
import BookNowModal from \"@/components/BookNowModal\";

const BookingContext = createContext({ openBooking: () => {} });

export const BookingProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [presetService, setPresetService] = useState(\"\");

  const openBooking = useCallback((service = \"\") => {
    setPresetService(service);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookNowModal open={open} onOpenChange={setOpen} presetService={presetService} />
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
"
