import { Bed, Car, ForkKnife, Receipt, Wrench } from "phosphor-react"
import { formatCurrency } from "../../utils/formatCurrency"

export interface RefundRequest {
    uuid: string
    customer: string
    category: 'food' | 'accommodation' | 'transport' | 'services' | 'others'
    currency: {
        code: string
        value: number
    }
}

const categories = {
    food: {
        label: 'Alimentação',
        icon: ForkKnife
    },
    accommodation: {
        label: 'Acomodação',
        icon: Bed
    },
    transport: {
        label: 'Transporte',
        icon: Car
    },
    services: {
        label: 'Serviços',
        icon: Wrench
    },
    others: {
        label: 'Outros',
        icon: Receipt
    }
}

interface RefundRequestItemProps {
    request: RefundRequest
}


export default function RefundRequestItem(props: RefundRequestItemProps) {
    const category = categories[props.request.category]
    const Icon = category.icon
    const { symbol, amount } = formatCurrency(
        props.request.currency.value,
        props.request.currency.code,
    )
    
    return (
        <li className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
                <div className="rounded-full bg-gray-300 p-3">
                        <Icon size={24}/>
                </div>
                <div className="flex flex-col">
                    <strong>{props.request.customer}</strong>
                    <p className="">{category.label}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <p>{symbol}</p>
                <p>{amount}</p>
            </div>
        </li>
    )
}