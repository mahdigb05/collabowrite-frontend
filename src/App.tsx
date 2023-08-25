import { useEffect, useState } from "react";
import "./index.css";
import Header from "./layout/Header";
import MarkDownEditor from "./features/document-editor/markdwonEditor";
import DocumentLibrary from "./features/userDocuments/DocumentLibrary";
import DocumentHeader from "./features/document-editor/document-header/DocumentHeader";
import { Stomp } from "@stomp/stompjs";
import io from "socket.io-client";
import SockJS from "sockjs-client/dist/sockjs";

const SOCKET_URL = "ws://localhost:8080/ws-message";

function App() {
  // const [count, setCount] = useState(0);
  // const [isConnected, setIsConnected] = useState(false);

  // // const ws = new WebSocket(SOCKET_URL);

  // useEffect(() => {
  //   if (!isConnected) {
  //     let client = Stomp.client(SOCKET_URL);
  //     client.connect({}, () => {
  //       setIsConnected(true);
  //       client.subscribe("/topic/document", (msg) => {
  //         console.log("received : ", msg);
  //       });

  //       client.send("/app/sendMessage", {}, "I finally made it");
  //     });
  //   }
  //   // console.log("in");
  //   // var client = Stomp.client(SOCKET_URL);
  //   // client.debug = function(str) {
  //   //   // append the debug log to a #debug div somewhere in the page using JQuery:
  //   //   console.log("str", str);
  //   // };
  //   // client.connect(
  //   //   {},
  //   //   () => {
  //   //     console.log("connected successfully");
  //   //   },
  //   //   (e: any) => {
  //   //     console.log("error", e);
  //   //   },
  //   //   (e : any) => {
  //   //     console.log("connection closed ", e)
  //   //   }
  //   // );
  // }, [isConnected]);

  return (
    // {/* <DocumentSearch /> */}
    // {/* <DocumentLibrary /> */}
    <div className="flex flex-col relative h-screen">
      {/* <Header /> */}
      <DocumentHeader />
      <div className="h-full ">
        <MarkDownEditor />
      </div>
    </div>
  );
}

export default App;
