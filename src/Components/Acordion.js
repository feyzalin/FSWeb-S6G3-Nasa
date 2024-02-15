import Accordion from "react-bootstrap/Accordion";

function Accordions(props) {
  const { apodData } = props;
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h1>{apodData.title}</h1>
        </Accordion.Header>
        <Accordion.Body>
          <h2>{apodData.date}</h2>
          <img className="img" src={apodData.url} />
          <p>{apodData.explanation}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;
