import { useState, useEffect } from "react";
import axios from "axios";

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getDeltaColor = (value) => {
    if (value > 0) {
      return "text-green-500";
    } else if (value < 0) {
      return "text-red-500";
    }
    return "";
  };

  return (
    <div className="flex justify-center">
      <div className="w-4/5 max-w-screen-lg overflow-x-auto b">
        <table className="w-full bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-purple-900 text-white bg-opacity-90 backdrop-filter backdrop-blur-lg">
              <th className="py-2 px-3">Coin</th>
              <th className="py-2 px-3">Logo</th>
              <th className="py-2 px-3">Price</th>
              <th className="py-2 px-3">MCAP</th>
              <th className="py-2 px-3">POS</th>
              <th className="py-2 px-3">HI</th>
              <th className="py-2 px-3">LO</th>
              <th className="py-2 px-3">Price Δ</th>
              <th className="py-2 px-3">MCAP Δ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id} className="border-b border-gray-200">
                <td className="py-2 px-3">{coin.name}</td>
                <td className="py-2 px-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="h-8 w-8 object-contain"
                  />
                </td>
                <td className="py-2 px-3">{coin.current_price}</td>
                <td className="py-2 px-3">{coin.market_cap}$</td>
                <td className="py-2 px-3">{coin.market_cap_rank}</td>
                <td className="py-2 px-3">{coin.high_24h}</td>
                <td className="py-2 px-3">{coin.low_24h}</td>
                <td
                  className={`py-2 px-3 semi-bold text-center ${getDeltaColor(
                    coin.price_change_percentage_24h
                  )}`}
                >
                  {coin.price_change_percentage_24h}
                </td>
                <td
                  className={`py-2 px-3 semi-bold text-center ${getDeltaColor(
                    coin.market_cap_change_percentage_24h
                  )}`}
                >
                  {coin.market_cap_change_percentage_24h}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}