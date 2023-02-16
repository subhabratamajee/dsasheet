import { GetServerSideProps, NextApiRequest } from "next";
import Link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import clientPromise from '../lib/mongodb';

import Questions from "../models/Questions";
interface INDEXDATA {
  tpc:{
    details:any;
  }
  questions: {
    map: any;
    filter: any;
    _id?: string;
    Topic?: string;
    Problem?: string;
    url?: string;
    boolean?: boolean;
  };
  quotes: { affirmation: string };
}
function Details({tpc, questions, quotes }: INDEXDATA) {
  async function handleChange(e: any) {
    const { id } = e.target;
    // const { languages } = userinfo;
     fetch(`https://dsasheet-subha.vercel.app/api/${id}`, {
      method: "PUT",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        json.success ? toast.success(json.message) : toast(json.message);
      })
      .then((error: any) => {
        toast.error(error);
      });

      await onload();
     function onload() {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 pb-4  pl-2 md:pl-0">
      <ToastContainer />
      <div className="text-center p-4">
        <div className="text-fuchsia-800 text-4xl  underline-offset-2">
         <h1 className="font-semibold pb-2">{tpc?.details}</h1>
           </div>
           <p className="text-2xl font-mono text-orange-500">{quotes.affirmation}</p>
      </div>
      <table className=" text-xl md:text-3xl p-8 mt-4 m-auto ">
        <tbody>
          <tr className="bg-gray-100 py-24 rounded-md" >
            <th scope="col">Done</th>
            <th scope="col">Problems</th>
          </tr>
          {questions.map((question: any, index: any) => {
            return (
              <tr key={index}>
                <td scope="col" className="text-center">
                  <input className=" h-4 w-4 md:h-6 md:w-6 rounded-full shadow checked:shadow-xl border-none focus:accent-pink-500"
                    type="checkbox"
                    name="problem"
                    checked={question.boolean}
                    value={question.Problem}
                    id={question._id}
                    onChange={handleChange}
                  />
                </td>
                <td scope="col" className="text-sky-600">
                  <Link href={question.url} target="_blank">
                    {question.Problem}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Details;

export const getServerSideProps: GetServerSideProps = async function (ctx) {
  const questions = await Questions.find({ Topic: ctx.params?.details }).lean();
  const quotes = await fetch("https://www.affirmations.dev/").then((response) =>
    response.json()
  );
  return {
    props: {
      tpc:ctx.params,
      questions: JSON.parse(JSON.stringify(questions)),
      quotes: JSON.parse(JSON.stringify(quotes)),
    },
  };
};
