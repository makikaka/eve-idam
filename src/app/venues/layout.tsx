import { FC } from "react";
import { EntityType } from "@/types/Entity";
import EntityLayout from "@/components/layout/EntityLayout";
import RandomEventsList from "../../components/lists/RandomEntityLists/RandomEventsList";

export default function VenuesLayout({ children }: { children: React.ReactNode, entityType: EntityType, RandomList: FC }) {
    return (
        <EntityLayout entityType="venues" RandomList={RandomEventsList}>{children}</EntityLayout>
    )
}