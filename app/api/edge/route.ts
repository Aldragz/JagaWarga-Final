export const runtime = 'edge';
export const preferredRegion = 'auto'; // Otomatis pilih region terdekat

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  // Simulasi data dari edge
  const edgeData = {
    message: 'Response dari Edge Function (Global Scale)',
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || 'auto',
    performance: '⚡ Sub-100ms latency global',
    features: {
      cctv_status: 'active',
      active_cameras: 456,
      total_complexes: 89,
      active_users: 1234
    }
  };

  if (action === 'ping') {
    return new Response(
      JSON.stringify({ pong: true, time: Date.now() }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
        },
      }
    );
  }

  if (action === 'stats') {
    return new Response(
      JSON.stringify(edgeData),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      message: 'JagaWarga Edge Function',
      endpoints: [
        'GET /api/edge?action=ping - Test koneksi edge',
        'GET /api/edge?action=stats - Dapatkan statistik real-time'
      ]
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600',
      },
    }
  );
}

// Support POST method
export async function POST(request: Request) {
  const body = await request.json();
  
  return new Response(
    JSON.stringify({
      received: body,
      processed_at: new Date().toISOString(),
      edge_processed: true
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}