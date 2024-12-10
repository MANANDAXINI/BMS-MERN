import Contextstate from "./Components/Context/ContextState";

import Home from "./Pages/Home"; // Your Home component

const App = () => {
  return (
    <Contextstate>
      <Home/>
    </Contextstate>
  );
};

export default App;
