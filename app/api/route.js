import { NextResponse } from "next/server";
import PaytmChecksum from "paytmchecksum";
import https from "https";

export async function POST(req, res) {
  const data = await req.json();

  let sentData;

  var paytmParams = {
    MID: "ICbdTt13521781541122",
    ORDER_ID: "" + Math.floor(Date.now() / 1000) + "-" + Math.random(),
    KEY: "AkE6PE0U09UgX3s1",
    CUST_ID: Math.random() * 23456,
  };

  paytmParams.body = {
    requestType: "Payment",
    mid: paytmParams.MID,
    websiteName: "YOUR_WEBSITE_NAME",
    orderId: paytmParams.ORDER_ID,
    callbackUrl: "/",
    txnAmount: {
      value: +data.Amount,
      currency: "INR",
    },
    userInfo: {
      custId: paytmParams.CUST_ID,
    },
  };

  /*
   * Generate checksum by parameters we have in body
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    "AkE6PE0U09UgX3s1"
  ).then(function (checksum) {
    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    var options = {
      /* for Staging */
      hostname: "securegw-stage.paytm.in" /* for Production */, // hostname: 'securegw.paytm.in',

      port: 443,
      path: `/theia/api/v1/initiateTransaction?mid=${paytmParams.MID}&orderId=${paytmParams.ORDER_ID}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": post_data.length,
      },
    };

    var response = "";
    var post_req = https.request(options, function (post_res) {
      post_res.on("data", function (chunk) {
        response += chunk;
      });

      post_res.on("end", function () {
        // console.log("Response: ", response);
        sentData = JSON.parse(response);
        return NextResponse.next(sentData);
      });
    });

    post_req.write(post_data);
    post_req.end();
  });

  return NextResponse.json(data, {
    status: 201,
  });
}
