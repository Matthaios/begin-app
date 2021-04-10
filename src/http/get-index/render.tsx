import { React } from "https://unpkg.com/es-react@16.13.1";
import { App } from './app.tsx';
export { default as ReactDOMServer } from "https://dev.jspm.io/react-dom@16.13.1/server";
export async function render() {
  let body = ReactDOMServer.renderToString(<App />);
  return `<!DOCTYPE html>
<html>

<body>
  <div id=app>${body}</div>

</body>
</html>
`;
}