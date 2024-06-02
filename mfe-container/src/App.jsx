import React, { Suspense } from "react";
import "./App.scss";

const TodoMfeComponent = React.lazy(() => import("TodoMfe/TodoMfe"));

export default function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Container</h1>
      <section>
        <div>
          <TodoMfeComponent listTitle="This is custom list title from MFE Container" />
        </div>
      </section>
    </Suspense>
  );
}
