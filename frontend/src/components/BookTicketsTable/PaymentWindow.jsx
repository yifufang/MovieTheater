import React, { useState, useEffect } from 'react';

const PaymentWindow = ({ onUpdate }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  const [rewardPoints, setRewardPoints] = useState(0);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onUpdate(option);
  };

  const handleCreditCardChange = (e) => {
    const { name, value } = e.target;
    setCreditCardInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  useEffect(() => {
    fetch("http://localhost:5000/member/getRewards", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
          setRewardPoints(data)
        } else {
          alert(data.message);
        }
      });
  }, []);

  return (
    <div className="grid mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Select Payment Method</h1>

      <label className="inline-block mb-4">
        <input
          type="radio"
          value="C"
          checked={selectedOption === 'C'}
          onChange={() => handleOptionChange('C')}
          className="mr-2"
        />
        Pay with Credit Card
      </label>

      {selectedOption === 'creditCard' && (
        <form className="mb-4 bg-gray-300 p-4 rounded-md">
          <label className="block mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={creditCardInfo.cardNumber}
            onChange={handleCreditCardChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter card number"
          />

          <label className="block mb-2">Expiration Date</label>
          <input
            type="text"
            name="expirationDate"
            value={creditCardInfo.expirationDate}
            onChange={handleCreditCardChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="MM/YY"
          />

          <label className="block mb-2">CVV</label>
          <input
            type="text"
            name="cvv"
            value={creditCardInfo.cvv}
            onChange={handleCreditCardChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="CVV"
          />
        </form>
      )}

      <label className="inline-block mb-4">
        <input
          type="radio"
          value="R"
          checked={selectedOption === 'R'}
          onChange={() => handleOptionChange('R')}
          className="mr-2"
        />
        Pay with Reward Points
      </label>

      {selectedOption === 'rewardPoints' && (
        <div className="mb-4 bg-gray-300 p-4 rounded-md">
          <label className="block mb-2">Current Reward Points: {rewardPoints}</label>
        </div>
      )}

    </div>
  );
};

export default PaymentWindow;