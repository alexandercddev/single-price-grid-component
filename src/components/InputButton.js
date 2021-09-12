/** 
 * @author: alexandercds
 * @description: 
 * @date: 12/septiembre/2021
**/  

const InputButton = (props) => {
    const { className, value, handleClick } = props 
    return (
        <div className="button">  
            <input 
                className={`btn ${className}`} 
                onClick={handleClick}
                type="submit"
                value={value}/> 
        </div>
    );
}
  
export default InputButton;