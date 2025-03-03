import React, { useState } from "react";
import TextField from "./../../components/TextField";
import FormGroup from "../../components/FormGroup";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import PopupModel from "../../components/PopupModel";
import ProfileEditor from "../ProfileEditor";
function ProfileContainer() {
  const [isVisible, setIsVisible] = useState(false);
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <div className="flex flex-col p-10">
      <div className="flex justify-center items-center">
        <Avatar user={userInfo} className={"w-28 h-28"} />
      </div>
      <div className="flex flex-col space-y-3 mt-5">
        <FormGroup title={"Name"}>
          <h1 className="text-secondary">xxxx</h1>
        </FormGroup>
        <FormGroup title={"User Name"}>
          <h1 className="text-secondary">@xxxx</h1>
        </FormGroup>
        <FormGroup title={"Job"}>
          <h1 className="text-secondary">Designer</h1>
        </FormGroup>
        <FormGroup title={"Email"}>
          <h1 className="text-secondary">example@gmail.com</h1>
        </FormGroup>
        <FormGroup title={"Mobile"}>
          <h1 className="text-secondary">+91-15262833930</h1>
        </FormGroup>
      </div>
      <div className="mt-5">
        <Button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Edit Profile
        </Button>
      </div>
      <PopupModel visible={isVisible} setVisible={setIsVisible}>
        <ProfileEditor />
      </PopupModel>
    </div>
  );
}

export default ProfileContainer;
