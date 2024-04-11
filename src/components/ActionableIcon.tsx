import { Icon } from "@/assets/img/Icons";
import Image from "next/image";

interface IconProps {
  height: number;
  width: number;
  alt: string;
}

interface ActionableIconProps {
  icon: Icon;
  iconProps?: IconProps;
  className?:string,
  onClick?: () => void;
}

const defaultIconProps = {
    height: 20,
    width: 20,
    alt: 'actionable icon',
}

const ActionableIcon = ({ icon, iconProps = defaultIconProps, className = '' }: ActionableIconProps) => {
  return (
    <div className={`actionable-icon ${className}`}>
      <Image
        src={icon}
        height={iconProps.height}
        width={iconProps.width}
        alt={iconProps.alt}
      />
    </div>
  );
};

export default ActionableIcon;
