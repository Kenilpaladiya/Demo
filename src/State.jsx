import React, { useState } from "react";


const State = () => {

    var [str, setStr] = useState("Hello");
    
    const handleClick = (e) => {
        e.preventDefault();
        setStr("Hii");
        // alert(str);
    }

    return (
        <>
            <h1>{str}</h1>
            <form method="post" onSubmit={handleClick}>
                <table border="1" cellSpacing={0} cellPadding={10}>
                    <tr>
                        <td>
                            <label htmlFor="">Name :</label>
                        </td>
                        <td>
                            <input type="text" name="name" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default State;