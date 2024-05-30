import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  let items = ["string 1", "string 2", "string 3", "string 4"];
  const [isAlertVisible, SetAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {isAlertVisible && (
        <Alert onClose={() => SetAlertVisible(false)}>Hello World!</Alert>
      )}
      <div>
        <Button color="success" onClick={() => SetAlertVisible(true)}>
          MyButton
        </Button>
      </div>
      <div>
        <ListGroup
          items={items}
          heading={"List Heading"}
          onSelectItem={handleSelectItem}
        ></ListGroup>
      </div>
    </>
  );
}

export default App;
