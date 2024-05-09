"use client";

import { createEditor } from "@/components/editor/editor";
import React from "react";
import { useRete } from "rete-react-plugin";

export default function Home() {
  const [ref] = useRete(createEditor);

  return <div className="h-screen w-screen" ref={ref}></div>;
}
