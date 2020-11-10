import HomePage from './pages/Home/HomePage';
import TestPage from './pages/Test/TestPage';

export default [
    {
        path: "/test",
        component: TestPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
]