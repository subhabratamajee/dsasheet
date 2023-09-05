import { GetServerSideProps, NextApiRequest } from "next";
import Link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import clientPromise from '../lib/mongodb';

import Questions from "../models/Questions";
interface INDEXDATA {
  tpc: {
    details: any;
  };
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
  random: any;
}
function Details({ tpc, questions, quotes, random }: INDEXDATA) {
  const [query, setQuery] = useState("");

  async function handleChange(e: any) {
    const { id } = e.target;

    fetch(`https://450sheet.vercel.app/api/${id}`, {
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

  async function getRand() {
    fetch(`https://450sheet.vercel.app/api/${tpc?.details}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const ul = data.data[0].url;
        window.open(ul, "_blank");
      });
  }

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 pb-4  pl-2 md:pl-0">
      <ToastContainer />
      <div className="text-center p-4">
        <div className="text-fuchsia-800 text-4xl  underline-offset-2">
          <h1 className="font-semibold pb-2">{tpc?.details}</h1>
        </div>
        <p className="text-2xl font-mono text-orange-500">
          {quotes.affirmation}
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <div onClick={() => getRand()}>
          <button className="p-2 border-2 rounded-md bg-blue-500 text-white ">
            Random Pickup
          </button>
        </div>
        <input
          className="p-2 w-96 rounded-md focus:border-none border-none"
          placeholder="Search the question ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table className=" text-xl md:text-3xl p-8 mt-4 m-auto ">
        <tbody>
          <tr className="bg-gray-100 py-24 rounded-md">
            <th scope="col">Done</th>
            <th scope="col">Problems</th>
          </tr>
          {questions
            .filter((qn: any) => {
              if (query == "") {
                return qn;
              } else if (
                qn.Problem.toLocaleLowerCase().includes(
                  query.toLocaleLowerCase()
                )
              ) {
                return qn;
              }
            })
            .map((question: any, index: any) => {
              return (
                <tr key={index}>
                  <td scope="col" className="text-center">
                    <input
                      className=" h-4 w-4 md:h-6 md:w-6 rounded-full shadow checked:shadow-xl border-none focus:accent-pink-500"
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
  const questions = await Questions.find({ Topic: ctx.params?.details }).sort({ "boolean": 1 }).lean();
  const random = await Questions.aggregate([
    { $match: { Topic: ctx.params?.details } },
    { $sample: { size: 1 } },
  ]);
  const quotes = await fetch("https://www.affirmations.dev/").then((response) =>
    response.json()
  );
  return {
    props: {
      tpc: ctx.params,
      questions: JSON.parse(JSON.stringify(questions)),
      quotes: JSON.parse(JSON.stringify(quotes)),
      random: JSON.parse(JSON.stringify(random)),
    },
  };
};
