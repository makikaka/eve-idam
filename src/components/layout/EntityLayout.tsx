import { FC, Suspense } from "react";
import Loading from "../loading";
import { EntityType } from "@/types/Entity";

export default function EventsLayout({ children, entityType, RandomList }: { children: React.ReactNode, entityType: EntityType, RandomList: FC }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mt-8 content-center">
                {children}
                <div>
                    <div className="mt-8">
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400">({`
                            Други ${entityType === "events" ? "Настани" : 
                                entityType === "artists" ? "Артисти" : 
                                "Локали"
                                }`})</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4"></h2>
                        <Suspense fallback={<Loading />}>
                            <RandomList />
                        </Suspense>
                    </div>
                </div>

            </div>
        </div>
    )
}