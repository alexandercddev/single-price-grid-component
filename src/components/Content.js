/** 
 * @author: alexandercds
 * @description:
 * @date: 12/septiembre/2021
**/ 

export const Content = (props) => {
    const { className = '', title, children } = props;
    return (
        <div className={`content ${className}`}>
            <h3 className="title">{title}</h3>
            <div className="body">
                {children}
            </div>
        </div>
    );
}

export default Content;