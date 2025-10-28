import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // adjust the path if needed

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("Contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error.message);
      } else {
        setMessages(data);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-20 text-gray-400">
        Loading messages...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black text-white py-16">
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-4xl font-semibold mb-10 text-green-500 text-center">
          Messages
        </h1>

        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">No messages found.</p>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="border border-green-600 rounded-2xl p-5 hover:bg-green-950/40 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-medium text-green-400">
                    {msg.name}
                  </h2>
                  <span className="text-xs text-gray-400">
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-1">
                  <strong>Email:</strong> {msg.email}
                </p>
                <p className="text-gray-200 mt-2 leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
