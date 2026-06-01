"use client";

import ProjectsView from '../../../components/ProjectsView';
import { useRouter } from 'next/navigation';

export default function CompletedProjectsPage() {
  const router = useRouter();

  return (
    <ProjectsView 
      onNavigateToEstimate={() => router.push('/quote')} 
      onViewDetails={(id: string) => router.push(`/projects/${id}`)}
    />
  );
}
