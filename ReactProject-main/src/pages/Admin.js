import React from "react";
import "../pages/admin.css";
import AsyncAwait from "components/AsyncAwait";

function refreshPage() {
  window.location.reload(false);
}

function Admin() {
  return (
    <>
      <h1>Admin Page</h1>

      <div>
        <h2>Manage Users </h2>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button id="refreshbtn" onClick={refreshPage}>
            Refresh After Changes
          </button>
        </div>
        <AsyncAwait />
      </div>
    </>
  );
}

export default Admin;
