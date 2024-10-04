import { Suspense } from "react";
import RandomEventsList from "./RandomEvents/RandomEventsList";
import Loading from "./loading";

export default function EventsLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mt-8 content-center">
                {children}
                <div>
                    <div className="mt-8">
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400">Други Настан</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4"></h2>
                        <Suspense fallback={<Loading />}>
                            <RandomEventsList />
                        </Suspense>
                    </div>
                </div>

            </div>
        </div>
    )
}