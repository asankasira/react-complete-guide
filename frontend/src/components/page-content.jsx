import classes from './page-content.module.css';

export const PageContent = ({ title, children }) => {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}