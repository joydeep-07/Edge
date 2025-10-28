import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import SplitText from "../../Reactbits/SplitText/SplitText";
import { IoMail, IoTime, IoPerson } from "react-icons/io5";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

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

  const toggleMessage = (index) => {
    setSelectedMessage(selectedMessage === index ? null : index);
  };

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
    <div className="w-full flex justify-center items-start py-16 bg-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-6">
        {/* LEFT: Sticky Header */}
        <div className="lg:w-1/2 sticky top-20 pt-15 h-fit self-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-emerald-500"></div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
              Communications
            </h2>
          </div>

          <SplitText
            text="Your"
            className="text-5xl lg:text-4xl font-medium text-left leading-[1.1] text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <div className="text-emerald-500 mt-1 leading-[1.1]">
            <SplitText
              text="Messages"
              className="text-5xl lg:text-4xl font-medium text-left leading-[1.4]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </div>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
            Private communications from your contacts and clients. Click on any
            message to view the full content.
          </p>
        </div>

        {/* RIGHT: Messages List */}
        <div className="lg:w-1.5/2 flex pt-15 flex-col gap-3">
          {messages.length === 0 ? (
            <div className="border border-gray-700/20 rounded-2xl bg-gray-700/15 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <IoMail className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-gray-200 text-lg font-medium mb-2">
                No Messages
              </h3>
              <p className="text-gray-400 text-sm">
                Your inbox is currently empty.
              </p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={msg.id}
                className="border border-gray-700/20 rounded-2xl bg-gray-700/15 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-gray-600/30"
              >
                {/* Message Header */}
                <button
                  onClick={() => toggleMessage(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-emerald-400 text-sm font-medium flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <IoPerson className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <h3 className="text-gray-200 text-lg font-medium truncate">
                          {msg.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <IoMail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-400 text-sm truncate">
                          {msg.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm flex-shrink-0 ml-4">
                      <IoTime className="w-4 h-4" />
                      <span>
                        {new Date(msg.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {selectedMessage === index ? (
                    <IoChevronUp className="text-emerald-400 text-lg ml-4 flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                  ) : (
                    <IoChevronUp className="text-gray-500 rotate-180 text-lg ml-4 flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                  )}
                </button>

                {/* Message Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    selectedMessage === index
                      ? "max-h-96 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  }`}
                  style={{ willChange: "transform, opacity, max-height" }}
                >
                  <div className="p-6 pt-0">
                    <div className="border-t border-gray-700/20 pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-emerald-400 text-sm font-medium">
                          Message
                        </span>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                        {msg.message}
                      </p>

                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/20">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <IoTime className="w-4 h-4" />
                          <span>
                            Received{" "}
                            {new Date(msg.created_at).toLocaleString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>

                        <div className="text-emerald-400 text-sm font-medium">
                          #{msg.id.slice(0, 8)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
