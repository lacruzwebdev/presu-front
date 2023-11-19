import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  const { data } = await req.json();

  const { slug, amount, costs } = data;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        elementosComprados: costs,
        presupuesto: slug
      }
    });

    const {client_secret} = paymentIntent;

    return NextResponse.json(client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}