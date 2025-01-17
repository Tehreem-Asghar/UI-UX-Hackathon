import { shipEngine } from "../../../../../helper/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: {
  params: Promise<{ labelId: string }>
}) {
  const labelId = (await params).labelId;
  if (!labelId) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    // you have two options to track
    // you can track using label id
    const label = await shipEngine.trackUsingLabelId(labelId);
    // or
    // you can track using carrier code and tracking number
    // const label = await shipengine.trackUsingCarrierCodeAndTrackingNumber({
    //   carrierCode: "carrier code", // Replace with the actual carrier code
    //   trackingNumber: "tracking number", // Replace with the actual tracking number
    // });

    console.log(label);

    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}




// import { shipEngine } from "@/helper/shipEngine";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET( req: NextRequest, { params }: { params: { labelId: string } }) {
//   const labelId = String(params.labelId);  // Ensure it's a string

//   try {
//     const label = await shipEngine.trackUsingLabelId(labelId);  // Call API with labelId
//     return NextResponse.json(label, { status: 200 });  // Return label info
//   } catch (error : any) {
//     console.log(error);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,  // Internal Server Error
//     });
//   }
// }

