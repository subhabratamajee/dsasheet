import Questions from "../../models/Questions";
import {dbConnect} from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const Id = req.query.details;
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "PUT":
      try {
        const qtn = await Questions.findById(Id);
        if (qtn.boolean===true) {
          await qtn.updateOne( { boolean:false } );
          await res
            .status(200)
            .json({ success: false, message: `${qtn.Problem} is not Solved` });
        } else {
          await qtn.updateOne({ boolean:true});
          await res
            .status(200)
            .json({ success: true, message: `${qtn.Problem} is Solved` });
        }
      } catch (error) {
        await res
          .status(500)
          .json({ success: false, error, message: "something is wrong" });
      }
      break;
  }
}
