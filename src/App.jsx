import Issue from "./Issue";
import GitHubIssues from "./Components/Pagination/GitHubIssues";
import "./App.css"
import Footer from "./Components/Footer";
import Filter from "./Components/Filter";

export default function App() {
  return (
    <h1 className=" bg-slate-900 scroll-smooth">
      <Issue/>
      <Filter/>
      <GitHubIssues/>
      <Footer/>
    </h1>
  )
}