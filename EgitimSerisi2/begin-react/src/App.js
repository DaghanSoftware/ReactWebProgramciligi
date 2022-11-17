import Card from "./components/Card";
import Collapse from "./components/Collapse";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse>
              <Card
                cardText="Last updated 5 mins ago"
                updatedTime="Last updated 3 mins ago"
                image="https://picsum.photos/id/1/100/200"
              ></Card>
            </Collapse>
          </div>

          <div className="col">
            <Collapse>
              <Card
                cardTitle="Html Gelişme"
                cardText="Last updated 10 mins ago"
                updatedTime="Last updated 10 mins ago"
                image="https://picsum.photos/id/2/100/200"
              ></Card>
            </Collapse>
          </div>

          <div className="col">
            <Collapse>
              <Card
                cardTitle="Html Sonuç"
                cardText="Last updated 15 mins ago"
                updatedTime="Last updated 15 mins ago"
                image="https://picsum.photos/id/3/100/200"
              ></Card>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
