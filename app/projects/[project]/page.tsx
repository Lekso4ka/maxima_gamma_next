// "use client"
import {Breadcrumb, Layout} from "antd";
import BreadCrumbs from "@/components/Breadcrumbs";
// https://nextjs.org/docs/app/getting-started/layouts-and-pages
const items = [
    {
        title: "Главная",
        href: "/"
    },
    {
        title: "Проекты",
        href: "/projects"
    },
    {
        title: ":project"
    }
]

export default async function Project ({params}: {params: {project: string}}) {
    const {project} = await params;
    return <Layout>
        <h1>{project}</h1>
        {/*<BreadCrumbs/>*/}
        <Breadcrumb items={items} params={{project: project}}/>
    </Layout>
}