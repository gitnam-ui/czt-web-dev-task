import { useParams } from "react-router";
import "./about.css";
import "../new-collection/new-collection";
// import NewCollection from "../new-collection/new-collection";
import { useLocation } from "react-router-dom";
// import "./about.css";

const Men = () => {
    let params1 = useParams();
    return (
        <div>
            This is Men's Section{JSON.stringify(params1)}
        </div>
    )
}

const Women = () => {
    let params2 = useParams();
    return (
        <div>
            This is Women's Section{JSON.stringify(params2)}
        </div>
    )
}

const Kids = () => {
    let params3 = useParams();
    return (
        <div>
            This is Kids's Section{JSON.stringify(params3)}
        </div>
    )
}

const Newandfeatured = () => {
    let params4 = useParams();
    return (
        <div>
            This is New & Featured Section{JSON.stringify(params4)}
        </div>
    )
}
const Gifts = () => {
    let params5 = useParams();
    return (
        <div>
            This is Gifts' Section{JSON.stringify(params5)}
        </div>
    )
}

const Task = () => {
    const location = useLocation(); // Retrieve the passed state
    const { image, title, sub_title, price, id } = location.state || {}; // Extract details
  
    if (!title) {
      // Handle cases where state is undefined
      return <div>No card data found. Navigate back and try again.</div>;
    }
  
    return (
      <div>
        <h1>Card Details</h1>
        <div>
          <img
            src={image}
            alt={title}
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h2>Title: {title}</h2>
          <h3>Sub-title: {sub_title}</h3>
          <p>Price: ₹{price}</p>
          <p>ID: {id}</p>
        </div>
      </div>
    );
  };
  

// const Task1 = () => {
//     let params6 = useParams();
//     return (
//         <div>
//             {JSON.stringify(params6)}
//         </div>
//     )
// }

// const Task1 = () => {
//     let params6 = useParams();
//     return (
//         <div>
//             {JSON.stringify(params6)}
//         </div>
//     )
// }

// const Task1 = () => {
//     let params6 = useParams();
//     return (
//         <div>
//             {JSON.stringify(params6)}
//         </div>
//     )
// }

// const Task1 = () => {
//     let params6 = useParams();
//     return (
//         <div>
//             {JSON.stringify(params6)}
//         </div>
//     )
// }


export {Men, Women, Kids, Newandfeatured, Gifts, Task};
