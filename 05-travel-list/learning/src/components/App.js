import { TravelListProvider } from "../contexts/TravelListContext";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  return (
    <TravelListProvider>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </TravelListProvider>
  );
}
