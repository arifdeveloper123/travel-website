import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    varient: string; 
}

const Button = ({ type, title, icon, varient }: ButtonProps) => {
  return (
    <button 
    className={`flex px-8 py-4 gap-3 rounded-full  $ border ${varient}`} 
    type={type}
    >
        {icon && <img src={icon} alt={title} width={22} height={22}/>}
        <label className="bold-16 whitespace-nowrap ">{title}</label>
    </button>
  )
}

export default Button;