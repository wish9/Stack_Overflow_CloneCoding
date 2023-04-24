import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import QuestionDetail from "./pages/QuestionDetail/QuestionDetail.jsx";
import AskQuestion from "./pages/AskQuestion/AskQuestion.jsx";
import QuestionSection from "./pages/QuestionSection/QuestionSection.jsx";
import Login from "./pages/Login/Login.jsx";
import AskQuestionEdit from "./pages/AskQuestionEdit/AskQuestionEdit.jsx";
import SearchPage from "./pages/QuestionSection/SearchPage.jsx";
import Home from "./pages/Home/Home.jsx";
import { useState } from "react";
import useInput from "./hooks/useInput.js";

function App() {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(0);
  const [search, searchReset] = useInput("");

  const handleSearch = e => {
    e.preventDefault();
    navigate(`/question/search/${search.value}`);
    setPageNum(0);
    searchReset();
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} search={search} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<QuestionSection />} />
        <Route
          path="/question/search/:keyword"
          element={<SearchPage pageNum={pageNum} setPageNum={setPageNum} />}
        />
        <Route path="/question/ask" element={<AskQuestion />} />
        <Route path="/question/:questionId" element={<QuestionDetail />} />
        <Route
          path="/question/:questionId/questionEdit"
          element={<AskQuestionEdit />}
        />
        <Route path="/question/:questionId/answerEdit/:answerId" />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
