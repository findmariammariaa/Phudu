import React from "react";

const Blogs = () => {
  return (
    <main className="p-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">React Blogs</h1>

      {/* Card 1 */}
      <div className="space-y-6">
        <div className="card bg-base-200 dark:bg-gray-700 shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">1. What is useState and how does it work in React?</h2>
          <p>
            <strong>useState</strong> is a React Hook that allows you to add state to functional components. 
            You initialize it with a default value and it returns an array with two items: 
            the current state and a function to update that state. When you call the update function, 
            React re-renders the component with the new state.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-200 dark:bg-gray-700 shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">2. What is the purpose of useEffect in React?</h2>
          <p>
            <strong>useEffect</strong> lets you perform side effects in functional components, such as data fetching, 
            subscriptions, or manually changing the DOM. You can control when the effect runs by specifying 
            dependencies in an array. It runs after the render, and optionally cleans up on unmount or dependency changes.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-200 dark:bg-gray-700 shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">3. What is a custom hook in React and when should you use one?</h2>
          <p>
            A <strong>custom hook</strong> is a JavaScript function that uses React hooks to encapsulate reusable logic. 
            You create one to share stateful logic between components without repeating code. 
            Example use cases include form handling, fetching data, or managing local storage.
          </p>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-200 dark:bg-gray-700 shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">4. Difference between controlled and uncontrolled components? Which one is better?</h2>
          <p>
            <strong>Controlled components</strong> have their form data managed by React state, while 
            <strong> uncontrolled components</strong> rely on the DOM to handle their data. Controlled components 
            are usually preferred because they give you full control over the form and make validation, dynamic updates, 
            and debugging easier.
          </p>
        </div>

        {/* Card 5 */}
        <div className="card bg-base-200 dark:bg-gray-700 shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">5. Tell us something about useFormStatus()</h2>
          <p>
            <strong>useFormStatus()</strong> is a hook provided by React Server Components or frameworks like Remix to track the submission 
            status of a form. It lets you check if a form is currently submitting, successfully submitted, or errored. 
            This helps in showing loading spinners, disabling buttons during submission, or providing real-time feedback to users.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
