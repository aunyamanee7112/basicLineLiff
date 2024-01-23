import liff from "@line/liff";
import React, { useEffect } from "react";

const Test = () => {
  const handlerGetProfile = async () => {
    const { pictureUrl, userId, statusMessage, displayName } =
      await liff.getProfile();
      return pictureUrl
  };
  useEffect(() => {
    console.log("isInCilent =>>>", liff.isInClient());
    // lift ready
    liff.ready
      .then(() => {
        if (liff.getOS() === "android") {
          console.log("android");
        } else {
          handlerGetProfile();
        }
      })
      .catch(() => {});
    // get email 
    liff.getDecodedIDToken()?.email
    // share target picker 
    // liff.shareTargetPicker([{type: }])
    liff.closeWindow()
  }, []);

  return <div>Test </div>;
};

export default Test;
