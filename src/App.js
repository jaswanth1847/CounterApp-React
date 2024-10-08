// import Banneritems from "./components/Banneritems"

import MyComponent from "./components/Counter"


// let BannerList = [
//   {
//     "id":1,
//     "headerText": "The Session Latest",
//     "description": "Get all the latest Sessions in aflick of your hand",
//     "classname" : "Show More"
//   },
//   {
//     "id":2,
//     "headerText": "Our New Designs",
//     "description": "Get designs developed by our in-house team all for yourself",
//     "classname" : "Show More"
//   },
//   {
//     "id":3,
//     "headerText": "Insiders",
//     "description": "Get the top class products for yourself with an a extra-Off",
//     "classname" : "Show More"
//   }

// ]

// const App = () =>{
//   return(
//     <div>
//       <h1>Banner Items</h1>
//       <ul>
//         {
//           BannerList.map((item)=>{
//             return(
//               <Banneritems item = {item} key={item.id}/>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default App

const App = () =>{
  return(
    <div>
      <MyComponent/>
    </div>
  )
}

export default App
