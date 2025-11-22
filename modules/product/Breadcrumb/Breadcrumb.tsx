import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"


export const BreadcrumbDemo: React.FC<{ isProduct?: boolean }> = ({ isProduct = true }) => {
    return (
        <Breadcrumb className="py-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Главная</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                {isProduct ? <React.Fragment>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/docs/components">Наушники</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Apple AirPods 3 Pro</BreadcrumbPage>
                    </BreadcrumbItem>
                </React.Fragment> : <BreadcrumbItem>
                    <BreadcrumbPage>Наушники</BreadcrumbPage>
                </BreadcrumbItem>}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
