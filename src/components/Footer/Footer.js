import classes from "../../Style.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={classes['wrapper-narrow']}>
                <ul>
                    <li>
                        <span>©Vega IT Sourcing 2021. All rights reserved.</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;