import type { ReactNode } from "react"
import HeaderLayout from "./Header"

interface PageLayoutProps {
    title?: string
    subTitle?: string
    children?: ReactNode
}

export default function PageLayout(props: PageLayoutProps) {
    return(
        <>
            <HeaderLayout/>
            <main className="mx-12 mt-10 flex flex-col items-center">
                <div className="flex w-full flex-col gap-6 rounded-2xl bg-gray-100 p-10">
                    {props.title && (
                        <h1 className="font-bold text-gray-500 text-xl">{props.title}</h1>
                    )}
                    {props.subTitle && (
                        <p className="text-gray-400 text-sm">{props.subTitle}</p>
                    )}
                    {props.children}
                </div>
            </main>
        </>
    )
}