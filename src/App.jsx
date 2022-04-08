import './assets/style/styles.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { ItemApp } from './pages/ItemApp';
import { ItemDetails } from './pages/ItemDetails';
import { ItemEdit } from './pages/ItemEdit';
import { Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const App = () => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!window.scrollY) setIsScroll(false);
            else setIsScroll(true);
        });
        return () => window.removeEventListener('scroll', setIsScroll(false));
    }, []);

    return (
        <Router>
            <div className="App">
                <AppHeader isScroll={isScroll}></AppHeader>
                <main className="">
                    <Switch>
                        {/* לשים את הראוט הכי ספציפי הכי למעלה וככה להמשיך עד שהכי כללי נמצא הכי למטה */}
                        <Route component={ItemEdit} path="/item/edit/:id?" />
                        <Route component={ItemApp} path="/" />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};
