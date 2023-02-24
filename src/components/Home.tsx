import React, { useContext } from "react";
import { AuthContext, UserRegister } from "../context/AuthenProvider";

type Props = {};

const Home = (props: Props) => {
  const authProvider = useContext(AuthContext);
  const userInfo = authProvider?.dataProvider?.userLogined as UserRegister;

  const userLogout = (): void => {
    authProvider?.logout();
  };

  return (
    <div className="container-fluid p-4 h-full flex align-middle justify-center bg-[#e8e8e8]">
      <div className="flex flex-col justify-center w-[400px]">
        <h1 className=" text-center ">Information</h1>

        <table>
          <tbody>
            <tr>
              <td className="pb-1">Gender </td>
              <td className="pb-1" align="right">
                {userInfo.gender === 0 ? "Male" : "Female"}
              </td>
            </tr>
            <tr>
              <td className="pb-1">First Name </td>
              <td className="pb-1" align="right">
                {userInfo?.firstName}
              </td>
            </tr>
            <tr>
              <td className="pb-1">Last Name </td>
              <td className="pb-1" align="right">
                {userInfo?.lastName}
              </td>
            </tr>
            <tr>
              <td className="pb-1">Address </td>
              <td className="pb-1" align="right">
                {userInfo?.address}
              </td>
            </tr>
            <tr>
              <td className="pb-1">Postcode </td>
              <td className="pb-1" align="right">
                {userInfo?.postcode}
              </td>
            </tr>
            <tr>
              <td className="pb-1">Email </td>
              <td className="pb-1" align="right">
                {userInfo?.email}
              </td>
            </tr>
            <tr>
              <td className="pb-1">Password </td>
              <td className="pb-1" align="right">
                {userInfo?.password}
              </td>
            </tr>
            <tr>
              <td className="pb-1">Telephone </td>
              <td className="pb-1" align="right">
                {userInfo?.tel}
              </td>
            </tr>
            <tr>
              <td className="pb-1 whitespace-nowrap">
                Accept term and conditions{" "}
              </td>
              <td className="pb-1" align="right">
                {userInfo?.isAccept ? "Accept" : "Unaccept"}{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => userLogout()}
        >
          {" "}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
