import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import styles from './Layout.module.scss'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
};

export default Layout;