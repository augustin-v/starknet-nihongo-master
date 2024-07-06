import React, { useState } from "react";
import axios from "axios";
import { useAccount } from "@starknet-react/core";
import Header from "./components/Header";

function App() {
  const { address } = useAccount();
  const [lessonContent, setLessonContent] = useState("");

  const fetchLessonContent = async () => {
    try {
      const response = await axios.get("http://localhost:3000/lesson/lesson1");
      setLessonContent(response.data);
    } catch (error) {
      console.error("Error fetching lesson content:", error)
    }
  }
  return (

    <main className="flex flex-col items-center justify-center min-h-screen gap-12 bg-white text-gray-800">
      <Header />

      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Nihongo Seduction Master!</h1>
        <p className="mb-6 text-lg">
          Embark on a journey to master Japanese and earn rewards as you learn.
        </p>
        {address ? (
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={fetchLessonContent} // Call the fetchLessonContent          
          >
            Start Learning
          </button>
        ) : (
          <div>Connect your wallet first in order to start learning.</div>
        )}

        {lessonContent && (
          <div className="mt-8">
            <h2>Lesson 1: Introduction to seductive Japanese</h2>
              <div dangerouslySetInnerHTML={{__html:lessonContent}}/>
          </div>
        )}
        
      </section>
    </main>
  );
}


export default App;
