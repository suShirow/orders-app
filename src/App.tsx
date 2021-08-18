import React, {Component, PureComponent} from 'react';
import "./styles.css";
import ItemList from "./Components/ItemList";
import UploadPage from "./Pages/UploadPage";
import ErrorBoundary from "./Components/ErrorBoundary";
import store from "./Store";
import { Provider as ReduxProvider } from "react-redux";


export default class App extends PureComponent {
  render() {
    return (
      <ReduxProvider store={store}>
        <div className="App">
          {/* <ErrorBoundary /> */}
          <h1>Mini Web App for demo</h1>
          <UploadPage />
        </div>
      </ReduxProvider>
    );
  }
}
