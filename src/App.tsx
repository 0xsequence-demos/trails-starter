import React from "react";
import { Providers } from "../components/Providers";
import ClientHome from "../components/ClientHome";

export default function App() {
  return (
    <Providers>
      <main className="min-h-screen bg-gray-100">
        <ClientHome />
      </main>
    </Providers>
  );
}


