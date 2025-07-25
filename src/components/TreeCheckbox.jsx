import { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const TreeCheckbox = () => {
  const [checked, setChecked] = useState(["node1.2", "node2.2.2"]);
  const [expanded, setExpanded] = useState(["node1", "node2", "node2.2"]);
  const [error, setError] = useState(null);

  const handleCheck = (checked) => setChecked(checked);
  const handleExpand = (expanded) => setExpanded(expanded);

  const submit = () => {
    try {
      const uniqueArray = [...new Set([...checked, ...expanded])];
      console.log(uniqueArray);
      // You could add API call here
      setError(null);
    } catch (err) {
      setError("Failed to submit data. Please try again.");
      console.error(err);
    }
  };

  // Sample data
  const data = [
    { id: 1, value: "node1", label: "Node 1", parentId: null },
    { id: 2, value: "node1.1", label: "Node 1.1", parentId: 1 },
    { id: 3, value: "node1.2", label: "Node 1.2", parentId: 1 },
    { id: 4, value: "node2", label: "Node 2", parentId: null },
    { id: 5, value: "node2.1", label: "Node 2.1", parentId: 4 },
    { id: 6, value: "node2.2", label: "Node 2.2", parentId: 4 },
    { id: 7, value: "node2.2.1", label: "Node 2.2.1", parentId: 6 },
    { id: 8, value: "node2.2.2", label: "Node 2.2.2", parentId: 6 },
    { id: 9, value: "node2.2.3", label: "Node 2.2.3", parentId: 6 },
  ];

  const buildHierarchy = (data) => {
    const map = new Map(data.map((node) => [node.id, { ...node, children: [] }]));
    data.forEach((node) => {
      if (node.parentId) map.get(node.parentId).children.push(map.get(node.id));
    });
    return data.filter((node) => !node.parentId).map((node) => map.get(node.id));
  };

  const treeData = buildHierarchy(data).map((node) => {
    if (node.children.length === 0) delete node.children;
    return node;
  });

  return (
    <div className="tree-checkbox-container p-3">
      <h4 className="mb-3">Select Nodes</h4>
      
      <CheckboxTree
        showCheckbox={true}
        nodes={treeData}
        checked={checked}
        expanded={expanded}
        onCheck={handleCheck}
        onExpand={handleExpand}
        icons={{
          check: <i className="bi bi-check-square"></i>,
          uncheck: <i className="bi bi-square"></i>,
          halfCheck: <i className="bi bi-dash-square"></i>,
          expandClose: <i className="bi bi-chevron-right"></i>,
          expandOpen: <i className="bi bi-chevron-down"></i>,
        }}
      />
      
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      
      <div className="mt-3">
        <button
          className="btn btn-primary"
          type="button"
          onClick={submit}
        >
          Submit
        </button>
        <button
          className="btn btn-outline-secondary ms-2"
          type="button"
          onClick={() => setChecked([])}
        >
          Clear Selection
        </button>
      </div>
    </div>
  );
};

export default TreeCheckbox;