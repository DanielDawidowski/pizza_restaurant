import React, { FC, ReactElement, useState } from "react";

export interface SelectNode {
  id: number;
  size: string;
  diameter: number;
  price: number;
}

interface SelectProps {
  data: SelectNode[];
  setSizePrice: (price: number) => void;
}

const SizeSelect: FC<SelectProps> = ({ data, setSizePrice }): ReactElement => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const handleNodeClick = (id: number, price: number): void => {
    setSelectedNode(id);
    setSizePrice(price);
  };

  return (
    <div className="creator__right--size">
      <div className="creator__right--title">
        <h3>size</h3>
      </div>
      <ul className="creator__right--sizes">
        {data.map((node: SelectNode) => (
          <li
            key={node.id}
            className="creator__right--sizes__item"
            onClick={() => handleNodeClick(node.id, node.price)}
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
