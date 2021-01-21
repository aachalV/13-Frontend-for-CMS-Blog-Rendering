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
const Query = Stack.ContentType("aachal_blog").Query();

export default (req, res) => {
  Query.includeReference("related_links")
    // .where("author", "Kira  Zulauf")
    .toJSON()
    .find()
    .then(
      function success(result) {
        console.log(result[0]);
        res.status(200).json(result[0]);
      },
      function error(err) {
        console.log(err);
        return err;
      }
    );
};
