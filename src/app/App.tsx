import { RouterProvider } from "react-router";
import { router } from "./routes";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppFloat />
    </>
  );
}

export default App;
