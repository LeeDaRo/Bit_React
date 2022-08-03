import Test from './api/Test';
import './App.css';

/**
 * JS에서 비동기 HTTP 통신
 * ajxs, fetch, axios
 * 
 */

/**
 * REST API
 * (Representational State Transfer)
 * 두 컴퓨터 시스템이 인터넷을 통해
 * 정보를 교환하기 위해 사용하는 인터페이스입니다.
 * HTTP Method : GET, POST, PUT, DELETE
 */

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Test />
      </header>
    </div>
  );
}

export default App;
