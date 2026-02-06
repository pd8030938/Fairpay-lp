import { dbMetrics } from '@/lib/dbMetrics';
import { NextResponse } from 'next/server';

export async function GET() {
  // Expor apenas em dev / não-producao para evitar vazamento de informações sensíveis
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Unavailable in production' }, { status: 403 });
  }

  return NextResponse.json(dbMetrics.getMetrics());
}
