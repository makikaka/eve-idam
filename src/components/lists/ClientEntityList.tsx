// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { BaseEntity, EntityType } from '@/types/Entity';
// interface ClientEntityListProps {
//   initialEntities: BaseEntity[];
//   initialFilters: any; // Use a more specific type based on your filter structure
//   entityType: EntityType;
// }

// const ClientEntityList: React.FC<ClientEntityListProps> = ({ 
//   initialEntities, 
//   initialFilters,
//   entityType
// }) => {
//   const [entities, setEntities] = useState(initialEntities);
//   const [filters, setFilters] = useState(initialFilters);
//   const router = useRouter();

//   const handleFilterChange = async (newFilters: any) => {
//     setFilters(newFilters);
//     const searchParams = new URLSearchParams();
//     Object.entries(newFilters).forEach(([key, value]) => {
//       if (value) {
//         searchParams.set(key, value.toString());
//       }
//     });
//     router.push(`/${entityType}?${searchParams.toString()}`, { scroll: false });

//     // Fetch new entities based on filters
//     const newEntities = await getEntities(entityType, newFilters);
//     setEntities(newEntities);
//   };

//   return (
//     <>
//       <EntityFilters 
//         filters={filters} 
//         setFilters={handleFilterChange}
//         entityType={entityType}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
//         {entities.map((entity) => (
//           <EntityCard key={entity.id} entity={entity} entityType={entityType} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ClientEntityList;