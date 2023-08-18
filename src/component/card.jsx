import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";
const Card = ({ data, skeleton, loadingstate }) => {
  const [active, setActive] = useState("noun");
  const [playicon, setplayicon] = useState(true);
  function playaudio(data) {
    setplayicon(false);
    let url = data.phonetics[0].audio;
    let audio = new Audio(url);
    audio.play();
    setTimeout(() => {
      setplayicon(true);
    }, 2000);
  }
  return (
    <>
      <div className="w-full">
        <div className="mx-auto flex items-center justify-center p-5">
          <div className="bg-gray-300 rounded-3xl w-[980px] h-[650px] text-left ">
            <div className="m-6 w-40 flex justify-around items-center">
              <button
                className="h-[50px] w-[50px] border-none outline-none"
                onClick={() => playaudio(data)}
              >
                <img
                  src={`${
                    playicon ? "./images/play.png" : "./images/Pause.svg"
                  }`}
                  alt="play black button"
                />
              </button>

              <span>{data && data.phonetic ? data.phonetic : "/../"}</span>
            </div>
            <div className="w-full flex items-center m-8">
              <div className="flex justify-around gap-5">
                <button
                  onClick={() => setActive("noun")}
                  className={`lg:text-md px-3 border-none outline-none rounded-sm  transition-all duration-200 ${
                    active === "verb"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  noun
                </button>
                <button
                  onClick={() => setActive("verb")}
                  className={`lg:text-md px-3 border-none outline-none rounded-sm  transition-all duration-200 ${
                    active === "verb"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  verb
                </button>
              </div>
            </div>
            <Skeleton
              paragraph={{ rows: 8 }}
              active={loadingstate}
              loading={skeleton}
            >
              <ol className="text-sm list-decimal ml-7">
                {data && data.meanings ? (
                  active === "noun" ? (
                    data.meanings[0].definitions.map((item, ind) => (
                      <li key={ind} className="p-2">
                        {item.definition}
                      </li>
                    ))
                  ) : (
                    data.meanings[1].definitions.map((item, ind) => (
                      <li key={ind} className="p-2">
                        {item.definition}
                      </li>
                    ))
                  )
                ) : (
                  <></>
                )}
              </ol>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
