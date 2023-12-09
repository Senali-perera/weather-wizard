import { useState } from "react";

/*Intro: This component give support to change the temperature measurement unit and displays the temperature according to that.
         In this component, toggle the button to switch the measurement unit type.
* Props: onToggle: void function (Return whether the button is toggled)*/
const SwitchUnitsButton= ({onToggle} :{onToggle : ()=>void})=> {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    onToggle();
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label
          id="unit-toggle"
          className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-blue-300 p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          °C
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          °F
        </span>
      </label>
    </>
  );
};
export default SwitchUnitsButton;
