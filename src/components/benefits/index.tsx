import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { GiBeastEye, GiPlantsAndAnimals } from "react-icons/gi"
import { SiOpenaigym } from "react-icons/si"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import rhino from "@/assets/rhino.png"
import bgcircle from "@/assets/bg-circle-ben.png"

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
                <div className="mt-10">
                    <div className=" md:w-96 mx-auto relative">
                        <img className="absolute opacity-60 w-80 left-1/2 -translate-x-1/2" src={bgcircle} alt="" />
                        <img className="block relative mx-auto w-96" src={rhino} alt="woman" />
                    </div>
                    <div className="uppercase text-3xl font-bold tracking-wider text-center mt-9">
                        thousands of happy members getting
                        <span className="text-red-600"> fit</span>
                        .
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits;