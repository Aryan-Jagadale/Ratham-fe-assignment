import React from "react";
import { useDispatch } from "react-redux";
import { setAge, setName } from "../../redux/contentSlice";




const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();


  const parse = (message) => {
    //console.log("Message-->",message,typeof(message));
    //console.log("isNan-->",isNaN(message));

    if (isNaN(message)) {
      dispatch(setName(message));
      actions.handleAge()
    }else if (!isNaN(message)){
      dispatch(setAge(message))
      actions.handleEndMessage()
    }

    


    

    
  };
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
