import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import hyveLogo from "../../assets/images/hyveLogo.png";
import Quote from "../../assets/svgs/blockquote.svg";

import Eye from "../../assets/svgs/eye.svg";
import AppBtn from "../../components/AppBtn/AppBtn";
import cloudColor from "../../assets/images/cloudColor.png";
import AppInput from "../../components/AppInput/AppInput";
import { stateLga } from "../../contsants/states";
import AppInputWithPhone from "../../components/AppInputWithPhone/AppInputWithPhone";
import TextHeader from "../../components/TextHeader/TextHeader";
import { customStyles } from "../../contsants/customStyles";
import InputHeader from "../../components/InputHeader/InputHeader";

const Register = ({ setShowCurrent }) => {
  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let stateyArray = [];
    const newData = Object.entries(stateLga);
    newData.map((item, index) => {
      stateyArray.push({
        value: item[0],
        label: item[0],
      });
    });
    setState(stateyArray);
  }, []);

  useEffect(() => {
    if (value != null) {
      let distrciyArray = [];
      const newData = Object.entries(stateLga).find(
        (_items) => _items[0] === value
      );

      newData[1].map((item, index) => {
        distrciyArray.push({
          value: item,
          label: item,
        });
      });
      setDistrict(distrciyArray);
    }
  }, [value]);

  const submitForm = (e) => {
    e.preventDefault();
    window.location.href = "/verification";
  };

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-0">
      <div className="w-full flex flex-col justify-center mt-20 px-10 md:px-28  mb-20 items-center h-[100%]">
        <div className="w-[100%] md:w-[50%] top-0 right-0 left-0 flex bg-white z-50 fixed justify-center md:justify-start py-5 pl-8">
          <img src={hyveLogo} alt="logo" className=" w-[150px]" />
        </div>

        <TextHeader
          title="Create HyvePay Account"
          subTitle="Fill in the information below to create your account"
          className="text-center"
          subTextCassName="text-center"
        />

        <div className="form w-full mt-10">
          <form onSubmit={submitForm}>
            <div className="form-group flex-col md:flex-row">
              <div>
                <AppInput
                  hasPLaceHolder={true}
                  placeholderTop="First Name*"
                  placeholder="First Name"
                />
              </div>
              <div className="md:mt-0 -mt-5">
                <AppInput
                  hasPLaceHolder={true}
                  placeholderTop="Last Name*"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mt-0 md:mt-5 mb-0 md:mb-10">
              <AppInput
                hasPLaceHolder={true}
                placeholderTop="Email Address*"
                placeholder="Enter your valid email address"
              />
            </div>

            <div className="md:mt-5">
              <AppInputWithPhone
                placeholderTop="Phone Number*"
                placeholder="Number* (WhatsApp)"
                hasPLaceHolder={true}
              />
            </div>

            <div className="mt-5 md:mt-10">
              <AppInput
                hasPLaceHolder={true}
                placeholderTop="Address/Location*"
                placeholder="Enter your address"
              />
            </div>

            <div className="mt-5 md:mt-10">
              <InputHeader text="State" />

              <Select
                options={state}
                onChange={(item) => {
                  setValue(item.value);
                }}
                styles={customStyles}
                placeholder="Choose state"
              />
            </div>
            <div className="mt-5 md:mt-10">
              <InputHeader text="District" />

              <Select
                options={district}
                styles={customStyles}
                placeholder="Choose district"
              />
            </div>

            <div className="mt-5 md:mt-10">
              <AppInput
                rightImg={Eye}
                leftImg={Lock}
                hasPLaceHolder={true}
                placeholderTop="Password *"
                placeholder="Min of 8 characters"
              />
            </div>
            <div className="mt-5 md:mt-10">
              <AppInput
                rightImg={Eye}
                leftImg={Lock}
                hasPLaceHolder={true}
                placeholderTop="Confirm Password *"
                placeholder="password must match"
              />
            </div>

            <span className="text-[10px] md:text-[12px] gray-color mt-8 inline-block font-montserrat italic">
              By clicking ‘Proceed’ you agree with the AutoHyve Terms and
              Policies
            </span>

            <AppBtn
              className="w-full bg-[#FAA21B]  text-[#000] mt-3"
              title="Proceed"
            />
          </form>
        </div>

        <p className=" mt-2 font-montserrat text-[15px]">
          Already have an account?{" "}
          <b onClick={() => navigate("/login")} className="cursor-pointer">
            Sign in
          </b>
        </p>
      </div>

      <div className="login_bg hidden md:flex fixed right-0 w-[50%] top-0 flex-col justify-between py-24 items-center px-24">
        <div className="w-full flex justify-between items-center">
          <img src={Quote} alt="" />
          <hr style={{ borderWidth: 0.5, width: 100 }} />
        </div>

        <div>
          <p className=" text-white slider-text font-montserrat">
            The automobile has not merely taken over the street, it has
            dissolved the living tissue of the city. Its appetite for space is
            absolutely insatiable; moving and parked, it devours urban land,
            leaving the buildings as mere islands of habitable space in a sea of
            dangerous and ugly traffic.
          </p>

          <div className="w-full flex justify-between items-center mt-8">
            <p className="base-text primary-color font-montserrat">
              James Marston Fitch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
