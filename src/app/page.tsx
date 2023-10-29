import React from "react";
import Intro from "./_components/sections/intro";
import Devider from "./_components/devider";
import About from "./_components/sections/about";
import Projects from "./_components/sections/projects";

export default function Home() {
//  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <Devider />
        <About />
        <Devider />
        <Projects />
        <Devider />
    </main>
  );
}

