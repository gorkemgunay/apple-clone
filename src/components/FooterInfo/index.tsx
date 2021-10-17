import React from "react";
import "./FooterInfo.css";

interface Props {}

const FooterInfo: React.FC<Props> = () => {
  return (
    <div className="footerInfo">
      <p>
        1. SharePlay coming soon. An Apple Fitness+ subscription is required for
        all participants in a SharePlay Group Workout. ​​Apple Fitness+ requires
        iOS 14.3 or later, iPadOS 14.3 or later, watchOS 7.2 or later, and tvOS
        14.3 or later. To get the newest features, use Apple Fitness+ with Apple
        Watch Series 3 or later, with watchOS 8 paired with iPhone 6s or later
        with iOS 15, iPad with iPadOS 15, Apple TV 4K or Apple TV HD with tvOS
        15.
      </p>
      <p>
        2. $9.99/month after free trial. No commitment. Plan automatically
        renews after trial until cancelled.
      </p>
      <p>
        To access and use all the features of Apple Card, you must add Apple
        Card to Wallet on an iPhone or iPad with the latest version of iOS or
        iPadOS. Update to the latest version by going to Settings {">"} General{" "}
        {">"} Software Update. Tap Download and Install.
      </p>
      <p>Available for qualifying applicants in the United States.</p>
      <p>
        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
      </p>
      <p>
        Learn more about how Apple Card applications are evaluated at{" "}
        <a href="">support.apple.com/kb/HT209218</a>.
      </p>
      <p>
        Apple TV+ is $4.99/month after free trial. One subscription per Family
        Sharing group. Offer good for 3 months after eligible device activation.
        Plan automatically renews until cancelled. Restrictions and other{" "}
        <a href="">terms</a> apply.
      </p>
    </div>
  );
};

export default FooterInfo;
