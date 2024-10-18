import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import { getCurrentWindow } from '@tauri-apps/api/window'

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  async function createWebviewWindow() {
    const currWindow = getCurrentWindow()

    const webview = new WebviewWindow('login', { url: '/', parent: currWindow, })

    webview.once('tauri://error', (err) => {
      console.log('webview creation failed: ', err)
    })

    // webview.once('tauri://webview-created', () => webview.show())

    // Try to show the window here
    webview.show()
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <button onClick={createWebviewWindow}>Open Webview window</button>
    </main>
  );
}

export default App;
