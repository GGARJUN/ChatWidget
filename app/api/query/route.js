// app/api/query/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { query_text, project_id, tags } = body;

    console.log('Received:', { query_text, project_id, tags });

    // Mock response for now — replace with real logic later
    return NextResponse.json({
      answer: `You asked: "${query_text}" for project ID: "${project_id}" with tags: ${tags.join(', ')}`,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}