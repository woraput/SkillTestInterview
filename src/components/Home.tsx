import React from "react";
import { UserRegister } from "./Register";

type Props = {};

const Home = (props: Props) => {
  const data: UserRegister = {
    gender: null,
    firstName: "",
    lastName: "",
    address: "",
    postcode: null,
    email: "",
    password: "",
    tel: null,
    isAccept: false,
  };

  return (
    <div className="container-fluid p-4 h-full flex align-middle justify-center bg-[#e8e8e8]">
      <div className="flex flex-col justify-center w-[400px]">
        <h1 className="text-4xl text-center mb-5 font-bold">Information</h1>

        <table>
          <tbody>
            <tr>
              <td className="pb-1">Gender </td>
              <td align="right">{data?.gender}</td>
            </tr>
            <tr>
              <td className="pb-1">First Name </td>
              <td align="right">{data?.firstName}</td>
            </tr>
            <tr>
              <td className="pb-1">Last Name </td>
              <td align="right">{data?.lastName}</td>
            </tr>
            <tr>
              <td className="pb-1">Address </td>
              <td align="right">{data?.address}</td>
            </tr>
            <tr>
              <td className="pb-1">Postcode </td>
              <td align="right">{data?.postcode}</td>
            </tr>
            <tr>
              <td className="pb-1">Email </td>
              <td align="right">{data?.email}</td>
            </tr>
            <tr>
              <td className="pb-1">Password </td>
              <td align="right">{data?.password}</td>
            </tr>
            <tr>
              <td className="pb-1">Telephone </td>
              <td align="right">{data?.tel}</td>
            </tr>
            <tr>
              <td className="pb-1">Accept term and conditions </td>
              <td align="right">{data?.isAccept ? "Accept" : "Unaccept"} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
