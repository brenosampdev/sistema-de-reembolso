import RefundRequestItem from "./RefundRequestItem";

export default function ListRefundRequests() {
    return (
        <div className="border-t border-t-gray-200 py-6">
            <ul>
                <RefundRequestItem
                    request={{
                        uuid: '1',
                        customer: 'Rodrigo',
                        category:'food',
                        currency: { code: 'BRL', value: 29.20 },
                    }}
                />
            </ul>
        </div>
    )
}