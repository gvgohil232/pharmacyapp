import { createContext, useState } from "react";

const OfferContext = createContext();

export function OfferProvider({ children }) {
  const [offers, setOffers] = useState([]);
  // for editing a single entry
  const [offer, setOffer] = useState({});

  const initializeOffers = (offers) => {
    setOffers([...offers]);
  };

  // removes existing entry with updated new key
  const updateOffers = (newOffer) => {
    let cleanedOffers = offers.filter((o) => o.id !== newOffer.id);
    setOffers([newOffer, ...cleanedOffers]);
  };

  const deleteFromOffers = (id) => {
    setOffers((offers) => offers.filter((o) => o.id !== id));
  };

  return (
    <OfferContext.Provider
      value={{
        offers,
        initializeOffers,
        updateOffers,
        deleteFromOffers,
        offer,
        setOffer,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
}

export default OfferContext;