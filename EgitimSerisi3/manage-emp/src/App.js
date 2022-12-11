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
      
      <div className="clearfix">
				<div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul className="pagination">
					<li className="page-item disabled"><a href="#">Previous</a></li>
					<li className="page-item"><a href="#" className="page-link">1</a></li>
					<li className="page-item"><a href="#" className="page-link">2</a></li>
					<li className="page-item active"><a href="#" className="page-link">3</a></li>
					<li className="page-item"><a href="#" className="page-link">4</a></li>
					<li className="page-item"><a href="#" className="page-link">5</a></li>
					<li className="page-item"><a href="#" className="page-link">Next</a></li>
				</ul>
			</div>
      </div>
	</div>        
</div>
    </div>
  );
}

export default App;
