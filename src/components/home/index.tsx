import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import bear from "@/assets/bear.png";
import bgcircle from "@/assets/back-circle.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import sponsorAdidas from "@/assets/sponsorAdidas.png"
import sponsorBaseball from "@/assets/sponsorBaseball.png"
import sponsorPepsi from "@/assets/sponsorPepsi.png"
import sponsorSteadyGo from "@/assets/sponsorSteadyGo.png"
import sponsorRace from "@/assets/sponsorRace.png"
import smoke from "@/assets/smoke1.png";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {

    const isAboveMedium = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="gap-16 py-10 md:h-full "
        >
            <motion.div
                className="flex md:flex-row flex-col mx-auto w-5/6 items-center justify-center md:h-5/6 relative border-b-2 border-gray-600 border-opacity-40 md:border-none"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                <div className="z-10 mt-10 md:mt-25 md:basis-3/5  flex flex-col items-center md:items-start md:order-1 order-2 pb-10 md:pb-0">
                    <motion.div
                        className="w-5/6 md:text-left text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <h2
                            className="text-4xl md:text-7xl text-transparent"
                            style={{ WebkitTextStroke: '1px white' }}
                        >
                            BODY
                            <div className="mt-3">REVOLUTION</div>
                        </h2>
                        <p className="leading-7 mt-5 text-base md:text-xl sm:text-lg xs:text-lg font-montserrat">Achieve your fitness goals with our state-of-the-art gym and expert trainers. Our dynamic workout programs and supportive community will help you unleash your potential and make progress towards your ideal self</p>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-8 mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold  hover:text-red-400"
                            onClick={() => setSelectedPage(SelectedPage.Contact)}
                            href={`#${SelectedPage.Contact}`}
                        >
                            <div>Learn More</div>
                        </AnchorLink>
                    </motion.div>
                </div>
                <div className="relative mt-16 md:mt-10 md:order-2 order-1">
                    <div className="absolute z-5 w-[300px] md:w-[350px] sm:w-[350px] xs:w-[350px] top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                        <img src={bgcircle} alt="background-element" />
                    </div>
                    <div className="z-10 relative">
                        <img className="brightness-[95%] w-64 sm:w-72 md:w-80" src={bear} alt="bear" />
                    </div>
                </div>
                <div className="absolute rotate-180 brightness-200">
                    <img src={smoke} alt="bg-element" />
                </div>
            </motion.div>
            {isAboveMedium && (
                <div className="mt-7 relative">
                    <div className="flex gap-16 items-center justify-center bg-white p-2">
                        <div className="w-28">
                            <img src={sponsorAdidas} alt="sponsor-adidas" />
                        </div>
                        <div className="w-32">
                            <img src={sponsorBaseball} alt="sponsor-baseball" />
                        </div>
                        <div className="w-32">
                            <img src={sponsorPepsi} alt="sponsor-pepsi" />
                        </div>
                        <div className="w-40">
                            <img src={sponsorSteadyGo} alt="sponsor-steady" />
                        </div>
                        <div className="w-40">
                            <img src={sponsorRace} alt="sponsor-race" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home;