import React, { FC, ReactElement } from "react";

export interface SelectNode {
  id: number;
  size: string;
  diameter: number;
  price: number;
}

interface SelectProps {
  data: SelectNode[];
  setSizePrice: (price: number) => void;
  setPizzaSize: (size: string) => void;
  setSelectedNode: (id: number) => void;
  selectedNode: number | null;
  info: boolean;
}

const SizeSelect: FC<SelectProps> = ({
  data,
  setSizePrice,
  setPizzaSize,
  setSelectedNode,
  selectedNode,
  info
}): ReactElement => {
  const handleNodeClick = (id: number, price: number, pizzaSize: string): void => {
    setSelectedNode(id);
    setSizePrice(price);
    setPizzaSize(pizzaSize);
  };

  return (
    <div className={`creator__right--size ${info ? "info" : ""}`}>
      <div className="creator__right--title">
        <h3>{`${info ? "Pick size" : "size"}`}</h3>
      </div>
      <ul className="creator__right--sizes">
        {data.map((node: SelectNode) => (
          <li
            key={node.id}
            className="creator__right--sizes__item"
            onClick={() => handleNodeClick(node.id, node.price, node.size)}
            style={{ background: selectedNode === node.id ? "rgba(252, 242, 118, 0.8)" : "#ffffff" }}
          >
            <h5 className="creator__right--sizes__item--top">
              {node.size} <span className="red">{node.diameter}cm</span>
            </h5>
            <span>{node.price}$</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeSelect;
