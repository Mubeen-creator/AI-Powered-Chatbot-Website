"use client";

import { useState, useEffect, useRef } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "User", text: "Hey, any updates on the project?", timestamp: "10:00 AM" },
    { sender: "AI", text: "Yes, we finalized the report today.", timestamp: "10:05 AM" },
  ]);
  const [question, setQuestion] = useState("");
  const [typingResponse, setTypingResponse] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingResponse]);

  const handleSubmit = async () => {
    if (!question) return alert("Please enter a message");

    try {
      // Append the user's message immediately
      const newMessages = [
        ...messages,
        { sender: "User", text: question, timestamp: new Date().toLocaleTimeString() },
      ];
      setMessages(newMessages);
      setQuestion("");

      // Fetch the AI response
      const res = await fetch("http://localhost:8000/ask-ai/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      // Display AI's response word by word
      const words = data.response.split(" ");
      let currentText = "";
      setTypingResponse("");

      for (let i = 0; i < words.length; i++) {
        currentText += (i === 0 ? "" : " ") + words[i];
        setTypingResponse(currentText);

        // Wait for 15 words per second (1000ms / 15 = ~67ms per word)
        await new Promise((resolve) => setTimeout(resolve, 67));
      }

      // Append the final AI response to messages
      setMessages((prev) => [
        ...prev,
        { sender: "AI", text: currentText, timestamp: new Date().toLocaleTimeString() },
      ]);
      setTypingResponse(""); // Clear the typing indicator
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center py-4">
      <div className="bg-white w-screen h-full mx-4 my-6 rounded-lg shadow-lg flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 text-white py-4 px-6 rounded-t-lg flex items-center justify-between">
          <h2 className="font-bold text-lg">Chat with Mubeen's AI Chatbot</h2>
          <span className="text-gray-300 text-sm">Online</span>
        </div>

        {/* Chat Section */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-4 rounded-lg shadow-md ${
                  msg.sender === "User"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:shadow-lg transition`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className="block text-xs mt-2 text-gray-400">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {/* Typing response (word by word) */}
          {typingResponse && (
            <div className="flex justify-start">
              <div className="max-w-xs p-4 rounded-lg shadow-md bg-gray-200 text-gray-800">
                <p className="text-sm">{typingResponse}</p>
              </div>
            </div>
          )}

          {/* Dummy div for auto-scroll */}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Section */}
        <div className="bg-gray-200 py-4 px-6 rounded-b-lg flex items-center space-x-4 mx-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
