interface NodeType {
  id: string;
  type?: string;
  label?: string;
  class?: string;
  position: {
    x: number;
    y: number;
  };
}

interface EdgeType {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  label?: string;
}

export const initialNodes: NodeType[] = [
  {
    id: "1",
    type: "input",
    label: `<div><h4>I</h4><h2>Webhook</h2></div>`,
    class: "start-node",
    position: { x: 400, y: 5 },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 350, y: 150 },
  },
];

export const initialEdges: EdgeType[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
  },
];
