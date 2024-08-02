"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};
export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  setactive,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  setactive: (val: number) => void;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    console.log(idx);
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
    setactive(idx);
  };

  const [hovering, setHovering] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<Tab | null>(null);

  return (
    <>
      <div className="flex px-7 py-5 ">
        <div
          className={cn(
            "flex flex-col items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => {
                setHovering(true);
                setHoveredTab(tab);
              }}
              onMouseLeave={() => {
                setHovering(false);
                setHoveredTab(null);
              }}
              className={cn(
                `relative px-4 py-3 w-52 hover:bg-[#172a45]`,
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    `absolute inset-0 dark:bg-zinc-800 border-l-2 border-[#64ffda]`,
                    activeTabClassName
                  )}
                />
              )}

              <div className=" flex">
                <span
                  className={` relative block hover:text-[#64ffda] ${
                    active === tab ? "text-[#64ffda]" : "text-[#a8b2d1]"
                  } ${
                    hoveredTab && "text-[#64ffda]"
                  } w-full text-start text-md font-extralight`}
                >
                  {tab.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full flex flex-row">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
