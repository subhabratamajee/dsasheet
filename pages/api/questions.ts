import { useRouter } from "next/router";
import Questions from "../../models/Questions";
// import dbConnect from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    
    case "GET":
      try {
        const questions = await Questions.find({}).lean();
        res.status(200)
          .json({questions,success:true})
      } catch (error: any) {
        return res.status(400).json({
          message: new Error(error).message,success:false
        });
      }
  }
};
