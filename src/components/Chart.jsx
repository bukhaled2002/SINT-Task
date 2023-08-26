import { useState } from "react";

function Chart({ days, maxValue }) {
  const [active, setActive] = useState(null);
  document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("charts")) {
      setActive(null);
    }
  });
  const handleActive = (id, e) => {
    setActive(id);
  };

  const handleLeave = (e, index) => {
    if (active !== index) {
      e.target.children[0].style.display = "none";
    }
  };
  return (
    <div className="pt-[50px] pb-[30px] h-[270px] w-[100%] flex gap-3">
      {days.map((day, index) => {
        const percent = Math.floor((day.amount / maxValue) * 100) + "%";
        return (
          <div
            key={index}
            className="h-[100%] basis-[20%] bg-[transparent] w-[100%] flex flex-col items-end rounded-md "
          >
            <div
              key={index}
              className={`h-[100%]  bg-[transparent] w-[100%] flex items-end rounded-md`}
            >
              <div
                style={{
                  height: percent,
                  background: index === active ? "#b4dfe5" : "#eb755d",
                }}
                onClick={(e) => handleActive(index, e)}
                className="charts w-[100%] bg-[--orange] rounded-md relative transition-all hover:active cursor-pointer"
                onMouseOver={(e) =>
                  console.log(
                    (e.target.children[0].style.display = "inline-block")
                  )
                }
                onMouseLeave={(e) => handleLeave(e, index)}
              >
                <span
                  style={{
                    display: active === index ? "inline-block" : "none",
                  }}
                  className={`bg-[#303030] h-[30px] w-[120%] absolute top-[-35px] left-[50%] ml-[-60%] rounded-sm text-[white] text-[14px] text-center leading-[2]  transition-all`}
                >
                  ${day.amount}
                </span>
              </div>
            </div>
            <p className="m-auto">{day.day}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Chart;
