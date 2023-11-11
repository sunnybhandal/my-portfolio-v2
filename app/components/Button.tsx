import Image from "next/image";

type ButtonProps = {
  type: "button";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`bg-[#89CFF0] shadow-md flexCenter gap-3 rounded-lg ${variant}`}
      type={type}
    >
      <label className="medium-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  );
};

export default Button;
