import './assets/style/styles.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { ItemApp } from './pages/ItemApp';
import { ItemDetails } from './pages/ItemDetails';
import { ItemEdit } from './pages/ItemEdit';
import { Redirect } from 'react-router-dom';

export function App() {
    return (
        <Router>
            <div className="App">
                <AppHeader></AppHeader>
                <main className="">
                    <Switch>
                        {/* לשים את הראוט הכי ספציפי הכי למעלה וככה להמשיך עד שהכי כללי נמצא הכי למטה */}
                        <Route component={ItemEdit} path="/item/edit/:id?" />
                        <Route component={ItemDetails} path="/item/:id" />
                        <Route component={ItemApp} path="/" />
                        {/* <Route exact path="/">
                            <Redirect to="/item" />
                        </Route> */}
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
