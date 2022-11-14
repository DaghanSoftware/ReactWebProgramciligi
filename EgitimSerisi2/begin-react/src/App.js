import Card from "./components/Card";
function App() {
  return (
    <div>
            <div class="card-group">
      <Card
        cardTitle="Html Giriş"
        cardText="This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer."
        updatedTime="Last updated 3 mins ago"
        image="https://picsum.photos/id/1/100/200"
      ></Card>
      <Card
        cardTitle="Html Gelişme"
        cardText="Loreum İpmus."
        updatedTime="Last updated 5 mins ago"
        image="https://picsum.photos/id/2/100/200"
      ></Card>
      <Card
        cardTitle="Html Sonuç"
        cardText="Hestergon."
        updatedTime="Last updated 10 mins ago"
        image="https://picsum.photos/id/3/100/200"
      ></Card>
      </div>
    </div>
  );
}

export default App;
