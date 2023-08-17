import React, { useEffect, useState } from "react";

const Card = ({ data }) => {
  const [active, setActive] = useState("noun");

  return (
    <>
      <div className="w-full mx-auto">
        <div className="bg-red-500 flex items-center justify-center p-5">
          <div className="bg-gray-300 rounded-3xl w-[980px] h-[650px] ">
            <div className="m-6 w-32 flex justify-around items-center bg-orange-200">
              <img
                className="h-[50px] w-[50px]"
                src="./images/play.png"
                alt="play black button"
              />
              <span>/ˈæp.əl/</span>
            </div>
            <div className="w-full flex items-center m-8">
              <div className="flex justify-around gap-5">
                <button className="lg:text-md bg-black px-3  text-white border-none outline-none rounded-sm hover:bg-gray-800 transition-all duration-200">
                  noun
                </button>
                <button className="lg:text-md bg-[#DEDEDE] px-3 border-none outline-none rounded-sm hover:bg-gray-800 hover:text-white transition-all duration-200">
                  verb
                </button>
              </div>
            </div>
            {data && data.meanings ? (
              active === "noun" ? (
                data.meanings[0].definitions.map((item, ind) => (
                  <div className="ml-5 text-sm">
                    <li key={ind}>
                      {ind + 1} {item.definition}
                    </li>
                  </div>
                ))
              ) : (
                data.meanings[1].definitions.map((item, ind) => (
                  <div className="ml-5 text-sm">
                    <li key={ind}>
                      {ind + 1}
                      {item.definition}
                    </li>
                  </div>
                ))
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
