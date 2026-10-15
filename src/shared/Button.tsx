import type { ReactNode } from "react"

interface ButtonProps {
    text: string | ReactNode
    type: 'submit' | 'reset' | 'button'
    variant?: 'default' | 'ghost'
    style?: string
}

const variants = {
    default: 'cursor-pointer rounded-lg bg-green-200 px-5 py-3.75 font-semibold text-sm text-white transition-colors hover:bg-green-100',
    ghost: 'cursor-pointer rounded-lg bg-transparent px-5 py-3.75 font-semibold text-green-200 text-sm transition-colors hover:text-green-100'
}

export default function Button(props: ButtonProps) {
    return (
        <button 
            type={props.type} 
            className={`${variants[props.variant ?? 'default']} ${props.style ?? ''}`}>
                {props.text}
        </button>
    )
}