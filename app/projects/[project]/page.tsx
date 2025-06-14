// "use client"
import {Layout} from "antd";
import SingleProject from "@/components/SingleProject";
// https://nextjs.org/docs/app/getting-started/layouts-and-pages


export default async function Project ({params}: {params: {project: string}}) {
    const {project} = await params;
    return <Layout>
        <SingleProject id={project}/>
    </Layout>
}