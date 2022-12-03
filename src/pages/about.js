import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout pageTitle="About">
      <div className="max-w-5xl h-tampilan m-auto">
        <div className="hero bg-parrent">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold p-4">Framework App</h1>
              <img
                alt="Student"
                src="https://yukcoding.id/wp-content/uploads/2021/11/JavaScript-Frameworks.jpg"
                className="w-2/3 mb-4 m-auto object-cover rounded-2xl border-amber-700 border-2"
              />
              <p>
                Frameworks are a set of libraries that are used to build web
                applications. Frameworks are used to make the development
                process easier and faster. Frameworks are also used to make the
                code more readable and easier to maintain. Frameworks are also
                used to make the code more secure and easier to test.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
