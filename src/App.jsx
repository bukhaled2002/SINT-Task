import axios from "axios";
import "./App.css";
import Chart from "./components/Chart";
import { useQuery } from "@tanstack/react-query";
import logo from "./assets/logo.svg";

function App() {
  // let data = d.data;
  const response = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      let result = await axios.get(
        "https://sint.vercel.app/api/interview/chart"
      );
      return result.data;
    },
  });
  if (response.isLoading) {
    return <p>loading</p>;
  }
  if (response.isError) {
    console.log(response.error);
    return <p>{response.error}</p>;
  }

  if (response.isSuccess) {
    const data = response?.data?.data;
    console.log(data);
    return (
      <div className="mx-auto my-20 w-[400px] flex flex-col gap-5 max-[500px]:w-[45vb]">
        <div className="flex justify-between bg-[--orange] cart">
          <div className="text-info text-[--very-pale-orange] font-400 text-[15px]">
            <h4 className="">My balance</h4>
            <p className="text-[25px] font-[700] text-[--very-pale-orange]">
              ${data.balance}
            </p>
          </div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="cart bg-[--very-pale-orange] ">
          <h2 className="font-[700] text-[25px]">Spending - Last 7 days</h2>
          <Chart
            days={data.weekSpendings}
            maxValue={Math.max(...data.weekSpendings.map((day) => day.amount))}
          ></Chart>

          <div className="bg-[--cream] h-[1px] w-[100%]"></div>
          <div className="pt-5 pb-2 flex justify-between items-center">
            <div>
              <p className="capitalize text-[#474747]">total this month</p>
              <h4 className="font-[700] text-[35px] ">${data.monthTotal}</h4>
            </div>

            <div className="flex flex-col items-end">
              <p className="font-[700] text-[14px]">+2.4%</p>
              <p className="text-[#6f6f6f] text-[12px]">from last month</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
