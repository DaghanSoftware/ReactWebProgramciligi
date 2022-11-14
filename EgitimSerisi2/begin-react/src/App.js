import Card from "./components/Card";
import Collapse from "./components/Collapse";
function App() {
  return (
    <div>
      <div class="card-group">
        <Collapse href="collapseExample1">
          <Card
            cardTitle="Html Giriş"
            cardText="Last updated 5 mins ago"
            updatedTime="Last updated 3 mins ago"
            image="https://picsum.photos/id/1/100/200"
          ></Card>
        </Collapse>

        <Collapse href="collapseExample2">
          <Card
            cardTitle="Html Gelişme"
            cardText="Loreum İpmus."
            updatedTime="Last updated 5 mins ago"
            image="https://picsum.photos/id/2/100/200"
          ></Card>
        </Collapse>

        <Collapse href="collapseExample3">
          <Card
            cardTitle="Html Sonuç"
            cardText="Hestergon."
            updatedTime="Last updated 10 mins ago"
            image="https://picsum.photos/id/3/100/200"
          ></Card>
        </Collapse>
      </div>
    </div>
  );
}

export default App;
