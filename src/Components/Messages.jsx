import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import SplitText from "../../Reactbits/SplitText/SplitText";

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
      <div className="w-full flex justify-center items-center min-h-screen bg-black">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-8 h-8 border-2 border-emerald-400/30 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-2 border-transparent border-t-emerald-400 rounded-full animate-spin"></div>
          </div>
          <span className="text-gray-400 font-light tracking-wider">
            LOADING MESSAGES
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[730px] bg-black py-20 relative overflow-hidden">
      {/* Premium Background Elements */}

      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Premium Header Section */}
        <div className="mb-16 pt-10">
          <div className="flex  items-center gap-4 ">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-green-500"></div>
            <span className="text-xs font-medium tracking-[0.3em] text-emerald-400/80 uppercase">
              Communications
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-500"></div>
          </div>

          <SplitText
            text="Your Messages"
            className="text-6xl lg:text-7xl font-light leading-[1.4]   tracking-tight"
            delay={100}
            duration={0.4}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>

        {/* Premium Messages Grid */}
        {messages.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1m4 0h-4"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg font-light italic">
              No messages found in your inbox
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Premium Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl border border-emerald-400/0 group-hover:border-emerald-400/20 transition-colors duration-500"></div>

                {/* Content */}
                <div className="relative">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                        {msg.name}
                      </h2>
                      <p className="text-sm text-emerald-400/80 leading-relaxed ">
                        {msg.email}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 font-light bg-white/5 rounded-full px-3 py-1">
                      {new Date(msg.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-emerald-400/40 to-transparent group-hover:from-emerald-400/80 transition-colors duration-300"></div>
                    <p className="text-gray-300/90 leading-relaxed text-sm font-light pl-2">
                      {msg.message}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-xl transition duration-700 bg-gradient-to-br from-emerald-400/10 to-emerald-600/5 rounded-2xl"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
