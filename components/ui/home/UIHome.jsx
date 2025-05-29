"use client";

import UIHeader from "@/components/other/UIHeader";
import React from "react";
import { Flame, Leaf, TreePalm, Wind, Sun } from "lucide-react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const chartData = [
  { month: "ม.ค.", value: 2.4 },
  { month: "ก.พ.", value: 2.1 },
  { month: "มี.ค.", value: 1.9 },
  { month: "เม.ย.", value: 1.6 },
  { month: "พ.ค.", value: 1.4 },
];

export default function UIHome() {
  return (
    <>
      <UIHeader Header="หน้าหลัก" />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-6 overflow-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full p-8 bg-cool-gradient text-white rounded-3xl shadow-md">
          <div className="flex flex-col gap-2 text-center xl:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold opacity-90">
              👷‍♂️ Welcome to
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
              Channakorn Engineer
            </h1>
            <p className="text-base sm:text-lg text-white/80">
              ระบบบริหารงานภายในองค์กร
            </p>
          </div>
          <div className="mt-6 xl:mt-0 xl:ml-8 flex items-center justify-center w-48 h-48 xl:w-52 xl:h-52 rounded-3xl overflow-hidden shadow-inner bg-white/10">
            <img
              src="/mascot/mascot-1.png"
              alt="Welcome Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          <AnimatedCard
            icon={<Flame />}
            label="คาร์บอนทั้งหมด"
            value="12.4 tCO₂e"
            color="bg-danger"
          />
          <AnimatedCard
            icon={<Leaf />}
            label="ลดลงจากแผน"
            value="8%"
            color="bg-success"
          />
          <AnimatedCard
            icon={<TreePalm />}
            label="ต้นไม้ที่ปลูกได้เทียบเท่า"
            value="56 ต้น"
            color="bg-warning"
          />
          <AnimatedCard
            icon={<Wind />}
            label="พลังงานลมใช้แล้ว"
            value="3,200 kWh"
            color="bg-info"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-white rounded-3xl shadow-md p-6 min-h-96"
        >
          <h2 className="text-xl font-bold mb-4">📊 การปล่อยคาร์บอนรายเดือน</h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis unit=" tCO₂e" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#16CDC7"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                  isAnimationActive={true}
                  animationBegin={300}
                  animationDuration={1200}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col bg-white rounded-3xl shadow-md p-6 w-full xl:w-8/12"
          >
            <h2 className="text-xl font-bold mb-2">🎯 เป้าหมายปีนี้</h2>
            <p className="text-gray-600">
              ลดการปล่อยคาร์บอนลง 20% ภายในปี 2025 โดยใช้พลังงานสะอาด
              และลดของเสียจากกระบวนการผลิต
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex items-center justify-center w-full xl:w-4/12 p-4 bg-warning/10 text-warning rounded-3xl shadow-inner"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="mr-2"
            >
              <Sun size={24} />
            </motion.span>
            ใช้พลังงานแสงอาทิตย์ได้แล้ว 45%
          </motion.div>
        </div>
      </div>
    </>
  );
}

function AnimatedCard({ icon, label, value, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 p-4 rounded-3xl shadow-md text-white ${color}`}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm opacity-80">{label}</span>
        <span className="text-xl font-bold">{value}</span>
      </div>
    </motion.div>
  );
}
