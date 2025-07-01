type ButtonProps = {
  title: string;
  icon?: string;
  variant: string;
  onClick?: any;
};

const Button = ({ title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-[#116D99] shadow-md rounded-md ${variant}`}
      type="button"
      onClick={onClick}
    >
      <label className="whitespace-nowrap cursor-pointer">
        <p className="medium-16">{title}</p>
      </label>
    </button>
  );
};

export default Button;
