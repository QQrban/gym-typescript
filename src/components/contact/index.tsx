import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { useForm } from "react-hook-form";
import dog from "@/assets/contact-dog.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({ setSelectedPage }: Props) => {

    const isAboveSmall = useMediaQuery("(min-width:396px)");

    const inputStyle = "w-full rounded-lg bg-red-500 px-5 py-3 placeholder-white mt-5";

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section
            className="mx-auto w-5/6 pt-16 md:pt-24"
            id="contact"
        >
            <motion.div className="relative" onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
                <motion.div
                    className="md:w-4/5 mx-auto flex flex-col"
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
                        <span className="text-red-600">join now </span>
                        to get in shape
                    </HText>
                    <div className="flex md:flex-row flex-col items-center mt-6">
                        <div className="w-[250px] shrink-0">
                            <img src={dog} alt="23" />
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-justify sm:text-justify md:text-justify md:w-2/3">
                            Discover the benefits of a healthier, stronger, and more confident you by joining our fitness community today! Our dedicated team of trainers and staff are committed to helping you achieve your fitness goals in empowering environment.
                            {isAboveSmall && " Don't wait any longer - take the first step towards transforming your life and getting in shape. Sign up now and unlock the endless possibilities that come with a fit and active lifestyle. Your journey to better health and well-being starts here!"}
                        </p>
                    </div>
                </motion.div>
                <div className="-mt-16 md:-mt-10 mx-auto md:w-2/3">
                    <motion.div
                        className="mt-10 md:mt-0 pb-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action="https://formsubmit.co/topikol6@yandex.ru"
                        >
                            <input
                                className={inputStyle}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-red-600">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                                </p>
                            )}
                            <input
                                className={inputStyle}
                                type="email"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-red-600">
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invalid email address"}
                                </p>
                            )}
                            <textarea
                                className={inputStyle}
                                rows={6}
                                cols={5}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-red-500">
                                    {errors.message.type === "required" && "This field is required"}
                                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-red-700 px-20 py-3 transition duration-500 hove hover:bg-red-800 "
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}

export default Contact;