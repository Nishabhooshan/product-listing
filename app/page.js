"use client";
import Navbar from "@/components/Navbar";
import ProductLists from "@/components/ProductLists";
import { AppProvider } from "@/components/AppContext";
import React from "react";

export default function Home() {
  return (
    <AppProvider>
      <div className="flex flex-col">
        <Navbar className="fixed top-0 left-0 w-1/6 z-10" />

        <div className="flex flex-row pt-16 bg-teal-300">
          <div className="flex flex-wrap justify-center gap-4 pt-8 w-5/6 ml-1/6">
            <ProductLists />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
