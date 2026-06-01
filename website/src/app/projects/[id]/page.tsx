import ProjectDetailView from '../../../components/ProjectDetailView';
import { PROJECTS_DATA } from '../../../data';

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <ProjectDetailView projectId={id} />
  );
}
