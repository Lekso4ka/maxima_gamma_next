import ProjectsGrid from "@/components/ProjectsGrid";
import BreadCrumbs from "@/components/Breadcrumbs";

import ContextProvider from "@/ctx";

export default function ProjectsPage () {
    return <ContextProvider>
        <BreadCrumbs/>
        <ProjectsGrid/>
    </ContextProvider>
}