import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleMessageParserDocs = () => {
    const messages = createChatBotMessage("Enter your Name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleAge = () => {
    const messages = createChatBotMessage("Enter your Age",{
      widget:"dropdown"
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };


 const handleEndMessage = () => {
  
    const customMessage = createChatBotMessage("Thank you. In 5 seconds, bot will exit",
      {
        
        widget: "endMessage",
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, customMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessageParserDocs,
            handleAge,
            handleEndMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
