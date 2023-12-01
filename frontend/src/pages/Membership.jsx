// Subscription.js
import React, { useState } from "react";
export default function Membership() {
  const [isRegular, setIsRegular] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  const switchRegular = () => {
    setIsRegular((prev) => !prev);
    setIsPremium((prev) => !prev);
    fetch("http://localhost:5000/member/changeMembership", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_upgrade: isRegular }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
        } else {
          alert(data.message);
        }
      });
  };
  const switchPremium = () => {
    setIsPremium((prev) => !prev);
    setIsRegular((prev) => !prev);
    fetch("http://localhost:5000/member/changeMembership", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_upgrade: isRegular }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
        } else {
          alert(data.message);
        }
      });
  };

  //later we will make api call to update user membership in database

  return (
    <div className="flex w-full min-h-screen p-7">
      <div className="w-2/3 mx-auto justify-center">
        <p className="text-[#00153B] text-[20px] leading-[40px] font-semibold">
          Your Membership
        </p>

        <div>
          <p className="text-[#717F87] text-[15px] leading-[27px] font-medium">
            You can upgrade or downgrade your membership here.
          </p>
        </div>

        <div className="mt-[20px] grid grid-cols-2 gap-[20px]">
          <div
            key="1"
            className="w-full bg-white rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
          >
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div className="flex justify-end">
                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                  <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                    Starter
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                  Regular
                </p>
                <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                  Free
                </p>
              </div>

              <div>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  $1.50 per ticket
                </p>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  no ticket refund fee
                </p>
              </div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div className="text-gray-600 text-sm leading-[24px] font-medium">
                <p className="">
                  -View list of Movies watched in the past 30 days
                </p>
                <p className="">
                  -Book up to 8 seats for a movie show - using rewards points or
                  pre-selected payment method - seats selected by the user
                </p>
                <p className="">
                  -Cancel previous tickets before showtime and request refund
                </p>
                <p className="">
                  -Accumulate rewards points 1 point per dollar
                </p>
                <p className="">
                  -Each booking will include an online service fee of $1.50 per
                  ticket
                </p>
              </div>

              <div className="mt-[25px]">
                {isRegular ? (
                  <button
                    onClick={switchRegular}
                    className="bg-[#E1E3E5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                  >
                    Current Plan
                  </button>
                ) : (
                  <button
                    onClick={switchRegular}
                    className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                  >
                    Downgrade -
                  </button>
                )}
              </div>
            </div>
          </div>

          <div
            key="2"
            className="w-full bg-white rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
          >
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div className="flex justify-end">
                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                  <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                    Pro
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                  Premium
                </p>
                <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                  $15/year
                </p>
              </div>

              <div>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  $0 per ticket
                </p>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  no ticket refund fee
                </p>
              </div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div className="text-gray-600 text-sm leading-[24px] font-medium">
                <p className="">
                  -View list of Movies watched in the past 30 days
                </p>
                <p className="">
                  -Book up to 8 seats for a movie show - using rewards points or
                  pre-selected payment method - seats selected by the user
                </p>
                <p className="">
                  -Cancel previous tickets before showtime and request refund
                </p>
                <p className="">
                  -Accumulate rewards points 1 point per dollar
                </p>
                <p className="">
                  -Get online service fee waived for any booking
                </p>
                <p className="">
                  -Exclusive members page - showing movie tickets purchased,
                  rewards points accumulated
                </p>
              </div>

              <div className="mt-[25px]">
                {isPremium ? (
                  <button
                    onClick={switchPremium}
                    className="bg-[#E1E3E5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                  >
                    Current Plan
                  </button>
                ) : (
                  <button
                    onClick={switchPremium}
                    className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold"
                  >
                    Upgrade +
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
