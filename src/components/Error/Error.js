import { useRouteError } from "react-router-dom";

const Error = () => {
    const errors = useRouteError();
    console.log(errors);
    return (
        <div>
            <h1>Oops..!</h1>
            <h2>something went wrong....!</h2>
            <h3>{errors.status}:{errors.statusText}</h3>
        </div>
    )
}
export default Error;