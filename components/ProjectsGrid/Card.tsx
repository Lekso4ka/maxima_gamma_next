"use client"
import type {Project} from "./types";
import {Card as Cd, Typography, Row, Col, Flex, Button} from 'antd';

const { Title, Text } = Typography;

export default function Card({
    name,
    area,
    sizes,
    rooms,
    time,
    type,
    cost
}: Project) {
    return <Cd
        style={{margin: "16px 0"}}
        hoverable
        cover={<img alt={name} src="/images/9a8eca6426e5168007cf836ec64c9c5c8daafdf3.jpg" />}
    >
        <Title level={3}>{name}</Title>
        <Row>
            <Col span={12}>
                <Flex gap="small">
                    <Text type="secondary">Площадь:</Text>
                    <Text>{area} м<sup>2</sup></Text>
                </Flex>
            </Col>
            <Col span={12}>
                <Flex gap="small">
                    <Text type="secondary">Срок стройки:</Text>
                    <Text>{time} дней</Text>
                </Flex>
            </Col>
            <Col span={12}>
                <Flex gap="small">
                    <Text type="secondary">Размеры:</Text>
                    <Text>{sizes.w}x{sizes.l}</Text>
                </Flex>
            </Col>
            <Col span={12}>
                <Flex gap="small">
                    <Text type="secondary">Комнат:</Text>
                    <Text>{rooms}</Text>
                </Flex>
            </Col>
        </Row>
        <Flex gap="small" justify="space-between" align="baseline">
            <Text type="secondary">Тип дома:</Text>
            <Title level={3} style={{margin: 0}}>{type}</Title>
        </Flex>
        <Flex gap="small" justify="space-between" align="baseline">
            <Text type="secondary">Стоимость</Text>
            <Flex gap="small" align="baseline">
                <Text>от</Text>
                <Title level={3} type="success" style={{margin: 0}}>{cost}</Title>
                <Text>руб.</Text>
            </Flex>
        </Flex>
        <Button color="gold" variant="solid">Подробнее</Button>
    </Cd>
}