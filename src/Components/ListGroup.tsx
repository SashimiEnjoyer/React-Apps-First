//import { MouseEvent } from "react";
import { useState } from "react";

// Passing data via props, biar bisa diganti otomatis
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook, buat update. Array 1 variable, array 2 set func nya
  const [selectedIndexVar, setSelectedIndexFunc] = useState(0);

  const GetMessage = () => {
    return items.length === 0 && <p>No Item Found</p>;
  };

  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {GetMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndexVar === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndexFunc(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
