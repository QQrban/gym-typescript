import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="flex flex-col items-center justify-between text-center gap-4 bg-purple-100 p-5 py-7 mx-auto mt-7">
            <div className='bg-red-600 p-2 rounded-full'>
                {icon}
            </div>
            <h4 className='text-black font-bold text-lg'>
                {title}
            </h4>
            <p className='max-w-md text-black'>{description}</p>
            <AnchorLink
                className="text-base font-bold text-black hover:text-red-600"
                onClick={() => setSelectedPage(SelectedPage.Contact)}
                href={`#${SelectedPage.Contact}`}
            >
                <div>Learn More</div>
            </AnchorLink>
        </motion.div>
    )
}

export default Benefit;