import React from 'react'
import { Button } from 'antd'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Card
            style={{
              width: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <h2 style={{ textAlign: 'center' }}>Counter</h2>
            <Button type="primary" onClick={increment}>
              +
            </Button>
            <h2
              strong="true"
              style={{ margin: 0, display: 'inline-block', padding: 20 }}
            >
              {count}
            </h2>
            <Button type="primary" onClick={decrement}>
              -
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Counter
