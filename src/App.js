import { Emotion } from "./components/Emotion";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <br />
      <CssModules />
      <br />
      <StyledJsx />
      <br />
      <StyledComponents />
      <br />
      <Emotion />
    </div>
  );
}
