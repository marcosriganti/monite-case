import Link from 'next/link';
import icons from "@/components/icons";

const NavigationLink = (props) => {
    const {name, path, icon} = props;
    return (
        <Link href={path} className="flex items-center gap-4 text-gray-700 hover:text-gray-900">
            {icon && icons[icon]}
            {name}
        </Link>
    );
};
export default NavigationLink;