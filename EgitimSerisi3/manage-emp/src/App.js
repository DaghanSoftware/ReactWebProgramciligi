import EmployeeList from "./components/EmployeeList.js";
import EmployeeContextProvider  from "./contexts/EmployeeContext.js";
function App() {
  return (
    <div className="App">
      <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
      <EmployeeContextProvider>
      <EmployeeList/>
      </EmployeeContextProvider>
      
      
      </div>
	</div>        
</div>
    </div>
  );
}

export default App;
