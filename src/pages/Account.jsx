import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaUserAlt } from "react-icons/fa";
import Orders from "./Orders";

const Account = () => {
  return (
    <div className="account">
      <h2 className="accounTitle">My account</h2>
      <p className="accountSubTitle">Welcome Ales</p>
      <Tabs>
        <TabList>
          <Tab>Info</Tab>
          <Tab>My orders</Tab>
          <Tab>Change Info</Tab>
          <Tab>Change Password</Tab>
          <Tab>No Entry</Tab>
        </TabList>

        <TabPanel>
          <h3 className="accountContentTitle">Info</h3>
          <div className="accountContentGroups">
            <div className="accountContentGroupsLeft">
              <div className="accountContentGroup">
                <span className="accountLight">Username:</span>
                <span className="accountBold">Ales</span>
              </div>
              <div className="accountContentGroup">
                <span className="accountLight">email:</span>
                <span className="accountBold">Ales@email.com</span>
              </div>
              <div className="accountContentGroup">
                <span className="accountLight">Country:</span>
                <span className="accountBold">Czech</span>
              </div>
              <div className="accountContentGroup">
                <span className="accountLight">City:</span>
                <span className="accountBold">Brno</span>
              </div>
              <div className="accountContentGroup">
                <span className="accountLight">Tel:</span>
                <span className="accountBold">+420 777 777 777</span>
              </div>
            </div>
            <div className="accountContentGroupsRight">
              <img src="../uploads/user.png" alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">My Orders</h3>
          <Link to='/orders/3424'>  
        <h4 className="orderId">order ID: 34528</h4>
        <h4 className="orderId">order ID: 34529</h4>
        <h4 className="orderId">order ID: 34530</h4>

    </Link>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">Change Info</h3>
          <div className="accountContentGroups">
            <div className="formSignDiv updateInfo">
              <form>
                <h3 className="formSignTitle">Login</h3>
                <div className="formSignGroups">
                  <input type="text" placeholder="username..." required />
                  <input type="password" placeholder="password..." required />
                </div>
                <button>Update Info</button>
              </form>
            </div>
            <div className="updateImage updateImage">
              <label>
                  <FaUserAlt/>
                  <input type="file" id='image'/>
              </label>

            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">Change password</h3>
          <div className="formSign updatePassword">
            <div className="formSignDiv updateInfo">
              <form>
                <div className="formSignGroups">
                  <input
                    type="text"
                    placeholder="Your Username"
                    value="pepa"
                    required
                  />
                  <input
                    type="email"
                    placeholder="email"
                    value="pepa@pea.com"
                    required
                  />
                            <input
                    type="text"
                    placeholder="country"
                    value="Czech"
                    required
                  />
                            <input
                    type="text"
                    placeholder="phone"
                    value="777777 777"
                    required
                  />
                            <input
                    type="email"
                    placeholder="email"
                    value="pepa@pea.com"
                    required
                  />
                  <input type="password" placeholder="Your password" required />
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    required
                  />
                </div>
                <button>Update Password</button>
              </form>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">Close account</h3>
          <div className="accountContentGroups">
            <p className="accountCloseText"> Are you sure ?</p>
            <button className="closeBtn"> Close Account</button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Account;
