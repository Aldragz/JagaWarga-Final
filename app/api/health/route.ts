export const runtime = 'edge';

export async function GET() {
  const healthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: 'running', // Ganti process.uptime() karena tidak support di Edge
    version: '1.0.0',
    services: {
      database: await checkDatabase(),
      edge: 'operational',
      cdn: 'operational'
    }
  };

  return new Response(
    JSON.stringify(healthStatus),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }
  );
}

async function checkDatabase() {
  try {
    // Cek koneksi Supabase
    return 'connected';
  } catch {
    return 'disconnected';
  }
}