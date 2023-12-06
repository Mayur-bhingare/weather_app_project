import { useWeatherContext } from "../context/weather.context";

let Input = () => {
  let { inputText, changeInput, getData } = useWeatherContext();
  return (
    <>
      <div className="col-12 d-flex w-100 text-white justify-content-center align-items-center flex-wrap flex-columns gap-2 ">
        <div>
          <input
            type="text"
            className="bg-light  Input "
            placeholder="Search Location"
            value={inputText}
            onKeyUp={getData}
            onChange={changeInput}
          ></input>
        </div>
      </div>
    </>
  );
};

export default Input;
