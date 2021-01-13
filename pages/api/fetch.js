import Contentstack from "contentstack";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

//initialize the SDK
const Stack = Contentstack.Stack(
  process.env.API_KEY,
  process.env.DELIVERY_TOKEN,
  process.env.ENVIRONMENT
);

//retrieve multiple entries of a content type
//content type uid => "employee_collection"
const Query = Stack.ContentType("employee_collection").Query();

export default (req, res) => {
  Query.where("employee_company", "Raw Engineering")
    .toJSON()
    .find()
    .then(
      function success(result) {
        res.status(200).json({ result });
      },
      function error(err) {
        console.log(err);
        return err;
      }
    );
};
