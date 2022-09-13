
import RouteCon from "./containers/router/router_cont";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <RouteCon />
//       </div>
//     );
//   }
// }
// export default App;

import React from 'react'
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // localStorage.setItem('isHome',true)
  }, [])
  
  return (
    <div>
      <RouteCon />
    </div>
  )
}
