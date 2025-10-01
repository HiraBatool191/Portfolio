import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

const SkillsChart = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.4 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const makeOptions = (label) => ({
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
      animations: {
        enabled: true,
        easing: "easeOut",
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
        },
        track: {
          background: "#1f2937",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "14px",
            offsetY: 25,
            color: "#ffffff",
          },
          value: {
            show: true,
            fontSize: "22px",
            fontWeight: "bold",
            offsetY: -15,
            color: "#ffffff",
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    labels: [label],
  });

  const data = [
    { value: 80, label: "React", color: "#a855f7" },
    { value: 70, label: "JavaScript", color: "#a855f7" },
    { value: 94, label: "HTML", color: "#a855f7" },
    { value: 90, label: "CSS & Tailwind", color: "#a855f7" },
  ];

  return (
    <div
      ref={sectionRef}
      className="border border-white/70 rounded-2xl grid grid-cols-2 gap-3 max-w-[450px] mr-auto p-3"
    >
      {data.map((item, i) => (
        <div key={i} className="flex justify-center items-center">
          <Chart
            options={{ ...makeOptions(item.label), colors: [item.color] }}
            series={visible ? [item.value] : [0]} 
            type="radialBar"
            width={150}
            height={150}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsChart;
