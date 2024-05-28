import React from "react"
export default function({ children } : {
    children: React.ReactNode
}) {
    return <div>
    <div className="border-b text-center">
        20% off for the next 20 days
    </div>
    {children}
    </div>
}
// this layout will get displayed for every page starting with /signin route