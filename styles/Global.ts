import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #ecf1f8;
    --card: #fff;
    --main-blue: rgba(0,118,255,0.9);
    --strong-blue: #02f;
    --shadow: rgba(0,118,255,0.39);
    --main-text: #111;
    --secondary-text: #888;
    --modal-text: #333;
    --border: #e0e0e7;
    --bg-green: #00ff7f;
    --bg-red: #f13030bb;
    --strong-green: #007F00;
    --strong-red: #9d0208;
    --overlay: rgba(0, 0, 0, 0.5);
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html {
  font-size: 62.5%;
}

html,
body {
  height: 100vh;
  width: 100vw;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}

`;

//shadow

//0 4px 14px 0
