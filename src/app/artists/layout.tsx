import { FC } from "react";
import { EntityType } from "@/types/Entity";
import EntityLayout from "@/components/layout/EntityLayout";
import RandomEventsList from "../../components/lists/RandomEvents/RandomEventsList";

export default function ArtistsLayout({ children }: { children: React.ReactNode, entityType: EntityType, RandomList: FC }) {
    return (
        <EntityLayout entityType="artists" RandomList={RandomEventsList}>{children}</EntityLayout>
    )
}