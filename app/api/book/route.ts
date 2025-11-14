import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Booking received:', body)
    return NextResponse.json({ ok: true, message: 'Booking confirmed', booking: body })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }
}     