"use client";

import React, { Suspense } from 'react';
import ProjectsView from '../../components/ProjectsView';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <Suspense fallback={<div className="py-32 text-center">Loading projects...</div>}>
      <ProjectsView 
        onNavigateToEstimate={() => router.push('/quote')} 
        onViewDetails={(id) => router.push(`/projects/${id}`)}
      />
    </Suspense>
  );
}
