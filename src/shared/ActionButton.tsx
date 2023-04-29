import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className="rounded-lg bg-purple-400 p-2 px-5 hover:bg-purple-500 hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
            href="#contact"
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton