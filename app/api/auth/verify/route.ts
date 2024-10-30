import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  const findCode = await prisma.verificationCode.findFirst({
    where: {
      code,
    },
  });

  if (!findCode) {
    return NextResponse.json({ error: 'Code not found' }, { status: 404 });
  }

  await prisma.user.update({
    where: {
      id: findCode.userId,
    },
    data: {
      verified: new Date(),
    },
  });

  await prisma.verificationCode.delete({
    where: {
      id: findCode.id,
    },
  });

  return NextResponse.redirect(new URL('/?verified', req.url));
}
