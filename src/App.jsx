import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CbtLayout from "./pages/layout/CbtLayout.jsx";
import NotFound from "./pages/error/NotFound.jsx";
import Main from "./pages/Main.jsx";
import ExamLayout from "./pages/layout/ExamLayout.jsx";
import EditorLayout from "./pages/layout/EditorLayout.jsx";
import Question from "./pages/exam/question/Question.jsx";
import Cbt from "./pages/cbt/Cbt.jsx";
import Exams from "./pages/exam/Exams.jsx";
import Questions from "./pages/exam/question/Questions.jsx";
import Code from "./pages/code/Code.jsx";
import CbtAwait from "./pages/cbt/CbtAwait.jsx";
import BaseLayout from "./pages/layout/BaseLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <Main />},
        ],
    },
    {
        path: "/cbt",
        element: <CbtLayout/>,
        errorElement: <NotFound/>,
        children: [
            { index: true, element: <Cbt /> },
            { path: "/cbt/exams/:id/questions", element: <Cbt /> },
            { path: "/cbt/exams/:id/await", element: <CbtAwait /> },
        ],
    },
    {
        path: "/exams",
        element: <ExamLayout/>,
        errorElement: <NotFound/>,
        children: [
            { index: true, element: <Exams /> },
            { path: "/exams/:id/questions", element: <Questions /> },
            { path: "/exams/:id/questions/:id", element: <Question /> },
        ],
    },
    // 모든 문제를 모아서 필터링 할때 사용하자
    // {
    //     path: "/questions",
    //     element: <ExamLayout/>,
    //     errorElement: <NotFound/>,
    //     children: [
    //         {index: true, element: <Questions />},
    //         // { path: "/applies/:id", element: <Apply /> },
    //         // { path: "/applies/create", element: <ApplyCreate /> },
    //     ],
    // },
    {
        path: "/codes",
        element: <ExamLayout/>,
        errorElement: <NotFound/>,
        children: [
            { index: true, element: <Code /> }
        ]
    },
    {
        path: "/edit",
        element: <EditorLayout/>,
        errorElement: <NotFound/>,
        children: [
            { index: true, element: <Question/> }
        ]
    }
]);


function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
