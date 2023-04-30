import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { GiBeastEye, GiPlantsAndAnimals } from "react-icons/gi"
import { SiOpenaigym } from "react-icons/si"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import dog from "@/assets/dog.png"
import bgcircle from "@/assets/bg-circle-ben.png"
import ActionButton from "@/shared/ActionButton";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const benefits: Array<BenefitType> = [
    {
        icon: <GiBeastEye size={35} />,
        title: 'Personalized Training Programs',
        description: "At our gym, we believe that fitness is not one-size-fits-all. That's why we offer personalized training programs designed to meet your unique goals and needs."
    },
    {
        icon: <SiOpenaigym size={35} />,
        title: 'High-Tech Equipment',
        description: "From virtual reality systems to interactive workout machines, we have the latest technology to enhance your workout and keep you engaged."
    },
    {
        icon: <GiPlantsAndAnimals size={35} />,
        title: 'Onsite Physical Therapy',
        description: "Our gym goes above and beyond by offering onsite physical therapy services to help you recover from injuries and improve your overall physical function."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}


const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={SelectedPage.Benefits}
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className="md:my-5 -my-10 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>Not just your average <span className="text-red-600">gym</span></HText>
                    <p className="my-5 text-lg">At our gym, we believe that fitness is more than just a physical activity - it's a lifestyle. That's why we offer a range of programs and services that go beyond traditional exercise to help you live a healthier, happier, and more fulfilling life.</p>
                </motion.div>
                <motion.div
                    className="flex md:flex-row flex-col mt-14 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                <div className="mt-5">
                    <div className="mx-auto relative">
                        <img className="absolute opacity-20 w-[320px] sm:w-[450px] xs:w-[450px] md:w-[450px] top-50 left-1/2 -translate-x-1/2" src={bgcircle} alt="" />
                        <img className="block relative w-64 sm:w-72 md:w-80 mx-auto" src={dog} alt="dog" />
                    </div>
                    <motion.div
                        className="flex flex-col gap-10 md:w-4/6 mx-auto mt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <HText>
                            thousands of happy members getting
                            <span className="text-red-600"> fit</span>
                            .
                        </HText>
                        <p className="md:text-xl sm:text-lg xs:text-base ">
                            Thousands of satisfied members are achieving their fitness goals and transforming their lives at our gym. Our supportive community create an inspiring environment for individuals to reach new heights in their fitness journeys. Come and experience the difference for yourself!
                        </p>
                        <div>
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits;