import express from "express";
import mongoose from "mongoose";
const app = express();

// try {
//   await mongoose.connect(
//     "mongodb+srv://ekadabhijeet4:abhijeetekad@cluster0.ygx4xuc.mongodb.net/?retryWrites=true&w=majority&dbname=gettrp"
//   );
// } catch (error) {
//   //   handleError(error);
//   console.error(error);
// }
// mongoose.connect(
//   "mongodb+srv://ekadabhijeet4:abhijeetekad@cluster0.ygx4xuc.mongodb.net/?retryWrites=true&w=majority&dbname=gettrp"
// );
app.listen(8800, () => {
  console.log("Backend server is runningg");
});
