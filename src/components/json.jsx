import 'react-json-view-lite/dist/index.css';
import { JsonView } from 'react-json-view-lite';

const jsonData = {
  module: "AND Gate",
  inputs: ["A", "B"],
  output: "Y",
  description: "Y = A & B"
};

export default function JsonViewer() {
  return (
    <div style={{ padding: "20px" }}>
      <JsonView data={jsonData} />
    </div>
  );
}
