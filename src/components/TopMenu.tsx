import TopMenuItem from "./TopMenuItem";
import styles from './topmenu.module.css'

const TopMenu = () => {
    return (
        <nav className= {styles.menucontainer}>
            <img src="/img/logo.png" alt="Logo" className="h-10" />
            <div className="flex space-x-4">
               
                <TopMenuItem title='Booking' pageRef="/booking" />
            </div>
        </nav>
    );
};

export default TopMenu;
