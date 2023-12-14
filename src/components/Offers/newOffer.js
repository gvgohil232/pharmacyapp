import { useState, useContext } from "react";
import OfferContext from "../../Context/pharmacyConetext";
// import useGetUserId from "@/hooks/useGetUserId";

const NewOffer = () => {
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [type, setType] = useState("");
  const [bank, setBank] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const { userId } = useGetUserId();
  // const { OfferContext } = useContext(OfferContext);

  const handleNewOffer = async () => {
    // setIsLoading(true);
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        percentage,
        type,
        bank,
        //  userId
      }),
    });
    setName("");
    setPercentage(0);
    setType("");
    setBank("");
    const data = await res.json();
    updateOffers(data.offer);
    // setIsLoading(false);
  };

  return (
    <div className="p-3 mt-9 flex flex-col space-y-4 justify-center border-2 border-green-400 ">
      <div className="p-2">
        <label className="mb-1">Name</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black/90"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="p-2">
        <label className="mb-1">Percentage</label>
        <input
          type="number"
          className="w-full p-2 rounded-lg text-black/90"
          placeholder="Enter percentage"
          onChange={(e) => setPercentage(parseFloat(e.target.value))}
          value={percentage}
        />
      </div>

      <div className="p-2">
        <label className="mb-1">Offer Type</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black/90"
          placeholder="Enter type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
      </div>

      <div className="p-2">
        <label className="mb-1">Bank</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black/90"
          placeholder="Enter bank"
          onChange={(e) => setBank(e.target.value)}
          value={bank}
        />
      </div>

      <div className="flex justify-center">
        <button
          disabled={isLoading}
          className="bg-green-400 w-fit px-7 py-2 rounded-lg disabled:bg-gray-700"
          onClick={() => handleNewOffer()}
        >
          {isLoading ? "Saving.." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default NewOffer;
