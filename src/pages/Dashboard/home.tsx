import { useList } from "@refinedev/core";
import { Card, Col, Divider, Row, Typography } from "antd";
import { PieChart } from "components";
export default function Home() {
  return (
    <Card>
      <Typography style={{ fontSize: "25", fontWeight: "700" }}>
        Dashboard
      </Typography>
      <Card>
    
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div>
        <PieChart
              title="Properties for sale"
              value={684}
              series={[75, 25]}
              colors={["#475be8", "#e4e8ef"]}
            />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div> <PieChart
              title="Properties for Rent"
              value={550}
              series={[60, 40]}
              colors={["#475be8", "#e4b8ef"]}
            /></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>  <PieChart
              title="Total Customers"
              value={5684}
              series={[75, 25]}
              colors={["#275be8", "#c4e8ef"]}
            /></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
        <PieChart
              title="Properties for Cities"
              value={555}
              series={[75, 25]}
              colors={["#475be8", "#c4e8ef"]}
            />
        </div>
      </Col>
    </Row>
        {/* <Row gutter={} >
           <div >
            
           <PieChart
              title="Properties for sale"
              value={684}
              series={[75, 25]}
              colors={["#475be8", "#e4e8ef"]}
            />

            <PieChart
              title="Properties for Rent"
              value={550}
              series={[60, 40]}
              colors={["#475be8", "#e4b8ef"]}
            />
          
            <PieChart
              title="Total Customers"
              value={5684}
              series={[75, 25]}
              colors={["#275be8", "#c4e8ef"]}
            />
            <PieChart
              title="Properties for Cities"
              value={555}
              series={[75, 25]}
              colors={["#475be8", "#c4e8ef"]}
            />
           </div>
        </Row> */}
      </Card>
    </Card>
  );
}
