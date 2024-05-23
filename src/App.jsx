import "./App.css";
import { useState } from "react";
import { Generator } from "./components/Generator/Generator";
import { QRsList } from "./components/QRsList/QRsList.jsx";

const QRsTemplate = [
  {
    id: 1,
    qrCode: "",
    createdAt: new Date(),
  },
  {
    id: 2,
    qrCode: "",
    createdAt: new Date(),
  },
  {
    id: 3,
    qrCode: "",
    createdAt: new Date(),
  },
];

function App() {
  const [savedQRs, setSavedQRs] = useState(QRsTemplate);

  return (
    <>
      <h1 className="title">QR Code App</h1>

      <QRsList>
        {savedQRs.map((qr) => (
          <li key={qr.id}>{qr.qrCode}</li>
        ))}
      </QRsList>
      <Generator />
    </>
  );
}

export default App;
