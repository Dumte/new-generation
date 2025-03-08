"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 2500,
    expense: 2782,
  },
  {
    name: "Feb",
    income: 3002,
    expense: 1220,
  },
  {
    name: "Mar",
    income: 3100,
    expense: 5220,
  },
  {
    name: "Apr",
    income: 2500,
    expense: 2782,
  },
  {
    name: "May",
    income: 2500,
    expense: 2782,
  },
  {
    name: "Jun",
    income: 2500,
    expense: 2782,
  },
  {
    name: "Jul",
    income: 2500,
    expense: 2782,
  },
  {
    name: "Aug",
    income: 2500,
    expense: 2782,
  },
  {
    name: "Sep",
    income: 3008,
    expense: 2112,
  },
  {
    name: "Oct",
    income: 600,
    expense: 4482,
  },
  {
    name: "Nov",
    income: 2990,
    expense: 222,
  },
  {
    name: "Dec",
    income: 1900,
    expense: 2782,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more icon" />
      </div>

      {/* SimpleLineChart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
