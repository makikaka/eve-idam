import { FC, Suspense } from "react";
import { EntityType } from "@/types/Entity";
import EntityLayout from "@/components/layout/EntityLayout";
import RandomEventsList from "../../components/lists/RandomEntityLists/RandomEventsList";

export default function ArtistsLayout({ children }: { children: React.ReactNode, entityType: EntityType, RandomList: FC }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EntityLayout entityType="artists" RandomList={RandomEventsList}>{children}</EntityLayout>
        </Suspense>
    )
}