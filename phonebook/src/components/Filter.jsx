import React from "react";

function Filter({ handleFilter }) {
    return (
        <div>
            <form>
                <label>
                    search by name:
                    <input onChange={(e) => handleFilter(e)} type="text" />
                </label>
            </form>
        </div>
    );
}

export default Filter;
