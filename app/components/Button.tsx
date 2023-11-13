import Image from "next/image";

type ButtonProps = {
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`bg-[#89CFF0] shadow-md rounded-lg ${variant}`}
      type="button"
    >
      <label className="medium-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  );
};

export default Button;
