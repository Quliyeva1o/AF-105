import { Col, Divider, Row } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
const AntDesign = () => {
  return (
    <>
      <Divider orientation="left">Grid System</Divider>
      <div style={{width:'80%',margin:'0 auto'}}>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col
            className="gutter-row"
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <div style={style}>col-6</div>
          </Col>
          <Col
            className="gutter-row"
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <div style={style}>col-6</div>
          </Col>
          <Col
            className="gutter-row"
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <div style={style}>col-6</div>
          </Col>
          <Col
            className="gutter-row"
            span={6}
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AntDesign;
