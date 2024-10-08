import { FC } from "react";
import { EntityType } from "@/types/Entity";
import EntityLayout from "@/components/layout/EntityLayout";
import RandomEventsList from "../../components/lists/RandomEntityLists/RandomEventsList";

export default function EventsLayout({ children }: { children: React.ReactNode, entityType: EntityType, RandomList: FC }) {
    return (
        <EntityLayout entityType="events" RandomList={RandomEventsList}>{children}</EntityLayout>
    )
}