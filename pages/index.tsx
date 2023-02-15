import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Questions from "../models/Questions";
import { GetServerSideProps } from "next";
import { dbConnect } from "../lib/mongodb";
import array from "../public/array.png";
import string from "../public/string.png";
import link from "../public/link.png";
import search from "../public/search.png";
import binary from "../public/binary.jpg";
import dynamic from "../public/dynamic.png";

interface INDEXDATA {
  questions: {
    filter: any;
    _id?: string;
    Topic?: string;
    Problem?: string;
    url?: string;
    boolean?: boolean;
  };
  quotes: { affirmation: string };
}
export default function Home({ questions, quotes }: INDEXDATA) {


  function TrueFalse(Type: string) {
    var trueCount = 0;
    var falseCount = 0;
    questions
      .filter((w: any) => w.Topic === Type)
      .forEach(function (object: any) {
        object.boolean === true ? trueCount++ : falseCount++;
      });
    return { trueCount, falseCount };
  }

  return (
    <>
      <Head>
        <title>DSA SHEET</title>
        <meta
          name="description"
          content="DSA SHEET BY LOVE BABBAR ,DEVELOPED BY SUBHABRATA MAJEE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="shadow-md pb-4">
          <h1 className=" text-orange-500 text-center font-bold text-4xl mt-4">
            Welcome,
            <span className="text-blue-600 font-semibold"> Subhabrata!</span>
          </h1>
        </div>
        <div>
          <h3 className="text-green-600 text-2xl text-center p-2">
            {quotes.affirmation}
          </h3>
        </div>

        <div className="container pl-8 content-center flex flex-wrap justify-evenly ">
          <Link href={"Array"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Array{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Array").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Array").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"String"}>
            <div className="box flex w-96 border-2 bg-orange-200 p-2 border-orange-400 rounded-lg shadow-orange-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={string} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  String{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("String").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("String").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Searching & Sorting"}>
            <div className="box flex w-96 border-2 bg-green-200 p-2 border-green-400 rounded-lg shadow-green-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={search} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Searching & Sorting{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Searching & Sorting").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Searching & Sorting").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"LinkedList"}>
            <div className="box flex w-96 border-2 bg-red-200 p-2 border-red-400 rounded-lg shadow-red-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={link} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  LinkedList{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("LinkedList").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("LinkedList").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Binary Trees"}>
            <div className="box flex w-96 border-2 bg-sky-200 p-2 border-sky-400 rounded-lg shadow-sky-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={binary} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Binary Trees{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Binary Trees").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Binary Trees").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Binary Search Trees"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Binary Search Trees{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Binary Search Trees").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Binary Search Trees").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Greedy"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Greedy{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Greedy").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Greedy").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"BackTracking"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  BackTracking{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("BackTracking").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("BackTracking").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Stacks & Queues"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Stacks & Queues{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Stacks & Queues").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Stacks & Queues").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Heap"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Heap{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Heap").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Heap").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Graph"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Graph{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Graph").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Graph").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>
          <Link href={"Trie"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Trie{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Trie").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Trie").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Dynamic Programming"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={dynamic} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Dynamic Programming{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Dynamic Programming").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Dynamic Programming").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"Bit Manipulation"}>
            <div className="box flex w-96 border-2 bg-blue-200 p-2 border-blue-400 rounded-lg shadow-blue-200 shadow-md mt-8">
              <div className="flex w-36">
                <Image className=" rounded-full " src={array} alt="img" />
              </div>
              <div className="flex flex-col ml-2 text--200">
                <h1 className="text-xl font-bold">
                  Bit Manipulation{" "}
                  <span className="text-md font-medium">
                    ({TrueFalse("Bit Manipulation").trueCount}/
                    <span className="text-xl font-bold">
                      {TrueFalse("Bit Manipulation").falseCount}
                    </span>
                    )
                  </span>
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores, sequi.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async function () {
  await dbConnect();
  const questions = await Questions.find({}).lean();
  const quotes = await fetch("https://www.affirmations.dev/").then((response) =>
    response.json()
  );
  return {
    props: {
      questions: JSON.parse(JSON.stringify(questions)),
      quotes: JSON.parse(JSON.stringify(quotes)),
    },
  };
};
