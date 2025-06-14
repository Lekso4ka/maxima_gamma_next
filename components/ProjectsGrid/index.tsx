"use client"
import {Layout, Typography, Row, Col} from "antd";
import type {Project} from "./types"
import Card from "./Card";
import data from "@/data/projects.json"

const projects: Project[] = data

export default function ProjectsGrid ({}) {
    return <Layout>
        <Layout.Header>
            <Typography.Title>Наши проекты</Typography.Title>
        </Layout.Header>
        <Layout.Content style={{ padding: 50 }}>
            <Row gutter={32}>
                {projects.map((p, index) => <Col
                    key={index}
                    span={8}
                >
                    <Card {...p}/>
                </Col>)}
            </Row>
        </Layout.Content>
    </Layout>
}